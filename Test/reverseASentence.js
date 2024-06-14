//Reverse a sentence "This is a simple String"

function reveseSentence(sentence) {


    let reverseSentence = ' ';


    let arrayWords = sentence.split(' ');

    console.log(arrayWords)
    let reverseArray = arrayWords.reverse()

    console.log(reverseArray)

    reverseSentence = reverseArray.join(" ")

    console.log(reverseSentence)


    return reverseSentence;

}


console.log(reveseSentence("This is a fat book"))

