//console.log("testing...");

const cheer = new Audio("audio/cheer.wav");
const boo = new Audio("audio/boohiss.wav");

//---------------Q1---------------------------
const a_correct = document.querySelector(".correctAnswer");
const js_answerText = document.querySelector(".answerText");
const b_wrong = document.querySelector(".wrongAnswerB");
const c_wrong = document.querySelector(".wrongAnswerC");
const d_wrong = document.querySelector(".wrongAnswerD");

a_correct.addEventListener("click", function() {
    js_answerText.classList.remove("hidden");
    a_correct.classList.add("correct");
    cheer.play();
});

b_wrong.addEventListener("click", function() {
    b_wrong.classList.add("wrong");
    boo.play();
});

c_wrong.addEventListener("click", function() {
    c_wrong.classList.add("wrong");
    boo.play();
});

d_wrong.addEventListener("click", function() {
    d_wrong.classList.add("wrong");
    boo.play();
});


//---------------Q2---------------------------
const a2_wrong = document.querySelector(".wrongAnswerA2");
const q2_answerText = document.querySelector(".answerTextQ2");
const b2_wrong = document.querySelector(".wrongAnswerB2");
const c2_correct = document.querySelector(".correctAnswerC2");
const d2_wrong = document.querySelector(".wrongAnswerD2");

a2_wrong.addEventListener("click", function() {
    a2_wrong.classList.add("wrong");
    boo.play();
});

b2_wrong.addEventListener("click", function() {
    b2_wrong.classList.add("wrong");
    boo.play();
});

c2_correct.addEventListener("click", function() {
    c2_correct.classList.add("correct");
    q2_answerText.classList.remove("hidden");
    cheer.play();
});

d2_wrong.addEventListener("click", function() {
    d2_wrong.classList.add("wrong");
    boo.play();
});


//---------------Q3---------------------------
const a3_wrong = document.querySelector(".wrongAnswerA3");
const q3_answerText = document.querySelector(".answerTextQ3");
const b3_correct = document.querySelector(".correctAnswerB3");
const c3_wrong = document.querySelector(".wrongAnswerC3");
const d3_wrong = document.querySelector(".wrongAnswerD3");

a3_wrong.addEventListener("click", function() {
    a3_wrong.classList.add("wrong");
    boo.play();
});

b3_correct.addEventListener("click", function() {
    b3_correct.classList.add("correct");
    q3_answerText.classList.remove("hidden");
    cheer.play();
});

c3_wrong.addEventListener("click", function() {
    c3_wrong.classList.add("wrong");
    boo.play();
});

d3_wrong.addEventListener("click", function() {
    d3_wrong.classList.add("wrong");
    boo.play();
});



//---------------Q4---------------------------
const a4_correct = document.querySelector(".correctAnswerA4");
const q4_answerText = document.querySelector(".answerTextQ4");
const b4_wrong = document.querySelector(".wrongAnswerB4");
const c4_wrong = document.querySelector(".wrongAnswerC4");
const d4_wrong = document.querySelector(".wrongAnswerD4");

a4_correct.addEventListener("click", function() {
    q4_answerText.classList.remove("hidden");
    a4_correct.classList.add("correct");
    cheer.play();
});

b4_wrong.addEventListener("click", function() {
    b4_wrong.classList.add("wrong");
    boo.play();
});

c4_wrong.addEventListener("click", function() {
    c4_wrong.classList.add("wrong");
    boo.play();
});

d4_wrong.addEventListener("click", function() {
    d4_wrong.classList.add("wrong");
    boo.play();
});


//---------------Q5---------------------------
const a5_wrong = document.querySelector(".wrongAnswerA5");
const q5_answerText = document.querySelector(".answerTextQ5");
const b5_wrong = document.querySelector(".wrongAnswerB5");
const c5_wrong = document.querySelector(".wrongAnswerC5");
const d5_correct = document.querySelector(".correctAnswerD5");

a5_wrong.addEventListener("click", function() {
    a5_wrong.classList.add("wrong");
    boo.play();
});

b5_wrong.addEventListener("click", function() {
    b5_wrong.classList.add("wrong");
    boo.play();
});

c5_wrong.addEventListener("click", function() {
    c5_wrong.classList.add("wrong");
    boo.play();
});

d5_correct.addEventListener("click", function() {
    d5_correct.classList.add("correct");
    q5_answerText.classList.remove("hidden");
    cheer.play();
});

