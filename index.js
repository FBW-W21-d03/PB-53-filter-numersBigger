const array = [80, 120, 90, 130, 145, 99, 85, 125, 132];

const array2 = array.filter((item) => {

    return item > 100;


});
array2.sort();
console.log(array);
console.log("array 2",array2);