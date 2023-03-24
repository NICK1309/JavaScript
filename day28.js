<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort Reverse</h2>

<p>The reverse() method reverses the elements in an array.</p>
<p>By combining sort() and reverse() you can sort an array in descending order:</p>

<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Create and display an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

// First sort the array
fruits.sort();

// Then reverse it:
fruits.reverse();

document.getElementById("demo2").innerHTML = fruits;
</script>

</body>
</html>
