function mergeTwoArray(arr1,arr2) {

    let arr3 =new Array();

    arr3.push(arr1.concat(...arr2))



    return [arr3.join(" ")];



}


console.log(mergeTwoArray(['a','b','c','d'],[2,4,5,6,7]))