const array = [0, 8, 3, 2, 88, 1];
let count = 0;
function quickSort(arr) {
    let newArr = arr.concat();//копирование исходного массива в новый
    let minArr = [];//массив с мин. значениями
    let maxArr = [];//массив с макс. значениями
    let medium = newArr[Math.trunc(newArr.length/2)];//опорный элемент (середина)
 //   let zero = newArr[0];
    console.log("Опорный элемент: "+medium);
    console.log(Math.trunc(newArr.length/2));
    if (newArr.length < 2) {
        return newArr;
    }
    for (let i = 0; i < newArr.length; i++) {
        //console.log("Опорный элемент"+i+": "+medium);
        if (newArr[i]<medium) {
            minArr.push(newArr[i]);
        } else if (newArr[i]>medium) {
            maxArr.push(newArr[i]);
        }
 //       console.log(minArr, maxArr)
    }
    count++;
    if (count===20) {
        return;
    }
   return quickSort(minArr).concat(medium,quickSort(maxArr));
}
console.log(quickSort(array));