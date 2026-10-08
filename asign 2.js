const prompt = require('prompt-sync')();

let f1 = 0;
let array = [];
while(f1==6){
    console.log("Student Grade Manager \n\n 1. Add Grade\n 2. Remove Grade\n 3. View Grades\n 4. Calculate Average\n 5. Find Highest Grade\n 6. Exit");
    
    let e = Number(prompt("Enter your choice: "));

    if(e < 1 || e > 6) {
        console.log("Invalid choice. Please enter a number between 1 and 6.");
    }

    while(e === 1) {
        let grade = prompt("Enter the grade to add, or type 'done' to finish adding grades: ");
        if(grade === 'done'){
            break;
        }
        else{
        array.push(grade);
        console.log("Grade Added");
        console.log(array);
        }
    }
    while(e === 2) {
        console.log(array);
        let removegrade = prompt("Enter the grade to remove or type 'done' to finish removing grades: ");
        let index = array.indexOf(removegrade);
        if(index !== -1) {
            array.splice(index, 1);
            console.log("Grade Removed");
        } else {
            console.log("Grade is not valid.");
            break;
        }
    }
    while(e === 3) {
        array.forEach((grade, index) => {
            console.log(`Grade ${index + 1}: ${grade}`);
        })
        if(array.length === 0) {
            console.log("Not valid grade.");
        }
        break;
    }
    while(e === 4) {
        if(array.length === 0) {
            console.log("Not valid grade.");
            break;
        } else {
            let sum =  0
            for(let i = 0; i < array.length; i++) {
                sum += Number(array[i]);
            }
            let average = sum / array.length;
            console.log(`Average Grade: ${average}`);
            break;
        }
    }
    while(e === 5) {
        if(array.length === 0) {
            console.log("Not valid grade.");
            break;
        } else {
            let highestGrade = Math.max(...array);
            console.log(`Highest Grade: ${highestGrade}`);
            break;
        }
    }
    if(e === 6) {
        console.log("Exiting");
        break;
    }
}


function UpperCase(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
     const charCode = str.charCodeAt(i);
     if (charCode >= 97 && charCode <= 122) {
       result += String.fromCharCode(charCode - 32);
     } else {
       result += str[i];
     }
    }
    return result;
}
let n1 = 0;
let array1 = [];
while(n1!==6){
    console.log("Movie Collection Manager \n\n 1. Add Movie\n 2. Remove Movie\n 3. Search Movies\n 4. Print Movies\n 5. Count Movies\n 6. Display Movies In UpperCase\n 7. Exit");
    
    let e = Number(prompt("Enter your choice: "));

    if(e < 1 || e > 7) {
        console.log("Invalid choice. Please enter a number between 1 and 7.");
    }

    while(e === 1) {
        let movie = prompt("Enter the movie title or type 'done' to finish adding movies: ");
        if(movie === 'done'){
            break;
        }
        else{
        array1.push(movie);
        console.log("Movie Added");
        console.log(array1);
        }
    }
    while(e === 2) {
        console.log(array1);
        let removemovie = prompt("Enter the movie title to remove or type 'done' to finish removing movies: ");
        let index = array1.indexOf(removemovie);
        if(index !== -1) {
            array1.splice(index, 1);
            console.log("Movie Removed");
        } else {
            console.log("Not a valid movie.");
            break;
        }
    }
    while(e === 3) {
        array1.forEach((movie, index) => {
            console.log(`Movie ${index + 1}: ${movie}`);
        })
        if(array1.length === 0) {
            console.log("No movies available.");
        }
        break;
    }
    while(e === 4) {
        if(array1.length === 0) {
            console.log("No movies available.");
        } else {
            let sum =  0
            for(let i = 0; i < array1.length; i++) {
                sum += Number(array1[i]);
            }
            let average = sum / array1.length;
            console.log(`Average Grade: ${average}`);
            break;
        }
    }
    while(e === 5) {
        if(array1.length === 0) {
            console.log("No movies available.");
        } else {
            let highestGrade = Math.max(...array1);
            console.log(`Highest Grade: ${highestGrade}`);
            break;
        }
    }
    if(e === 6) {
       console.log("Movies in UpperCase:");
        array1.forEach((movie) => 
            console.log(UpperCase(movie)));
        break;}
    if(e === 7) {
        break;
    }
}