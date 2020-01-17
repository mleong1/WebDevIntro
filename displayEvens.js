function clearErrors() {
    for (var loopCounter = 0;
         loopCounter < document.forms["evensForm"].elements.length;
         loopCounter++) {
        console.log(document.forms["evensForm"].elements[loopCounter].className);
        if (document.forms["evensForm"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1) {

            document.forms["evensForm"].elements[loopCounter]
                .parentElement.className = "form-group";
        }
    }
}

function validateItems() {
    clearErrors();
    var n1 = document.forms["evensForm"]["number1"].value;
    var n2 = document.forms["evensForm"]["number2"].value;
    var st = document.forms["evensForm"]["step"].value;

    if (n1 == "" || isNaN(n1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["evensForm"]["number1"]
            .parentElement.className = "form-group has-error";
        document.forms["evensForm"]["number1"].focus();
        return false;
    }
    if (n2 == "" || isNaN(n2)) {
        alert("Num2 must be filled in with a number.");
        document.forms["evensForm"]["number2"]
            .parentElement.className = "form-group has-error"
        document.forms["evensForm"]["number2"].focus();
        return false;
    } else if (n2 < n1){
        alert("Num2 must be larger than num1.");
        document.forms["evensForm"]["number2"]
            .parentElement.className = "form-group has-error"
        document.forms["evensForm"]["number2"].focus();
        return false;
    }
    if (st == "" || st <= 0 || isNaN(st)) {
        alert("Step must be filled in with a number, or a number greater than 0.");
        document.forms["evensForm"]["step"]
            .parentElement.className = "form-group has-error"
        document.forms["evensForm"]["step"].focus();
        return false;
    }

    document.getElementById("OutputDisplay").style.display = "block";
    document.getElementById("num1").innerText = n1;
    document.getElementById("num2").innerText = n2;
    document.getElementById("s").innerText = st;

    for(var i = n1; i < n2; i ++){
        if(i%2 == 0){
            document.getElementById("DisplayText").innerHTML += "<br>" + i;
        }
    }

    return false;

}