//---------------Q6---------------------------
const a6_wrong = document.querySelector(".wrongAnswerA6");
const q6_answerText = document.querySelector(".answerTextQ6");
const b6_wrong = document.querySelector(".wrongAnswerB6");
const c6_correct = document.querySelector(".correctAnswerC6");
const d6_wrong = document.querySelector(".wrongAnswerD6");

a6_wrong.addEventListener("click", function() {
    a6_wrong.classList.add("wrong");
    boo.play();
});

b6_wrong.addEventListener("click", function() {
    b6_wrong.classList.add("wrong");
    boo.play();
});

c6_correct.addEventListener("click", function() {
    c6_correct.classList.add("correct");
    q6_answerText.classList.remove("hidden");
    cheer.play();
});

d6_wrong.addEventListener("click", function() {
    d6_wrong.classList.add("wrong");
    boo.play();
});

//---------------Q7---------------------------
const a7_wrong = document.querySelector(".wrongAnswerA7");
const q7_answerText = document.querySelector(".answerTextQ7");
const b7_wrong = document.querySelector(".wrongAnswerB7");
const c7_wrong = document.querySelector(".wrongAnswerC7");
const d7_correct = document.querySelector(".correctAnswerD7");

a7_wrong.addEventListener("click", function() {
    a7_wrong.classList.add("wrong");
    boo.play();
});

b7_wrong.addEventListener("click", function() {
    b7_wrong.classList.add("wrong");
    boo.play();
});

c7_wrong.addEventListener("click", function() {
    c7_wrong.classList.add("wrong");
    boo.play();
});

d7_correct.addEventListener("click", function() {
    d7_correct.classList.add("correct");
    q7_answerText.classList.remove("hidden");
    cheer.play();
});

//---------------Q8---------------------------
const a8_wrong = document.querySelector(".wrongAnswerA8");
const q8_answerText = document.querySelector(".answerTextQ8");
const b8_correct = document.querySelector(".correctAnswerB8");
const c8_wrong = document.querySelector(".wrongAnswerC8");
const d8_wrong = document.querySelector(".wrongAnswerD8");

a8_wrong.addEventListener("click", function() {
    a8_wrong.classList.add("wrong");
    boo.play();
});

b8_correct.addEventListener("click", function() {
    b8_correct.classList.add("correct");
    q8_answerText.classList.remove("hidden");
    cheer.play();
});

c8_wrong.addEventListener("click", function() {
    c8_wrong.classList.add("wrong");
    boo.play();
});

d8_wrong.addEventListener("click", function() {
    d8_wrong.classList.add("wrong");
    boo.play();
});

//---------------Q8---------------------------
const a9_wrong = document.querySelector(".wrongAnswerA9");
const q9_answerText = document.querySelector(".answerTextQ9");
const b9_correct = document.querySelector(".correctAnswerB9");
const c9_wrong = document.querySelector(".wrongAnswerC9");
const d9_wrong = document.querySelector(".wrongAnswerD9");

a9_wrong.addEventListener("click", function() {
    a9_wrong.classList.add("wrong");
    boo.play();
});

b9_correct.addEventListener("click", function() {
    b9_correct.classList.add("correct");
    q9_answerText.classList.remove("hidden");
    cheer.play();
});

c9_wrong.addEventListener("click", function() {
    c9_wrong.classList.add("wrong");
    boo.play();
});

d9_wrong.addEventListener("click", function() {
    d9_wrong.classList.add("wrong");
    boo.play();
});


//---------------Q4---------------------------
const a10_correct = document.querySelector(".correctAnswerA10");
const q10_answerText = document.querySelector(".answerTextQ10");
const b10_wrong = document.querySelector(".wrongAnswerB10");
const c10_wrong = document.querySelector(".wrongAnswerC10");
const d10_wrong = document.querySelector(".wrongAnswerD10");

a10_correct.addEventListener("click", function() {
    q10_answerText.classList.remove("hidden");
    a10_correct.classList.add("correct");
    cheer.play();
});

b10_wrong.addEventListener("click", function() {
    b10_wrong.classList.add("wrong");
    boo.play();
});

c10_wrong.addEventListener("click", function() {
    c10_wrong.classList.add("wrong");
    boo.play();
});

d10_wrong.addEventListener("click", function() {
    d10_wrong.classList.add("wrong");
    boo.play();
});
