//console.log("testing...");

const cheer = new Audio("Sounds/cheer.wav");
const boo = new Audio("Sounds/boohiss.wav");
const correct = document.querySelector(".correctAnswer");
const answerText = document.querySelector('.answerText');
const wrong = document.querySelector(".wrongAnswer");

// if question is correct play cheer sound effect, display anser and change bg colour

correct.addEventListener('click', function() {
    answerText.classList.remove("hidden");
    correct.classList.add("correct");
    //cheer.play();

    //if answer is wrong play boo sound effect and change bg colour

    wrong.addEventListener('click', function() {
        wrong.classList.add("wrong");
        console.log('test')
            //boo.play();
    });

    //assign correct and wrong to answers




});