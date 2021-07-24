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
  
    const prompt = document.createElement("h1");
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
  
  // selection
  const appDiv = document.getElementById("app");
  
  for (const questionObj of questions) {
    const questionElement = createQuestion(
      questionObj.question,
      questionObj.answers,
      questionObj.correctIndex
    );
    appDiv.appendChild(questionElement);
  }
  