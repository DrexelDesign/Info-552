

let firstNumber = 23;
let lastNumber = 214;

let evenList = document.querySelector("#evenList ul");
let oddList = document.querySelector("#oddList ul");

// function to generate a random hex value
const randomColor = (li) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
   li.style.backgroundColor  = "#" + randomColor;
  }
  
for (var i = firstNumber; i <= lastNumber; i++){

   let li = document.createElement("li");

    // set background color
   randomColor(li);

   // crate a <h1> title to hold the island information
   let title = document.createElement("h2");

    if(i % 2 == 0){
        console.log(i + " is even");
        // append the new <li> to the <ul> that is reference above
        evenList.appendChild(li);
        // set the innerHTML to the text with the values of the array placed into it
        title.innerHTML = "The number "+ i + " is even!";

    }else{
        console.log(i + " is odd");
        // append the new <li> to the <ul> that is reference above
        oddList.appendChild(li);
        // set the innerHTML to the text with the values of the array placed into it
        title.innerHTML = "The number "+ i + " is odd!";
    }

    // append the title to the li
    li.appendChild(title);
}

    
