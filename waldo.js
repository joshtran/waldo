var indexPosition;

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      indexPosition = i;
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found him at index " + indexPosition + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);