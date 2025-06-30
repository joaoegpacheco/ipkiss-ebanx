const store = require('../models/memoryStore');

exports.processEvent = (event) => {
  const { type, origin, destination, amount } = event;

  switch (type) {
    case 'deposit':
      return store.deposit(destination, amount);
    case 'withdraw':
      return store.withdraw(origin, amount);
    case 'transfer':
      return store.transfer(origin, destination, amount);
    default:
      return null;
  }
};

exports.getBalance = (accountId) => store.getBalance(accountId);
