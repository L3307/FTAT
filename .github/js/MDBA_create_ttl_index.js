// create_ttl_index.js
const { MongoClient } = require('mongodb');

async function main() {
    const uri = process.env.MONGODB_URI; // MongoDB connection string from environment variables
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('FTATLogs'); // Replace with your database name
        const collection = database.collection('FTAT Logs'); // Replace with your collection name

        const result = await collection.createIndex(
            { "datetime": 1 },
            //{ expireAfterSeconds: 2592000 } // 30 days
            { expireAfterSeconds: 2160000 } // 25 days
        );

        console.log(`Index created: ${result}`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
