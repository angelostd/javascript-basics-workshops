// const array = [100, 200, 300, 500];

// let sumArray = 0;
// for (let i = 0; i < array.length; i++) {
//     sumArray += array[i]
// }
// const averageArray = sumArray / array.length;

function saveData() {
    const textValue = document.getElementById('averageInput').value;
    let arrayNumber = [];
    let arrayText = textValue.split(", ");
    for(let i = 0; i < arrayText.length; i++){
        arrayNumber[i] = parseInt(arrayText[i]);
    }
    console.log(arrayNumber);
    return arrayNumber;
}

function calcAverage() {
    let array = saveData();
    const sumArray = array.reduce(
        function (value = 0, newElement) {
            return value + newElement;
        }
    );
    const averageArray = sumArray / array.length;
    console.log(averageArray);
}

// const array = [100, 200, 500, 40000000000];
// const middleArray = parseInt(array.length / 2);

// function isEven(number) {
//     if ((number % 2) === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let median;
// if (isEven(array.length)) {
//     const element = array[middleArray - 1];
//     const element2 = array[middleArray];
//     median = calcAverage([element, element2]);
// } else {
//     median = array[middleArray];
// }

function isEven(number) {
    if ((number % 2) === 0) {
        return true;
    } else {
        return false;
    }
}

function calcMedian() {
    let array = saveData();
    const middleArray = parseInt(array.length / 2);
    let median;
    if (isEven(array.length)) {
        const element = array[middleArray - 1];
        const element2 = array[middleArray];
        median = calcAverage([element, element2]);
    } else {
        median = array[middleArray];
    }
    console.log(median);
}

// let array1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
// array1.sort((a, b) => a - b);
// console.log(array1);

// let array1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
// const array1Count = {};

// array1.map(
//     function (element) {
//         if (array1Count[element]) {
//             array1Count[element] += 1;
//         } else {
//             array1Count[element] = 1;
//         }
//     }
// );

// const arrayReturned = Object.entries(array1Count).sort(
//     function (value, newValue) {
//         return value[1] - newValue[1];
//     }
// );

// const trend = arrayReturned[arrayReturned.length - 1];

function calcTrend() {
    let array = saveData();
    const arrayCount = {};
    array.map(
        function (element) {
            if (arrayCount[element]) {
                arrayCount[element] += 1;
            } else {
                arrayCount[element] = 1;
            }
        }
    );
    const arrayReturned = Object.entries(arrayCount).sort(
        function (value, newValue) {
            return value[1] - newValue[1];
        }
    );
    const trend = arrayReturned[arrayReturned.length - 1];
    console.log(trend);
}