const express = require('express');
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());
router.use(express.text());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Hackathon-ideatree:Qw!!._me7V9!Q2T@cluster0.gq0icdy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const { ObjectId } = require('mongodb'); // Import ObjectId

const dbName = 'PromptCorn';
const postCollection = 'posts';
const commentCollection = 'comments';

const samplePost = {
    username: "Leyang",
    requesting: 1,  //Requesting = 1 means the user is trying to gather ideas from others, if = 0, user is sharing ideas 
    genre: {          
        romance: ["Sub categories go in here"],
        fantacy: [],
    },
    prompt: "Hey guys, I need some ideas about a romance+fantacy story and characters, please help.",
    requestCategory: ["plot", "character"]
}

router.post('/posts', async (req, res) => {
    try {
        await mongoClient.connect();
        const { username, requesting, genre, prompt, requestCategory } = req.body;
        
        if (!username || !requesting || !genre || !prompt || !requestCategory) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        if (requesting !== 1 && requesting !== 0) {
            return res.status(400).json({ message: 'Invalid value for requesting. It must be "1" or "0".' });
        }

        const result = await mongoClient.db(dbName).collection(postCollection).insertOne({ 
            username, 
            requesting,
            genre, 
            prompt, 
            requestCategory,
            likeCount: 0, 
            createdAt: new Date()
        });

        res.status(201).json({ message: 'Post created successfully', postId: result.insertedId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    } finally {
        await mongoClient.close();
    }
});


router.get('/posts', async (req, res) => {
    try {
        await mongoClient.connect();

        const posts = await mongoClient.db(dbName).collection(postCollection).find({}).toArray();

        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    } finally {
        await mongoClient.close();
    }
});

//Ex: http://localhost:8081/posts/65ff3e6834c8bb4f6356cab8
router.get('/posts/:id', async (req, res) => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db(dbName);
        const collection = db.collection(postCollection);

        const postId = new ObjectId(req.params.id);

        // Searching for the post by _id
        const post = await collection.findOne({ _id: postId });

        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Invalid post ID', error: error.message });
    } finally {
        await mongoClient.close();
    }
});


module.exports = {
    router,
}