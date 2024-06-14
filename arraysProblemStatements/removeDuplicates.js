function removeDuplicates(arr) {

    let set = new Set();


    if (arr.length === 0) {

        return [0, []];
    }

    for (let i in arr) {


        if (arr[i] != arr[i + 1]) {

            set.add(arr[i])
        }

    }


    return [...set]
}

console.log(removeDuplicates([3, 5, 7, 2, 3, 5]))