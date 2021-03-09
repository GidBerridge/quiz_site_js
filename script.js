console.log("testing...");

const cheer = new Audio("audio/cheer.wav");
const boo = new Audio("audio/boohiss.wav");

// if question is correct play cheer sound effect, display anser and change bg colour

const correctTasks = function() {
    qtextbox.classList.remove("hidden");
    qtextbox.classList.add("correct");
    cheer.play();
};

//if answer is wrong play boo sound effect and change bg colour

const wrong = function() {
    qtextbox.classList.add("wrong");
    boo.play();
};

//assign correct and wrong to answers
const correct = document.querySelector(".correct");

correct.addEventListener("click", correctTasks);