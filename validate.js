function validate() {

 var email= document.forms['form']['email'];

 if (email.value="") {
 	alert("enter email");
 }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
  {
    return (true);
  }else if{
    alert("You have entered an invalid email address!");
    return (false);
  }
}
