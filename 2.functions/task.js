function getArrayParams(...arr) {
  //используем императивный подход, т.к. за 1 цикл решим сразу 3 задачи
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  for (let item of arr) {
    sum += item;
    min = item < min ? item : min;
    max = item > max ? item : max;
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return {min, max, avg};
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {return 0};
  return arr.reduce((acc,item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {return 0};
  return  Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {return 0};
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let item of arr) {
    if (item % 2 === 0) {
      sumEvenElement += item;
    } else {
      sumOddElement += item;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {return 0};
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let item of arr) {
    if (item % 2 === 0) {
      sumEvenElement += item;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) {return 0};
  let maxWorkerResult = -Infinity;
  let funcResult;
  for (let arr of arrOfArr) {
    funcResult = func(...arr);
    maxWorkerResult = maxWorkerResult > funcResult ? maxWorkerResult : funcResult;
  }
  return maxWorkerResult;
}
