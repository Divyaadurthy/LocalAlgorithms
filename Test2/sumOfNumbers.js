function sumOfNumbers(arr1) {
    let arr2 = [];


    for (let i in arr1) {
        
        console.log(arr1[i] * 2)

        arr2.push(arr1[i] * 2)


    }


    return arr2
}

console.log(sumOfNumbers([3, 6, 7, 7,8]))