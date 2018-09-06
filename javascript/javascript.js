function checkforblank () {

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  var errormessage = "";

 if (document.getElementById("ime").value == "") {
    errormessage += "Molimo Vas da unesete ime \n";
    document.getElementById("ime").style.borderColor = "red";
 }

  if (document.getElementById("email").value == "") {
    errormessage += "Molimo Vas da unesete važeću e-mail adresu \n";
    document.getElementById("email").style.borderColor = "red";

  }

  if (reg.test(document.getElementById("email").value) == false) {
    errormessage += "Molimo Vas da unesete važeću e-mail adresu \n";
    document.getElementById("email").style.borderColor = "red";

  }


  if (document.getElementById("email").value == "") {
    errormessage += "Molimo Vas da unesete važeću e-mail adresu \n";
    document.getElementById("email").style.borderColor = "red";

  }


 if (errormessage != "") {
   alert(errormessage);
   return false;
 }
 else {
   confirm("Uspešno ste ostavili utisak!");
 }
}




function multiplyBy()
{
    var    num1 = document.getElementById("firstNumber").value;
    var    num2 = document.getElementById("secondNumber").value;

if ( num1 === "" )
{window.alert("Molimo unesite vrednosti!");
 return
}
document.getElementById("result").innerHTML = num1 * num2;


var total = num1 * num2;

document.getElementById("result").innerHTML = total;

}


document.getElementById("calculate").onclick = function()
{
 multiplyBy();
}













