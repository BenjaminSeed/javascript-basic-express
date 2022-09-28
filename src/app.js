const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
} = require('./lib/numbers');

const app = express();

// eslint-disable-next-line func-names
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.json({ result: firstCharacter(req.params.string) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  // eslint-disable-next-line radix
  const a = parseInt(req.params.a);
  // eslint-disable-next-line radix
  const b = parseInt(req.params.b);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(a) && isNaN(b)) {
    res.status(400).json({ Error: 'A and B Must contain numbers' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

module.exports = app;
