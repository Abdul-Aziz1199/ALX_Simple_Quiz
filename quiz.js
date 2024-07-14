



    function checkAnswer(){

    let correctAnswer = "4";

    let  userAnswer = document.querySelector('input[name="quiz"]').value ;
    if (userAnswer === "4"){
        document.getElementById("feedback").textContent = "Correct! Well done";
    }
    else{
        document.getElementById("feedback").textContent = "Thats incorrect. Try again";
    }
};

    document.getElementById("submit-answer").addEventListener('click',checkAnswer);




