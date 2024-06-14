function dummyDup(arr3) {

    return [...new Set(arr3)]



}


console.log(dummyDup([3,3,7,9,9,0,0]))