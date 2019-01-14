const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {


};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker: result-calculated', (event) =>{
    const numberIsPrime = event.detail
    this.displayResult(numberIsPrime)
  })
}

ResultView.prototype.displayResult = function (result) {
const resultElement = document.querySelector('#result')
if (result === false) {
resultElement.textContent = `No! It's not a prime number.`
}
else {
  resultElement.textContent = `Yes! It's a prime number.`
}
};

module.exports = ResultView;
