const getMinSum = (arr) => {
let min = Math.min.apply(null, arr);

if (min === Infinity || isNaN(min)) return new Error('Массив либо пуст, либо не содержит цифр!!!');

let secondMin = Math.min.apply(null, arr.filter(num => num !== min));
return min + secondMin;
};

getMinSum([4, 0, 3, 19, 492, -10, 1]); // should return -10
getMinSum(['gdfgdfg', 'gfdhytjyjy', 'hgfhfgh']); // should return error
getMinSum([]); // should return error