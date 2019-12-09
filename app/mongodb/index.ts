import { MeCabTokens } from "mecab-async";
import mongodb, { ObjectId } from "mongodb";

const url = "mongodb://mongo:27017";
const dbName = "tokenizer";
const collectionName = "queries";

export type Tokenizer = {
  _id?: ObjectId;
  query: string;
  tokens: MeCabTokens[];
};

const initDB = async () => {
  if (!mongodb) {
    return false;
  }
  const client = await mongodb.MongoClient.connect(url);
  const db = await client.db(dbName);
  const collection = db.collection<Tokenizer>(collectionName);

  return { client, collection };
};

export const add = async (data: Tokenizer) => {
  const db = await initDB();
  if (!db) {
    return;
  }
  const { client, collection } = db;

  const { query, tokens } = data;
  const insertData = await collection.insertOne({ query, tokens });
  client.close();
  return insertData;
};

export const get = async (query: string) => {
  const db = await initDB();
  if (!db) {
    return;
  }
  const { client, collection } = db;

  const data = await collection.findOne({ query });
  client.close();
  return data;
};
