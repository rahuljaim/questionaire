/**
 * 
 *     <div>
        <h1>{questionPrompt}</h1>
        <div>
          <div>Option 1</div>
          <div correct>Option 2</div>
          <div>Option 3</div>
          <div>Option 4</div>
        </div>
      </div>
 */

/*
 div
  h1 -- prompt
  option -- option
 */

  import questions from "./questions.js";

  function createQuestion(questionPrompt, options, correctOptionIndex) {
    const questionContainer = document.createElement("div");
  
    const prompt = document.createElement("h2");
    prompt.appendChild(document.createTextNode(questionPrompt));
    questionContainer.appendChild(prompt);
  
    const optionContainer = document.createElement("div");
  
    const correctOption = options[correctOptionIndex];
    console.log(correctOption);
  
    for (const option of options) {
      const optionDiv = document.createElement("div");
      optionDiv.addEventListener("click", function () {
        if (correctOption === option) {
          alert(option + " is correct.");
        } else {
          alert(option + " is NOT correct.");
        }
      });
      optionDiv.textContent = option;
      optionContainer.appendChild(optionDiv);
    }
  
    questionContainer.appendChild(optionContainer);
  
    return questionContainer;
  }
  
  function $(id){
    return document.getElementById(id);
  }

  // selection
  const appDiv = document.getElementById("app");
  let length = questions.length;
  let prev = $("prevbtn");
  let next = $("nextbtn");
  let qid=0;
  window.addEventListener("load",()=>{
    const questionElement1 = createQuestion(
      questions[qid].question,
      questions[qid].answers,
      questions[qid].correctIndex
    );
    appDiv.appendChild(questionElement1);
    
  });
  next.addEventListener("click",function(){
    
    qid = qid+1;
    const questionElement2 = createQuestion(
      questions[qid].question,
      questions[qid].answers,
      questions[qid].correctIndex
    );
    appDiv.append(questionElement2);

  });
  prev.addEventListener("click",function(){
    if(qid ==0){
      prev.setAttribute("class","disabled");
      return;
    } else{
      qid = qid-1;
      const questionElement2 = createQuestion(
        questions[qid].question,
        questions[qid].answers,
        questions[qid].correctIndex
      );
    }
    appDiv.removeChild(questionElement2);
  });
  // for (const questionObj of questions) {
  //   const questionElement = createQuestion(
  //     questionObj.question,
  //     questionObj.answers,
  //     questionObj.correctIndex
  //   );
  //   appDiv.appendChild(questionElement);
  // }
  