document.querySelector("input").addEventListener("input", (e)=>{
    const fileType = e.target.files[0].type.split("/")[0];
    if(fileType === "image")
        alert("이미지 파일입니다.");
    else if(fileType === "text")
        alert("텍스트 파일입니다.");
    else
        alert("알수없는 파일입니다.");
})