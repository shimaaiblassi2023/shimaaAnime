let btn =  document.querySelector(".btn");

function SignIn (btn){
    if(btn.username.value == "username") {
    if( btn.password.value == "password") {
        location = "anime.html"
    } else{
        alert("Please write your password correctly")
    }
    }
};

btn.addEventListener("click" ,SignIn());


    