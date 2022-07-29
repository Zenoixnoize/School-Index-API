// Hi  I m
// ＮＯＩＺ Ξ
// I am 16 years old developer...
// From Sri Lanka
// I am a Learning.
// Not more..
// Also I am Student
// Follow My Facebook - https://www.facebook.com/zenoixnoize
alert("School Exam index Number Generator")
var School = prompt('Enter Your School Name')
var Name = prompt('Enter Your Name')
var brdDB = prompt(`Enter Your Birthday Birth Year
Example 2005`)
if(brdDB < 1800){(alert("Please  Enter valid Date"))}
var brdmn = prompt(`Enter Your Birth Month
Example : January`)
var dbb = prompt(`Enter Your Birth Day
Example 15`)
if (dbb > 32 ){(alert("Please Enter valid date"))}
brdDB +=  103838
var inded = prompt("Enter your Enrollment number of the school")
brdDB -= inded
brdDB -= 269
brdDB *= 2 
brdDB -= 6789
brdDB -= dbb
brdDB -= 194670000
console.log("Registered Successful...")
alert('Name Of Student : ' + Name  +
' \n School Name : ' + School +
' \n Index No Of Student ' + brdDB)
console.log('Name Of Student : ' + Name  +
' \n School Name : ' + School +
'\n Index No Of Student ' + brdDB)
