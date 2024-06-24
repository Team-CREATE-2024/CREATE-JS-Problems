const background = document.querySelector(".background");
background.style.backgroundColor = "red";
background.style.transition = "1.5s";
setInterval(()=>{
    const backgroundColor = background.style.backgroundColor;
    if(backgroundColor == "red"){
        background.style.backgroundColor = 'orange';
    }
    if(backgroundColor == "orange"){
        background.style.backgroundColor = 'yellow';
    }
    else if(backgroundColor == "yellow"){
        background.style.backgroundColor = 'lightgreen';
    }
    else if(backgroundColor == "lightgreen"){
        background.style.backgroundColor = 'green';
    }
    else if(backgroundColor == "green"){
        background.style.backgroundColor = 'skyblue';
    }
    else if(backgroundColor == "skyblue"){
        background.style.backgroundColor = 'blue';
    }
    else if(backgroundColor == "blue"){
        background.style.backgroundColor = 'navy';
    }
    else if(backgroundColor == "navy"){
        background.style.backgroundColor = 'purple';
    }
    else if(backgroundColor == "purple"){
        background.style.backgroundColor = 'red';
    }
}, 1500);