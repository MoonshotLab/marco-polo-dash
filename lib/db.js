const MongoClient = require('mongodb').MongoClient;
const Promise = require('bluebird');

let database = null;

MongoClient.connect(process.env.DB_URI, function(err, db) {
  if (err) {
    console.log(`Error connecting to db at ${process.env.DB_URI}`, err);
  } else {
    console.log(`Connected to db at ${process.env.DB_URI}`);
    database = db;
  }
});

function logLyrebirdUtterance(utteranceObj) {
  const collection = database.collection('lyrebird-utterances');

  collection.insert(utteranceObj, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Logged Lyrebird utterance "${utteranceObj.utterance}"`);
    }
  });
}

function logSalReaction(reactionObj) {
  const collection = database.collection('sal-reactions');

  collection.insert(reactionObj, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Logged SAL Reaction`);
    }
  });
}

function asyncGetAllLyrebirdUtterances() {
  return new Promise((resolve, reject) => {
    const collection = database.collection('lyrebird-utterances');
    collection.find({}).toArray(function(err, docs) {
      if (err) reject(err);
      resolve(docs);
    });
  });
}

module.exports = {
  logLyrebirdUtterance,
  logSalReaction,
  asyncGetAllLyrebirdUtterances
};
