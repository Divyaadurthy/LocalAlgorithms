function bestTime(arr){

    let profit =0;

    for(let i=1;i<arr.length;i++){

        if(arr[i]> arr[i-1]){

            profit += arr[i] - arr[i-1]
        }
    }

    return profit;




}


console.log(bestTime([7, 1, 5, 3, 6, 4]))