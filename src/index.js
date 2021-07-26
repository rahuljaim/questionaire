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
    questionContainer.setAttribute("id","questionscontainer");
    const prompt = document.createElement("h2");
    prompt.setAttribute("class","text-center pt-3");
    prompt.appendChild(document.createTextNode(questionPrompt));
    questionContainer.appendChild(prompt);
    let correctansdiv = document.createElement('div');
  
    const optionContainer = document.createElement("div");
    optionContainer.setAttribute("class","list-group");
    const correctOption = options[correctOptionIndex];
    console.log(correctOption);
    const alert = document.createElement("div");
    let score =0;
    for (const option of options) {
      const optionDiv = document.createElement("a");
      optionDiv.setAttribute("class","list-group-item list-group-item-action");
      const alertwrong="<strong>Wrong!</strong> Answer ";
      const alertsuccess="<strong>Correct!</strong> Answer ";
      optionDiv.addEventListener("click", function () {
        
        if (correctOption === option) {
          alert.setAttribute("class","alert alert-success alert-dismissible fade show mt-2");
          alert.innerHTML=alertsuccess;
          correctansdiv.appendChild(alert);
          correctansdiv.style.order=1;
          // alert(option + " is correct.");
        } else {
          alert.setAttribute("class","alert alert-danger alert-dismissible fade show mt-2");
          alert.innerHTML=alertwrong;
          correctansdiv.appendChild(alert);
          correctansdiv.style.order=1;
          // alert(option + " is NOT correct.");
        }
      });
      optionDiv.textContent = option;
      optionContainer.appendChild(optionDiv);
    }
    
    correctansdiv.className="hide";
    correctansdiv.id="resultBox";
    
    questionContainer.appendChild(optionContainer);
    questionContainer.appendChild(correctansdiv);
    return questionContainer;
  }
  
  function $(id){
    return document.getElementById(id);
  }

  // selection
  const appDiv = document.getElementById("app");
  appDiv.setAttribute("style", "border: 1px solid green; border-radius: 15px;  padding: 39px; margin-bottom: 15px; position:relative;");
  let length = questions.length;
  let prev = $("prevbtn");
  let next = $("nextbtn");
  var rq =$("questionscontainer");
  let qid=0;
  let attempt=$("attempt");
  let flexgrid=$("flex-grid");
  
  
  
  for(let i=0; i<length; i++){
    
    var gridnumber = document.createElement("div");
    gridnumber.classList="serial";
    flexgrid.appendChild(gridnumber);
    gridnumber.textContent=i+1;
    
    
  }
  

  
  window.addEventListener("load",()=>{
    attempt.textContent =1 +"/"+length;
    if(gridnumber.textContent==1){
      gridnumber.classList.add("selected");

    }
    const questionElement1 = createQuestion(
      questions[qid].question,
      questions[qid].answers,
      questions[qid].correctIndex
    );
    appDiv.appendChild(questionElement1);
    
  });
  next.addEventListener("click",function(){
      qid = qid+1;
      attempt.textContent =qid+1 +"/"+length;;
      if(qid === length-1)
        next.classList.add("disabled")
      if(prev.classList.contains("disabled"))
        prev.classList.remove("disabled");
      document.getElementById("questionscontainer").remove();
      // alert.remove();
      
      const questionElement1 = createQuestion(
        questions[qid].question,
        questions[qid].answers,
        questions[qid].correctIndex
      );
      appDiv.append(questionElement1);
    

  });
  prev.addEventListener("click",function(){
    
    qid = qid-1;
    attempt.textContent =qid+1 +"/"+length;;
    if(qid === 0)      
      prev.classList.add("disabled");
      document.getElementById("questionscontainer").remove();
     
      const questionElement1 = createQuestion(
        questions[qid].question,
        questions[qid].answers,
        questions[qid].correctIndex
      );
      appDiv.appendChild(questionElement1);
    
    
  });
  // for (const questionObj of questions) {
  //   const questionElement = createQuestion(
  //     questionObj.question,
  //     questionObj.answers,
  //     questionObj.correctIndex
  //   );
  //   appDiv.appendChild(questionElement);
  // }
  