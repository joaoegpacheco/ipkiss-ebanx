const accounts = {};

module.exports = {
  getBalance: (id) => accounts[id] ?? null,
  deposit: (id, amount) => {
    const cents = Math.round(amount * 100);
    accounts[id] = (accounts[id] ?? 0) + cents;
    return { destination: { id, balance: accounts[id] / 100 } };
  },
  withdraw: (id, amount) => {
    const cents = Math.round(amount * 100);
    if (!accounts[id] || accounts[id] < cents) return null;
    accounts[id] -= cents;
    return { origin: { id, balance: accounts[id] / 100 } };
  },
  transfer: (origin, destination, amount) => {
    const cents = Math.round(amount * 100);
    if (!accounts[origin] || accounts[origin] < cents) return null;
    accounts[origin] -= cents;
    accounts[destination] = (accounts[destination] ?? 0) + cents;
    return { origin: { id: origin, balance: accounts[origin] / 100 },
    destination: { id: destination, balance: accounts[destination] / 100 }
    };
  },
  reset: () => Object.keys(accounts).forEach(k => delete accounts[k])
};
