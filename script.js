const form=document.getElementById("myForm");

const message=document.getElementById("message");

form.addEventListener("submit",function(event){

event.preventDefault();

const name=document.getElementById("name").value;

message.innerHTML=

"✅ Thank you <b>"+name+"</b>! Your registration has been submitted successfully.";

form.reset();

});
