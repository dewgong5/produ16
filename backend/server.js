var express = require("express");
var app = express();
app.use(express.json()); 
const cors = require('cors');

app.use(cors());

// const userRoutes = require('./routes/user-routes').router;
// app.use(userRoutes);
const postRoutes = require('./routes/post-routes').router;
app.use(postRoutes);
const commentRoutes = require('./routes/comment-routes').router;
app.use(commentRoutes);

const PORT = process.env.PORT || 8081;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Hackathon-ideatree:Qw!!._me7V9!Q2T@cluster0.gq0icdy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
  try {
    await mongoClient.connect();
    await mongoClient.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await mongoClient.close();
  }
}
run().catch(console.dir);


// Add a basic route for testing the server
app.get('/', function(req, res){
    res.send('Hello World (First Update)!');
});


// Start the server
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}.`);
    console.log('Navigate to http://localhost:' + PORT + ' in your browser to check it locally.');
    console.log('If deployed, check your Google App Engine URL.');
});