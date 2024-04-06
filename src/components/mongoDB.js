
const { MongoClient, ServerApiVersion } = require('mongodb');
const { fetchExternalImage } = require('next/dist/server/image-optimizer');
const uri = "mongodb+srv://admin-Carde:Cardenau2@mieconomia.ijvo2hx.mongodb.net/?retryWrites=true&w=majority&appName=miEconomia";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let results = [];

export async function addToCollection(descripcion, monto, fecha, donde) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Connect to the database and access its collection
    const database = client.db("miEconomia");
    const plata = database.collection("plata");
    
    // Create a document to insert
    const doc = {
      descripcion: descripcion,
      monto: monto,
      fecha: fecha,
      donde: donde
    }
    // Insert the defined document into the "haiku" collection
    await plata.insertOne(doc);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function findCollection() {
  
  try {
    await client.connect();
    // Get the database and collection on which to run the operation
    const database = client.db("miEconomia");
    const plata = database.collection("plata");

    // Query for movies that have a runtime less than 15 minutes
    const query = {};
    const options = {
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, descripcion:1 , monto:1 , fecha:1 , donde:1 },
    };

    // Execute query 
    const cursor = plata.find(query, options);

    // Print a message if no documents were found
    if ((await plata.countDocuments(query)) === 0) {
      console.log("No documents found!");
    }

    for await (const doc of cursor) {
        let descripcion = doc.descripcion;
        let monto = doc.monto;
        let fecha = doc.fecha;
        let donde = doc.donde;
        results.push({descripcion: descripcion,monto: monto,fecha: fecha,donde: donde});
    }
    return results
  } finally {
    await client.close();
  }
};

export async function deleteMany() {
  try {
    const database = client.db("miEconomia");
    const plata = database.collection("plata");
    /* Delete all documents that match the specified regular
    expression in the title field from the "movies" collection */
    const query = {  descripcion: { $regex: "Arreglo tele" }  };
    const result = await plata.deleteMany(query);
    // Print the number of deleted documents
    console.log("Deleted " + result.deletedCount + " documents");
  } finally {
    // Close the connection after the operation completes
    await client.close();
  }
}






