function getGrade(marks) {
  let grade;

  if (marks >= 90 && marks <= 100) {
    grade = "A+";
  } else if (marks >= 80 && marks < 90) {
    grade = "A";
  } else if (marks >= 70 && marks < 80) {
    grade = "B";
  } else if (marks >= 60 && marks < 70) {
    grade = "C";
  } else if (marks >= 50 && marks < 60) {
    grade = "D";
  } else if (marks >= 0 && marks < 50) {
    grade = "F";
  } else {
    grade = "Invalid marks";
  }

  return grade;
}
console.log(getGrade(85));  
console.log(getGrade(72));  
console.log(getGrade(45));  
console.log(getGrade(110)); 


function calculateDistance() {
  let initialSpeed = 30;
  const maxSpeed = 120; 
  const totalTime = 96; 

  let speed = initialSpeed;
  let distance = 0;
  let timePassed = 0
  while (timePassed + 10 <= totalTime) {
    distance += speed * (10 / 60); 
    timePassed += 10;
    speed = speed * 2;
    if (speed > maxSpeed) {
      speed = maxSpeed;
    }
  }

  let remainingTime = totalTime - timePassed;
  distance += speed * (remainingTime / 60);

  return distance;
}

let totalDistance = calculateDistance();
console.log("Total distance traveled in 96 minutes:", totalDistance.toFixed(2), "km");

let speed=30;
let distance=0;
for(i=10;i<=90;i+=10){
    distance=distance+speed/6;
    if(speed<120){
        speed*=2;
    }
}
distance=distance+speed/10
console.log(distance);



function calculateFare(distance) {
    let fare = 0;
    if (distance <= 4) {
        fare = 3;
    } else if (distance <= 9) {
        fare = 10;
    } else if (distance <= 19) {
        fare = 15;
    } else {
        fare = 20;
    }
    return fare;
}
const distanceTravelled = 19.5;
const totalFare = calculateFare(distanceTravelled);
console.log(`Total fare for ${distanceTravelled} km is ₹${totalFare}/-`);





