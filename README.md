<html>
<head>
<title> My Javascript </title>
<head>
<body>
<p> Guess the number </p>
<p> <select id="myno"> 
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
<button id="mybutton"> Guess </button> </p>
<script  type="text/javascript">

function doguess(n)
{
var x=(Math.floor(Math.random()*5));
if(x==n)
{
return(true);
}
else
{
return(false);
}
}

document.getElementById('mybutton').onclick=function()
{
var myno= document.getElementById('myno').value;
var found= false;
var count=1;
while(found==false)
{
if(doguess(myno)==true)
{
found=true;
alert("Well Done! You Got It! it was "+ myno + " It took me "+ count +" guesses");
}
else
{
count++;
}
}
}
</script>
</body>
</html>
