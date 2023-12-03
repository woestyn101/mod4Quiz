// declaring html element variables with javascript

var body = document.body;
var header = document.createElement("header");
var divHighScores = document.createElement("div");
var divScore = document.createElement("div")
var divTimer = document.createElement("div");
var mainEl = document.createElement("main");
var titleHeading = document.createElement("h1");
var questionBox = document.createElement("h2");
var final = document.createElement("div");
var input = document.createElement("input")
var saveButton = document.createElement("button");
var startButton = document.createElement("button");
var footer = document.createElement("footer");
var paragraph = document.createElement("p");

// creating lists for arrays with answer options
var list1 = document.createElement("ul");
var list2 = document.createElement("ul");
var list3 = document.createElement("ul");
var list4 = document.createElement("ul");
var list5 = document.createElement("ul");

// don't display initial lists of answer options
list1.setAttribute("style", "display:none");
list2.setAttribute("style", "display:none");
list3.setAttribute("style", "display:none");
list4.setAttribute("style", "display:none");
list5.setAttribute("style", "display:none");



// setting up attributes for final input of user to store score and name
input.setAttribute("type", "text");
input.setAttribute("id", "userInitials");
input.setAttribute("style", "display:none");
// save button style and name to save name and score
saveButton.setAttribute("style", "display:none");
saveButton.classList.add("button-21");
saveButton.setAttribute("id", "saveBtn");
saveButton.textContent = "Save";

// add button style
startButton.classList.add("button-21");

// appending all the the html elements created with javascript
body.append(header);
header.appendChild(divHighScores);
header.appendChild(divScore);
header.appendChild(divTimer);
body.appendChild(mainEl);
body.appendChild(paragraph);
//mainEl.setAttribute("style", "background:yellow; width:50%")
mainEl.appendChild(titleHeading);
mainEl.appendChild(questionBox);
mainEl.appendChild(final);
final.appendChild(input);
final.appendChild(saveButton);
mainEl.appendChild(startButton);
mainEl.appendChild(list1);
mainEl.appendChild(list2);
mainEl.appendChild(list3);
mainEl.appendChild(list4);
mainEl.appendChild(list5);



//giving id to final element
final.setAttribute("id","last");



//declaring array answers and  questions
var question1 =  "How do you create a function in javascript?";

var question1Options = ["function = myFunction()", "function: myFunction", "function myFunction()", "function = myFunction{}"];

var question2 =  "Inside which element do we put the Javascript";
var question2Options = ["<javascript>", "<script>", "<scripting",  "<js>"];


var question3 =  "What is the correct syntax for referring to an external javasript file?"
var question3Options = ["<script href='xxx.js'>", "<script name='xxx.js'", "<script meta='xxx.js'", "<script src='xxx.js'"];


var question4 =  "How do you write 'Hello World in an alert box?";
var question4Options = ["mgsBox('Hellow World');", "msg('Hellow World');", "alert('Hellow World');", "alertBox('Hellow World');"]

var question5 =  "How do you write 'Hello World in an alert box?";
var question5Options = ["mgsBox('Hellow World');", "msg('Hellow World');", "alert('Hellow World');", "alertBox('Hellow World');"]

// setting up score variable
var score = 0;

// get higscores from local storage
const stuScores = JSON.parse(localStorage.getItem("mystudents")) || [];
console.log(stuScores);


function saveScore(){
    paragraph.textContent = input.value;
    
        // create object to save name and highscore
    var studentScore = {
        student: input.value,
        studentScore: score
    };

    console.log(studentScore);


    stuScores.push(studentScore); 
    // sorting the highscores
    stuScores.sort((a,b) => b.studentScore - a.studentScore);
    //just record the first 10 highest scors
    stuScores.splice(10);
    //store score and name to localstorage
    localStorage.setItem("mystudents", JSON.stringify(stuScores) );
    console.log(stuScores)
   // redirect to highscore page
   location.href="assets/pages/highscores.html";
    //window.open("assets/pages/highscores.html");
   }

// setting header with link to highscores and timer
divHighScores.setAttribute("id", "userScores");
divHighScores.textContent = "View Highscores";
divHighScores.addEventListener("click", goToScores)

divHighScores.addEventListener("mouseover", decorateLink);

function decorateLink(){
    divHighScores.setAttribute("style", "color:blue; text-decoration: underline;")
}


function decorateLink(){
    divHighScores.setAttribute("style", "color:blue; text-decoration: underline")
}

divHighScores.addEventListener("mouseout", returnStyle);

function returnStyle(){
    divHighScores.setAttribute("style", "color:black;")
}

function goToScores(){
    location.href="assets/pages/highscores.html";
}

