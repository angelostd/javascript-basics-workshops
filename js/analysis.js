// Helpers
function isEven(number) {
    return ((number % 2) === 0);
}
function calcAverage(array) {
    const sumArray = array.reduce(
        function (value = 0, newElement) {
            return value + newElement;
        }
    );
    const averageArray = sumArray / array.length;
    return averageArray;
}

// Median calculator
function salariesMedian(array) {
    const middle = parseInt(array.length / 2);
    if (isEven(array.length)) {
        const middlePerson = array[middle - 1];
        const middlePerson2 = array[middle];
        const median = calcAverage([middlePerson, middlePerson2]);
        return median;
    } else {
        const middlePerson = array[middle];
        return middlePerson;
    }
}
// Ordering the info
const salariesMex = mexico.map(
    function (person) {
        return person.salary;
    }
);
const salariesMexSorted = salariesMex.sort(
    function (a, b) {
        return a - b;
    }
);
const medianAverageMex = salariesMedian(salariesMexSorted);

// top 10%
const spliceStart = (salariesMexSorted.length * 90) / 100;
const spliceCount = (salariesMexSorted.length - spliceStart);
const salariesMex10 = salariesMexSorted.splice(spliceStart, spliceCount);

const medianTop10Mex = salariesMedian(salariesMex10);

console.log({
    medianAverageMex,
    medianTop10Mex
})

// html code block
const autoCalcSavings = () => {
    let input = document.getElementById("incomeInput").value;
    const income = input;
    input = document.getElementById("expensesInput").value;
    const expenses = input;
    const savings = (income - expenses);
    const paragraphResult = document.getElementById("savings");
    paragraphResult.innerText = `$${savings}` 
}