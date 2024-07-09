"use strict"; // 자바스크립트 코드를 엄격하게 검사

const $count = document.querySelector(".count"); // count Element 가져오기
const $btn = document.querySelector(".btn"); // 클릭 버튼 가져오기

let count = 0; // 카운팅을 할 변수 선언


$btn.addEventListener("click", ()=>{ // 클릭이벤트 걸기
  count++; // 카운트 변수에 1을 더함
  if(count > 10) // 만약 1을 더한후 카운트가 10보다 크다면
    count = 0; // 카운트 변수의 값을 0으로 변경
  $count.innerText = count; // 카운트값을 html에 태그에 표시함
});