function validata() {
    firstname = document.myform.fname.value;
    lastname = document.myform.lname.value;
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var phoneno = /^\d{10}$/;
    if(firstname ==""){
        alert("You can't leave first name blank. Enter your first name");
        document.myform.fname.focus();
    }
    else if(lastname ==""){
        alert("You can't leave last name blank. Enter your last name");
        document.myform.fname.focus();
    }

    else if(!(document.getElementById("mail").value.match(mailformat))) {
        alert("You have entered an invalid email address!"); //The pop up alert for an invalid email address
        document.myform.mails.focus();
    }

    else if(!document.getElementById("phone").value.match(phoneno)) {
        alert("Invalid phone number");
        document.myform.phones.focus();      
    }
    else {    
        alert("Acknowledged! We will get back to you asap");
        document.myform.submit();
    }
}