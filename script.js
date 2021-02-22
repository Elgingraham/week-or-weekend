document.getElementById('run').addEventListener('click', randomizer)
let day = ""
let age = 0

function randomizer () {
  day = document.getElementById('day').value
  age = document.getElementById('input').value
  age = parseInt(age)
  
if (age <= 18 && day != "sunday" && day != "saturday") {
 document.getElementById('result').innerHTML = 'Time for shcool!'
} else if (age >= 18 && day != "sunday" && day != "saturday") {
 document.getElementById('result').innerHTML = 'Time for work!'
} else {
 document.getElementById('result').innerHTML = 'It is the weekend!'
}
}