const createButtonElement = document.getElementById("createButton");
const arraySizeElement = document.getElementById("arraySizeInput");
const sortButtonElement = document.getElementById("sortButton");
const barContainerElement = document.getElementById("barContainer");

let array = [];

createButtonElement.addEventListener("click", () => {
  array = generateRandomArray(arraySizeElement.value);
});

sortButtonElement.addEventListener("click", () => {
  insertionSort(array);
  renderArrayBars(array);
});

function generateRandomArray(size) {
  if (size >= 1 && size <= 10) {
    let randomArray = [];
    let index = 0;
    while (index < size) {
      let num = Math.floor(Math.random() * 100);
      randomArray[index] = num;
      index++;
    }
    renderArrayBars(randomArray);
    return randomArray;
  }
}

function renderArrayBars(array) {
  removeAllChildren(barContainerElement);
  for (let i = 0; i < array.length; i++) {
    const newBar = document.createElement("div");
    newBar.classList.add("bar");
    let height = array[i] * 2;
    let heightProperty = height + "px";
    newBar.style.height = heightProperty;
    newBar.innerText = array[i];
    barContainerElement.appendChild(newBar);
  }
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let tmp = array[i];
    let j = i;
    while (j > 0 && tmp < array[j - 1]) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = tmp;
  }
}
