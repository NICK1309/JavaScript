<!DOCTYPE html>
<html>
<body>

<h2>JavaScript setMonth()</h2>
<p>The setMonth() method sets the mont of a date object.</p>
<p>Note that months count from 0. December is month 11:</p>

<p id="demo"></p>

<script>
const d = new Date();
d.setMonth(11);
document.getElementById("demo").innerHTML = d;
</script>

</body>
</html>
