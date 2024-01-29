const balances = [
  "$123.10",
  "$61 123.23",
  "$1,321,123.10",
  "$0.00",
  "$799.50",
  "$1 916 161 123.25",
];

const balanceNums = balances.map(balance => Number(balance.replace(/[^\d\.]/g, '')));
console.log(balanceNums) // [123.1, 61123.23, 1321123.1, 0, 799.5, 1916161123.25]

