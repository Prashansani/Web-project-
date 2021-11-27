
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const resetButton = document.getElementById('reset');

  const myQuestions = [
    {
      question: "1)Is AMDT Pearson approved?",
      answers: {
        a: "Yes",
        b: "No",
       
      },
      correctAnswer: "a"
    },
    {
      question: "2)How many Universities worldwide is recognised by Falmouth University? ",
      answers: {
        a: "55 creative universities",
        b: "10 creative universities",
        c: "50 creative universities",
        d: "35 creative universities"
      },
      correctAnswer: "c"
    },
    {
      question: "3)What was the year that brought AMDT to life?",
      answers: {
        a: "2005",
        b: "2008",
        c: "2010",
        d: "2015"
      },
      correctAnswer: "a"
    },
    {
      question: "4) How many types of courses are offered by AMDT",
      answers: {
        a: "12 Types of courses",
        b: "15 Types of courses",
        c: "20 Types of courses",
        d: "45 Types of courses"
      },
      correctAnswer: "a"
    },
    {
      question: "5)When can students participate the Amdt Exhibition?",
      answers: {
        a: "2 weeks after joining",
        b: "Anyone can join",
        c: "Upon the completion of the course ",
        d: "In the begining "
      },
      correctAnswer: "c"
    },
    {
      question: "6)To what category does the Interior design course fall into?",
      answers: {
        a: "Art and Design ",
        b: "Network Engineering",
        c: "HND",
        d: "Culinary"
      },
      correctAnswer: "a"
    },
    {
      question: "7)To what category does the Film and Television, sound media and motion graphics fall into?",
      answers: {
        a: "Tv series",
        b: "Social Media",
        c: "Creative Media",
        d: "Movie Marathon"
      },
      correctAnswer: "c"
    },
    {
      question: "8) How old is AMDT school of creativity ?",
      answers: {
        a: "16 years old",
        b: "99 years old",
        c: "42 years old",
        d: "35 years old"
      },
      correctAnswer: "a"
    },
    {
      question: "9)What’s the duration for the final year?",
      answers: {
        a: "1 year",
        b: "5 years",
        c: "11 months",
        d: "3 months"
      },
      correctAnswer: "a"
    },
    {
      question: "10) What’s the duration for advanced diploma courses?",
      answers: {
        a: "5 years",
        b: "9 years ",
        c: "2 years",
        d: "3 years"
      },
      correctAnswer: "d"
    }
  ];


(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let point = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        point=point+2;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
        point=point-1;
      }
    });

      if(point<0){
        point=0;
      }

      // show number of correct answers out of total
    //resultsContainer.innerHTML = `${point} out of ${(myQuestions.length)*2}`;

 
  var gameOverHTML = "<div id='myModal' class='modal'>"

   gameOverHTML += "<div class='modal-content'>"
    
    if (point>=12){
      gameOverHTML += "<h2 class='yellow'>Cogratulations. !!!</h2>"
    } 

    if (point<12){
      gameOverHTML += "<h2 class ='red'>Try Harder, Next Time</h2>"
    }
  gameOverHTML += "<h2>You have score : " + point+ " out of 20 points.</h2>"
  gameOverHTML +="<span id='close'>OK</span>"
  gameOverHTML += "</div>"
  
   var element = document.getElementById("marks");
    element.innerHTML = gameOverHTML;

    modaldisplay();
  }


  function modaldisplay(){
      var modal = document.getElementById("myModal");

      modal.style.display="inline-block";

    var span = document.getElementById("close");

    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', romoveModal);

  }

  
  function romoveModal(){
      var modal = document.getElementById("myModal");

      modal.style.display = "none";
    }

  // calling the fuction 
  buildQuiz();


  // Event listeners
  submitButton.addEventListener('click', showResults);

//   var span = document.getElementById("close");

//   try {
//   //Try 
//   span.addEventListener('click', romoveModal);
// }
// catch(err) {
//   span = document.getElementById("close");
//      if (!!span) {
//     alert("this is not null")
//     } else {
//     alert("this is null")
//     }

//   span.addEventListener('click', romoveModal);
// }

  // if(!!span){
  //   var span = document.getElementById("close");
  //   span.addEventListener('click', swapper, false);
  // }

})();


//  // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

//   // When the user clicks on <span> (x), close the modal
//   span.addEventListener('click', romoveModal);

//     function romoveModal(){
//     modal.style.display = "none";
//   }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }