const service = require('../services/accountService');
const store = require('../models/memoryStore');

exports.handleEvent = (req, res) => {
  const result = service.processEvent(req.body);
  if (!result) return res.status(404).send(0);
  return res.status(201).json(result);
};

exports.getBalance = (req, res) => {
  const { account_id } = req.query;
  const balance = service.getBalance(account_id);
  if (balance === null) return res.status(404).send(0);
  return res.status(200).send(balance.toString());
};

exports.reset = (req, res) => {
  store.reset();
  res.sendStatus(200);
};