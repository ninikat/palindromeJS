document.getElementById("enter").onclick = function() {
    let userWord1 = document.getElementById("userWord").value
    var userWord = userWord1;
    var newWord = "";
    var length = userWord.length;

    for (i = length; i > 0; i--) {
        letter = userWord[i - 1];
        newWord = newWord + letter;
    }

    
    if (userWord.toLowerCase() === newWord.toLowerCase() ) {
    document.getElementById("result").innerHTML="Your word is a Palindrome";
    } else {
    document.getElementById("result").innerHTML="Your word is NOT a Palindrome";
    }

}


