
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const resetButton = document.getElementById('reset');

  const myQuestions = [
    {
      question: "1) Year the AMDT school of creativity started ?",
      answers: {
        a: "2005",
        b: "2003",
        c: "2006",
        d: "2004"
      },
      correctAnswer: "a"
    },
    {
      question: "2) How many people got together and started the AMDT ? ",
      answers: {
        a: "1",
        b: "4",
        c: "2",
        d: "3"
      },
      correctAnswer: "c"
    },
    {
      question: "3) Where is AMDT located ?",
      answers: {
        a: "Bambalapitiya",
        b: "Kollupitiya",
        c: "Wellawatta",
        d: "Malabe"
      },
      correctAnswer: "a"
    },
    {
      question: "4) In what year was the last AMDT premiere league held ?",
      answers: {
        a: "2019",
        b: "2020",
        c: "2018",
        d: "2021"
      },
      correctAnswer: "b"
    },
    {
      question: "5) Who are the AMDT partners ?",
      answers: {
        a: "Bradford College & Pearson",
        b: "Pearson & Falmouth University",
        c: "Falmouth University & Brunel University",
        d: "Osnabruck University & KEA"
      },
      correctAnswer: "b"
    },
    {
      question: "6) which highest qualification do AMDT offer ?",
      answers: {
        a: "BTEC(HND) and BA(Hons)",
        b: "BTEC HND",
        c: "BA(Hons)",
        d: "Foundation Diploma"
      },
      correctAnswer: "a"
    },
    {
      question: "7) Study options in AMDT ?",
      answers: {
        a: "Part Time",
        b: "Full time",
        c: "Part time & Full time",
        d: "Only first year full time"
      },
      correctAnswer: "c"
    },
    {
      question: "8) How old is AMDT school of creativity ?",
      answers: {
        a: "16",
        b: "14",
        c: "20",
        d: "15"
      },
      correctAnswer: "a"
    },
    {
      question: "9) Minimum required educational qualification to study at AMDT ?",
      answers: {
        a: "Ordinary Level",
        b: "Advanced Level",
        c: "Foundation Diploma",
        d: "NVQ level 3"
      },
      correctAnswer: "a"
    },
    {
      question: "10) What does AMDT do for the good of society ?",
      answers: {
        a: "Campaign for Breast cancers",
        b: "Campaign for the environment ",
        c: "Only educational",
        d: "Fund for poor people"
      },
      correctAnswer: "a"
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
      gameOverHTML += "<h2 class='green'>Cogratulations. !!!</h2>"
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