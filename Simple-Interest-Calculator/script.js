function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        window.alert("Enter a positive number");
        return document.getElementById("principal").focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
     var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").style.textAlign = "justify";
    document.getElementById("result").innerHTML="\<br\><br\>If you deposit <mark>"+principal+"</mark>,\<br\><br\>at an interest rate of <mark>"+rate+"%</mark>\<br\><br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\><br\>in the year <mark>"+year+"</mark>\<br\>";
    
}
