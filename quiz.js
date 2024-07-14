



    function checkAnswer(){

    let correctAnswer = "4";

    let  userAnswer = document.querySelector('input[name="quiz"]:checked').value ;
    if (userAnswer === correctAnswer ){
        document.getElementById("feedback").textContent = "Correct! Well done";
    }
    else if(userAnswer ==="22"){
        document.getElementById("feedback").textContent = "Thats incorrect. Try again";

    }else if(userAnswer ==="3"){
        document.getElementById("feedback").textContent = "Thats incorrect. Try again";
    }
    else{
        document.getElementById("feedback").textContent = "Thats incorrect. Try again";
    }
};

    document.getElementById("submit-answer").addEventListener('click',checkAnswer);




