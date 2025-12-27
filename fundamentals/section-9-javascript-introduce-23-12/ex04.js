let angle1 = 40;
let angle2 = 60;
let angle3 = 80;


if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    console.log("Invalid number. It's less than zero.")
}

if (angle1 + angle2 + angle3 == 180) {
    console.log ("It's a valid triangle.")
}

else {
    console.log ("It's a invalid triangle.")
}