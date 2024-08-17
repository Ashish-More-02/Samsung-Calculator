let butt = document.querySelectorAll("button");
let deleteBtn = document.getElementById('crossBtn');
let input = document.getElementById("input_box");
input.disabled = true;



// 1) we should be able to create n number of opening '(' brackets till the last element becomes number
// 2) then we must use closing bracket
function bracketFunction(V1, V2) {



  if (typeof input.value ==='number') {
    input.value += V2;
  } 
  else {
    input.value += V1;
  }

}


// function bracketFunction(V1, V2) {
//     const lastChar = input.value.slice(-1); // Get the last character of the input value

//     // Check if the last character is a number
//     if (!isNaN(lastChar)) {
//         // If the last character is a number, add the closing bracket
//         input.value += V1;
//     } else {
//         // If the last character is not a number, add the opening bracket
//         input.value += V2;
//     }
// }


function appendtodisplay(V) {
  input.value += V;
}

function cleardisplay() {
  input.value = "";
}

function calculate() {
  input.value = eval(input.value);
}


deleteBtn.addEventListener('click', ()=>{
    input.value = input.value.slice(0,-1);
    // this is extracting the string from start to second last index and updating the value.

})