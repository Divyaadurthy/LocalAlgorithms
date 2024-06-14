function alternativeMerging(arr1, arr2) {

    let arr3 = new Array()

    let max_Length = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < max_Length; i++) {
        if (i < arr1.length) {
            arr3.push(arr1[i])
        } if (i < arr2.length) {
            arr3.push(arr2[i])
        }

    }

    return arr3.join();
}

console.log(alternativeMerging([2, 5, 6, 7, 8], ['a', 'b', 'c']))