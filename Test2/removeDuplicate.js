function removeDuplicate(arr) {

 let set =new Set();


    for (let i in arr) {

        if (arr[i] != arr[i + 1]) {

            console.log(arr[i])

            set.add(arr[i])




        }

    }

    return set;
}

console.log(removeDuplicate([4,5,6,6,7,8,9,9]))
