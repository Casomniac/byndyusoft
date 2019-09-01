const getMinSum = (arr) => {
  let numArr = arr.filter(num => typeof(num) !== 'string'),
    firstMin,
    secondMin;

  if (numArr.length >= 2) {
    if (numArr[0] > numArr[1]) {
        firstMin = numArr[1];
        secondMin = numArr[0]

    } else {
        firstMin = numArr[0];
        secondMin = numArr[1]
    }

    for (let i = 2; i < numArr.length; i++) {
      if (numArr[i] <= firstMin) {
          secondMin = firstMin;
          firstMin = numArr[i]
      } else if (numArr[i] < secondMin){
          secondMin = numArr[i]
      }
    }
  } else return 'Массив либо пустой, либо содержит один элемент, либо не содержит цифр';

  return secondMin + firstMin
};

module.exports = getMinSum;
