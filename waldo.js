var indexPosition;

function findWaldo(arr, found) {
  arr.forEach(
    function (currentValue, currentIndex) {
      if (currentValue === "Waldo") {
        indexPosition = currentIndex;
        found();
      }
    }
  )
}

// function findWaldo(arr, found) {
//   var currentIndex = 0;
//   arr.forEach(function findIndex() {
//     currentIndex++;
//     if (arr[currentIndex] === "Waldo") {
//      indexPosition = currentIndex;
//      found();   // execute callback
//     }
//   })
// }

function actionWhenFound() {
  console.log("Found him at index " + indexPosition + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);