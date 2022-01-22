var a = [];
var b = [];
function sub()
{
    for(var i = 1; i<=4; i++)
    {
        n = document.getElementById("s"+i+"name").value;
        a.push(n)
        console.log(a)
    }
    console.log(a)
    var len = a.length;

    for(var j = 0; j<len; j++)
    {
        b.push("<h3>NAME - </h3>"+ a[j]+"<br>")
        console.log(b)
    }
    document.getElementById("ary").innerHTML= b;
    document.getElementById("ary1").innerHTML= b.join("");
    document.getElementById("sb").style.display= "none";
    document.getElementById("sr").style.display= "inline-block";
}
function srt()
{
    b.sort()
    document.getElementById("ary1").innerHTML= b.join("");
}