//setting timer styles
divTimer.setAttribute("id", "downTimer");

var timer = 75;
divTimer.textContent = "Time: " + timer;





// divScore.textContent = score;
// console.log(score);

//function to run start page of quiz
function init(){

 titleHeading.textContent = "Coding Quiz Challenge";
 
 questionBox.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"

 startButton.textContent = "Start Quiz";
}

// initial page load
init();

startButton.addEventListener("click", firstQuestion);

 // function to run when start quiz button is clicked

function firstQuestion () {

    titleHeading.textContent = "";
    //questionBox.textContent = question1;
    startButton.setAttribute("style", "display:none")
    showQuestion(question1Options, list1, question1 )
    console.log(score);


    var myTimer = setInterval(countingDown, 1000);

 // timer started with first question
    function countingDown() {  
        timer--;
        console.log(timer);
        divTimer.textContent =  "Time: " + timer;

        if (timer == 0){
            clearInterval(myTimer);
           
                list1.setAttribute("style", "display:none");
                list2.setAttribute("style", "display:none");
                list3.setAttribute("style", "display:none");
                list4.setAttribute("style", "display:none");

                list4.setAttribute("style", "display:none");
                questionBox.textContent = "All done! Your final score is: " + score;
                input.setAttribute("style", "display:block");
                saveButton.setAttribute("style", "display:block");

                // add eventListener to save button
                saveButton.addEventListener("click", saveScore);
            
           

        }
    }
    
    
}

   // function to insert each array with quesiont and answer options

function showQuestion(array, ulid, theQuestion){
    ulid.setAttribute("style", "display:block;");
    for (let i = 0; i < array.length; i++) {
        questionBox.textContent = theQuestion;
        var liElement = document.createElement('li');
        ulid.appendChild(liElement);
        liElement.textContent = ( i + 1 ) + ". " + array[i];

        // adding eventlistener to answer options when clicked

        liElement.addEventListener("click", selectAnswer);

        // check for answer when option clicked

        function selectAnswer(event){
           console.log(event.target.textContent);  
          
              
              event.target.setAttribute(
                "style",
                "background: blue"
              );
              if (array == question1Options){
                console.log("Question 1")
               list1.setAttribute("style", "display:none");
               list2.setAttribute("style", "display:block");
                showQuestion(question2Options, list2, question2);

                 // conditions to check for correct answer for question 1
               if (event.target.textContent == "3. function myFunction()"){
                score += 5;
                paragraph.textContent = "Correct";
                console.log(score);
               
                
                console.log("correct");
               }else {
                score;
                timer-= 10;
                console.log("wrong");
                paragraph.textContent = "Wrong";
                
                
               }
                
              }else if (array == question2Options){
                console.log("Question 2")
                list2.setAttribute("style", "display:none");
                list3.setAttribute("style", "display:block");
                showQuestion(question3Options, list3, question3);
            // conditions to check for correct answer for question 2
                if (event.target.textContent == "2. <script>"){
                    score += 5;
                    console.log(score);
                    console.log("correct");
                    paragraph.textContent = "Correct";
                   }else {
                    score;
                    timer-= 10;
                    console.log("wrong");
                    paragraph.textContent = "Wrong";
                   }

              }else if (array == question3Options){
                console.log("Question 3")
                list3.setAttribute("style", "display:none");
                list4.setAttribute("style", "display:block");
                showQuestion(question4Options, list4, question4);

                // conditions to check for correct answer for question 3
                if (event.target.textContent == "4. <script src='xxx.js'"){
                    score += 5;
                    console.log(score);
                    console.log("correct");
                    paragraph.textContent = "Correct";
                    
                   }else {
                    score;
                    timer-= 10;
                    console.log("wrong");
                    paragraph.textContent = "Wrong";
                   }

              }else if (array == question4Options){
                console.log("Question 4")
                list3.setAttribute("style", "display:none");
                list4.setAttribute("style", "display:block");
                
                // condition to check for correct answer for question 4
                if (event.target.textContent == "3. alert('Hellow World');"){
                    score += 5;
                    console.log(score);
                    console.log("correct");
                    paragraph.textContent = "Correct";
                    
                   }else {
                    score;
                    timer-= 10;
                    console.log("wrong");
                    paragraph.textContent = "Wrong";
                   }
                   list4.setAttribute("style", "display:none");
                   questionBox.textContent = "All done! Your final score is: " + score;
                   input.setAttribute("style", "display:block");
                   saveButton.setAttribute("style", "display:block");

                   // add eventListener to save button
                   saveButton.addEventListener("click", saveScore);
                   
                   // functon for save button
                  
              }
              
              
              else{
                console.log("array not found")
              }
             

        }

    }


}


