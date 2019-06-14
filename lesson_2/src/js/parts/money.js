const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

const calcCash = (own = 0, everyCash) => {
  let total = everyCash.reduce((total, currentValue) => total + currentValue) + own;
  return total;
}

const money = calcCash(null, cash);

export {money, eu, rus};