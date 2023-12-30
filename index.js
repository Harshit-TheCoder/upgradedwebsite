function showSidebar(){
    const sidebar = document.querySelector(".menu");
    sidebar.style.display = "flex";
}
function hideSidebar(){
    const sidebar = document.querySelector(".menu");
    sidebar.style.display = "none";
}
var a;
function manipulatePassword(){
   if(a==1){
    document.getElementById('pass').type='password';
    document.getElementById('pass-icon').src='./Images/eyecut.png';
    a=0;
   }
   else{
    document.getElementById('pass').type='text';
    document.getElementById('pass-icon').src='./Images/eye.png';
    a=1;
   }
}
var b;
function manipulatePassword1(){
   if(b==1){
    document.getElementById('cpass').type='password';
    document.getElementById('pass-icon1').src='./Images/eyecut.png';
    b=0;
   }
   else{
    document.getElementById('cpass').type='text';
    document.getElementById('pass-icon1').src='./Images/eye.png';
    b=1;
   }
}
function login(event){
    var flag=0;
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    console.log(name);
    console.log(email);
    console.log(password);
    var c = localStorage.getItem('count');
    var num = parseInt(c);
    for(var i = 1;i<=num;i++){
        var n = localStorage.getItem('name_'+i.toString());
        var e = localStorage.getItem('email_'+i.toString());
        var p = localStorage.getItem('password_'+i.toString());
        console.log(n);
        console.log(e);
        console.log(p);
        if(n === name && e===email && p===password){
            localStorage.setItem('isLoggedIn_'+i.toString() , true);
            flag=1;
            break;
        }
    }
    if(flag === 1){
        alert("Login Successful");
        window.location.assign("notes.html");
        document.getElementById('linkvisiblity').style.display = 'initial';
        
    }
    else{
        alert("Failed!!! Please register");
        window.location.assign("signup.html");
    }
}
function signup(event){
    event.preventDefault();
    var name1 = document.getElementById("name").value;
    var email1 = document.getElementById("email").value;
    var password1 = document.getElementById("pass").value;
    console.log(name1);
    console.log(email1);
    console.log(password1);
    var c = localStorage.getItem('count');
    localStorage.setItem('name_'+c , name1);
    localStorage.setItem('email_'+c , email1);
    localStorage.setItem('password_'+c , password1);
    var num = parseInt(c);
    num += 1;
    c = num.toString();
    localStorage.setItem('count' , c);
}

