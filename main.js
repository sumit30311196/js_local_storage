
function next(){
    let fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;

    if(fname == "" || email == ""){
        alert("Please fill in all fields");
    }else{
        localStorage.setItem("fname", fname);
        localStorage.setItem("email", email);
        window.location.href = "index1.html";
    }
}
function previous(){
    window.location.href = "index.html";
}
function next1(){
    let phone = document.getElementById("phone").value;
    var msg = document.getElementById("msg").value;

    if(phone == "" || msg == ""){
        alert("Please fill in all fields");
    }else{
        localStorage.setItem("phone", phone);
        localStorage.setItem("msg", msg);
        window.location.href = "result.html";
    }
}

//From Chatgpt//////////
document.addEventListener("DOMContentLoaded", function() {
    let fname_r = document.getElementById("fname_r");
    let email_r = document.getElementById("email_r"); 
    let phone_r = document.getElementById("phone_r");
    let msg_r = document.getElementById("msg_r");

    // Retrieve values from localStorage
    let storedFname = localStorage.getItem("fname");
    let storedEmail = localStorage.getItem("email");
    let storedPhone = localStorage.getItem("phone");
    let storedMsg = localStorage.getItem("msg");

    // Set values to input fields (if they exist)
    if (fname_r) fname_r.value = storedFname || "";
    if (email_r) email_r.value = storedEmail || "";
    if (phone_r) phone_r.value = storedPhone || "";
    if (msg_r) msg_r.value = storedMsg || "";
});

function showmodal(){
    $('#myModal').modal('show');

    let fname_r = document.getElementById("fname_r").value;
    let email_r = document.getElementById("email_r").value; 
    let phone_r = document.getElementById("phone_r").value;
    let msg_r = document.getElementById("msg_r").value;

    let s_nme = document.getElementById("s_nme");
    let s_eml = document.getElementById("s_eml"); 
    let s_ph = document.getElementById("s_ph");
    let s_msg = document.getElementById("s_msg");

    s_nme.innerText = fname_r;
    s_eml.innerText = email_r;
    s_ph.innerText = phone_r;
    s_msg.innerText = msg_r;

}




// document.addEventListener("DOMContentLoaded", function() {
//     let fname_r = document.getElementById("fname_r");
//     let email_r = document.getElementById("email_r"); 
//     let phone_r = document.getElementById("phone_r");
//     let msg_r = document.getElementById("msg_r");

//     // Retrieve values from localStorage and set only if element exists
//     if (fname_r) fname_r.value = localStorage.getItem("fname") || "";
//     if (email_r) email_r.value = localStorage.getItem("email") || "";
//     if (phone_r) phone_r.value = localStorage.getItem("phone") || "";
//     if (msg_r) msg_r.value = localStorage.getItem("msg") || "";
// });






