$(document).ready(function(){

    // Variable
    var words = ["wctc"];
    var randomWord = words[Math.floor(Math.random() * words.length)];

    console.log(randomWord);

    var correctWords = [];
    var wrongLetter = [];
    var answer = "";
    var answer2 = "";
    var maxAttemps = 6;

    var newe =`${randomWord.split("").map(value => `<span class="letter"> ${correctWords.includes(value) ? value : ""} </span>`).join("")}`;
    $("#wordOutput").html(newe);

    // Events

    $("button").click(letras);

    // Functions

    function letras (){

        // get value
        var inputLetter = $(this).data("letter");

        // verification 1
        if(randomWord.includes(inputLetter))
        {
            // storage value
            correctWords.push(inputLetter);

            // split, map word
            answer = `${randomWord.split("").map(value => `<span class="letter"> ${correctWords.includes(value) ? value : ""} </span>`).join("")}`;

            answer2 = `${randomWord.split("").map(value =>  correctWords.includes(value) ? value : "" ).join("")}`;

            $("#wordOutput").html(answer);

            console.log(answer);
            // verify if input match with random word
            if(randomWord === answer2)
            {
                $("#wordOutput3").text("You Won");;
            }
        }
        else
        {
            wrongLetter.push(inputLetter);
            var wrongString = wrongLetter.join(", ");

            $("#wordOutput2").text(wrongString);

            $(".figure-part:hidden").first().show();

            if (wrongLetter.length === maxAttemps )
            {
                $("#wordOutput3").text("You lost");
            }
        }
    }

});
