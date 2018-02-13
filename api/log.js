const express = require('express');
const router = express.Router();

const db = require('./../lib/db');

router.post('/lyrebird/utterance', (req, res) => {
  if (!!req.body && req.headers.authorization === process.env.SECRET) {
    db.logLyrebirdUtterance(req.body);
    res.sendStatus(200);
  } else {
    console.log('unauthorized', req.headers.authorization);
    res.sendStatus(400);
  }
});

router.get('/lyrebird/utterance', (req, res) => {
  db
    .asyncGetAllLyrebirdUtterances()
    .then(utterances => {
      res.json(utterances);
    })
    .catch(e => {
      console.log(e);
      res.status(500).send(e);
    });
});

router.post('/sal/reaction', (req, res) => {
  if (!!req.body && req.headers.authorization === process.env.SECRET) {
    db.logSalReaction(req.body);
    res.sendStatus(200);
  } else {
    console.log('unauthorized', req.headers.authorization);
    res.sendStatus(400);
  }
});

router.post('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
