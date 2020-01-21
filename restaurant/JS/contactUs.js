function validateItems() {
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    var phone = document.forms["contactUs"]["phone"].value;
    var reason = document.forms["contactUs"]["reason"].value;
    var beenToRest = document.forms["contactUs"]["inlineRadioOptions"].value;
    var checked = false;
    var checkboxes = document.getElementsByName("checkBoxOptions");

    //not checking the additional information because it is optional
    console.log("This is the name: " + name);
    console.log("This is the email: " + email);
    console.log("This is the phone: " + phone);
    console.log("This is the reason: " + reason);
    console.log("Has been to the restaurant: " + beenToRest);
    console.log("This is the ammount of checkboxes for days: " + checkboxes.length);

    if (name === "") {
        alert("You need to enter a name.");
        document.forms["contactUs"]["name"].focus();
        return false;
    }
    if (email === "") {
        alert("You need to enter an email.");
        document.forms["contactUs"]["email"].focus();
        return false;
    }
    if (phone === "") {
        alert("You need to enter a phone number.");
        document.forms["contactUs"]["phone"].focus();
        return false;
    }

    for(var i = 0; i < checkboxes.length; i ++){
        if(checkboxes[i].checked){
            checked = true;
        }
    }

    //if no checkboxes were checked for the days for calling
    if(!checked){
        alert("What is or are preferable day(s) to call you?")
        return false;
    }

    alert("The information in your form is correct for submission.");


    return false;
}