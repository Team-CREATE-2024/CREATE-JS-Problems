// utill functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const removeGap = (str) => str.replaceAll(" ", "").replaceAll("\n", "");


const $chatBox = $(".chat-box");
const $textInput = $(".text-input");
const $sendBtn = $(".send-btn");

const sendMessage = (message) => {
  const $chat = document.createElement("li");
  $chat.classList.add("chat");
  $chat.innerText = message;
  $chatBox.append($chat);
}

$textInput.addEventListener("input", (e)=>{
  if(removeGap(e.currentTarget.value) === "")
    $sendBtn.classList.remove("active");
  else
    $sendBtn.classList.add("active");
});

$sendBtn.addEventListener("click", ()=>{
  if($sendBtn.classList.contains("active")){
    sendMessage($textInput.value);
    $textInput.value = "";
    $sendBtn.classList.remove("active");
  }
});
