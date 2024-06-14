function bestTimeBuy(arr) {

    let profit = 0
    let min_Val = arr[0]
    let max_val =  arr[0]


    for (let i=1;i<arr.length;i++) {

        if (arr[i] < min_Val) {
            min_Val=arr[i]



        } else {

            if (arr[i] > max_val) {

              max_val = arr[i]


            }

            profit = max_val - min_Val


        }

        return profit;


    }
}

console.log(bestTimeBuy([1,2,3,4,5]))