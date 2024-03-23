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


//Ex: Invoke-RestMethod -Uri "http://localhost:8081/comments" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"username":"JohnDoe", "postId":"65ff3e5234c8bb4f6356cab7", "comment":"This is a test comment."}'
router.post('/comments', async (req, res) => {
    try {
        await mongoClient.connect();
        const db = mongoClient.db(dbName);
        const commentsCollection = db.collection(commentCollection);

        const { username, postId, comment } = req.body;

        // Validate the input
        if (!username || !postId || !comment) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Ensure the post ID is valid
        let postObjectId;
        try {
            postObjectId = new ObjectId(postId);
        } catch (error) {
            return res.status(400).json({ message: 'Invalid post ID' });
        }

        // Optionally, verify the post exists before adding a comment
        const postExists = await db.collection(postCollection).findOne({ _id: postObjectId });
        if (!postExists) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Insert the new comment
        const result = await commentsCollection.insertOne({
            username,
            postId: postObjectId,
            comment,
            createdAt: new Date()
        });

        res.status(201).json({ message: 'Comment added successfully', commentId: result.insertedId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    } finally {
        await mongoClient.close();
    }
});

module.exports = {
    router,
}