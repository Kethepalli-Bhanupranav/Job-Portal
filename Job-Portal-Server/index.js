const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();
//Middlewares - 1
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); // <--- Added ObjectId here
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}
@job-portal.y5ueoz5.mongodb.net/?appName=Job-Portal`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Creating DB
    const db = client.db("JOb-Portal");
    const jobCollections = db.collection("Jobs");
    //POst a JOb

    app.post("/post-job", async (req, res) => {
      try {
        const body = req.body;
        body.createdAt = new Date();
        const result = await jobCollections.insertOne(body);
        if (result.insertedId) {
          return res.status(200).send(result);
        } else {
          return res.status(404).send({
            message: "Cannot insert! Try again later.",
            status: false,
          });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).send({
          message: "An error occurred while posting the job.",
          error: error.message,
        });
      }
    });
    //Get-jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      // console.log(req.params.email);
      const jobs = await jobCollections.find({ postedBy: req.params.email }).toArray();
      res.send(jobs);
    });

    //get single job using id
    app.get("/all-jobs/:id", async(req,res)=>{
     const id = req.params.id;
     const job = await jobCollections.findOne({
      _id: new ObjectId(id)
     })
     res.send(job)      
    })
    // Delete a Job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }; // <--- Rectified line
      const result = await jobCollections.deleteOne(filter);
      res.send(result);
    });

    //Update a Job
    app.patch("/update-job/:id",async(req,res)=>{
    const id = req.params.id;
    const jobData = req.body;
    const filter = {_id: new ObjectId(id)};
    const options = {upsert:true};
    const UpdateDoc = {
      $set: {
        ...jobData
      },
    };
    const result = await jobCollections.updateOne(filter,UpdateDoc,options);
    res.send(result);
    });

    //Get-all jobs

    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollections.find({}).toArray();
      res.send(jobs);
    });
    // app.post("/register",async(req,res)=>{
    //     try{

    //     }catch(error){

    //     }
    // })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Developer!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
