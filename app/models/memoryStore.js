const accounts = {};

module.exports = {
  getBalance: (id) => accounts[id] ?? null,
  deposit: (id, amount) => {
    accounts[id] = (accounts[id] ?? 0) + amount;
    return { destination: { id, balance: accounts[id] } };
  },
  withdraw: (id, amount) => {
    if (!accounts[id] || accounts[id] < amount) return null;
    accounts[id] -= amount;
    return { origin: { id, balance: accounts[id] } };
  },
  transfer: (origin, destination, amount) => {
    if (!accounts[origin] || accounts[origin] < amount) return null;
    accounts[origin] -= amount;
    accounts[destination] = (accounts[destination] ?? 0) + amount;
    return {
      origin: { id: origin, balance: accounts[origin] },
      destination: { id: destination, balance: accounts[destination] }
    };
  },
  reset: () => Object.keys(accounts).forEach(k => delete accounts[k])
};
