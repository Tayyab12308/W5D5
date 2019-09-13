class Clock {
  constructor() {
    this.date = new Date;
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.printTime();

      setInterval(() => {
        this._tick();
      }, 1000);
  }

  printTime() {
    const formatTime = (time) => {
      if (time < 10) {
        return `0${time}`;  
      } else {
        return time; 
      }
    }
    console.log(`${formatTime(this.hours)}:${formatTime(this.minutes)}:${formatTime(this.seconds)}`);
  }

  _tick() {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
      }
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours += 1;
      }
    if (this.hours === 24) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      } 
    this.printTime(); 
  }
}

// const clock = new Clock();


// ////// addNumbers
// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin, 
//   output: process.stdout });

// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft === 0) {
//     reader.close(); 
//     return completionCallback(sum);
//   }
//   reader.question('Give me a number: ', (res) => { sum += parseInt(res)
//   numsLeft--;
//   console.log(`Your partial sum is:  ${sum}`);
//     addNumbers(sum, numsLeft, completionCallback);
//   });
// }

// function completionCallback(sum) {
//   console.log(`Your total sum is: ${sum}`);
// }



// addNumbers(0, 3, completionCallback)

// Bubblesort

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} greater than ${el2}?`, (res) => {
    (res === 'yes') ? callback(true) : callback(false);
  });
}



// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  if(i == arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps); 
  } else { (askIfGreaterThan(arr[i], arr[i + 1], ()=>{
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      madeAnySwaps = true;
      console.log(arr);
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  }
  ))
  }
}


// innerBubbleSortLoop([3,2,1,4], 0, false);

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  debugger
  function outerBubbleSortLoop(madeAnySwaps) {
    debugger
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      debugger
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      debugger
      sortCompletionCallback;
      reader.close();
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});