<html>
<head>
<title> My Javascript </title>
<style type="text/css">

#shape{
      width:100px;
      height:100px;
      background-color:red;
      display:'none';
      position:relative;
      }
</style>

</head>
<body>
<p><h1>Test Your Actions!</h1></p>
<p> Click on the boxes asap... </p>
<p>Your time: <span id="timetaken"></span></p>
<div id="shape"> </div>
<script type="text/javascript">
var start=new Date().getTime();

function makeShape()
{
var top=Math.random()*400;
var left=Math.random()*400;
var width=Math.random()*300;

if(Math.random()> 0.5)
{
document.getElementById('shape').style.borderRadius="50%";
}
else
{
document.getElementById('shape').style.borderRadius="0";
}
document.getElementById('shape').style.backgroundColor = getRandomColor();
document.getElementById('shape').style.width = width + "px";
document.getElementById('shape').style.height = width + "px";
document.getElementById('shape').style.top = top + "px";
document.getElementById('shape').style.display="block";
start=new Date().getTime();
}

function afterDelay()
{
setTimeout(makeShape, Math.random()*2000);
}

afterDelay();
document.getElementById('shape').onclick=function()
{
document.getElementById('shape').style.display="none";
var end=new Date().getTime();
var timetaken= (end-start)/1000;
document.getElementById('timetaken').innerHTML=timetaken + "sec";
afterDelay();
alert(timetaken);
}
</script>
</body>
</html>
