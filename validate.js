function validate(){
	var email = document.forms['frm']['email'];

	if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
		alert('invalid email address');
		email.focus();
		return false;
	}else{
		alert('valid email address');
		return true;
	}
}
