const $searhInput = document.querySelector(".search-input");
const $glass = document.querySelector(".glass");

const search = ()=>{
  const keyword = $searhInput.value;
  location.href = `https://search.naver.com/search.naver?query=${keyword}`;
}

$searhInput.addEventListener("keyup", (e)=>{
  if(e.key == "Enter")
    search();
});
$glass.addEventListener("click", search)