let arr = [1, 0, 1, 4, 0, 2, 3, 0]; // arr1 = [0, 1, 2, 1, 0] [0 1 2 2 1 0]
function stepCheck(house) {
    let zero=0;
    const resultArray = [];
    const zeroArray = [];
    let distance = 0;
    for (let k = 0; k < house.length; k++) {
        if (house[k] === 0) {
            zero = k;
            break;
        }         
    }
    for (let i = 0; i < house.length; i++) {
        if (house[i] === 0) {
            zero = i;
            distance = Math.abs(i - zero);            
            resultArray.push(distance);
        } else {
            for (let j = i + 1; j < house.length; j++) {
                if (house[j] === 0) {
                    if (i-zero>j-i) {
                        distance = j-i;
                        resultArray.push(distance);
                        break;    
                    }                                    
                } else if (i-zero<=j-i) {
                    distance = Math.abs(i - zero);
                    resultArray.push(distance);
                    break;
                    }                    
            }
        }              
    }
    return resultArray;
}
console.log("originArray: " + arr);
console.log("resultArray: " + stepCheck(arr));

//дожать алгоритм