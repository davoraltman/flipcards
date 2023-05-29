function displayRandomBoxElements() {
    const container = document.querySelector('.container');
    const boxElements = Array.from(container.querySelectorAll('.box'));

    // Create a random sorter function
    function randomSort() {
        return Math.random() - 0.5;
    }

    // Shuffle the box elements using randomSort
    boxElements.sort(randomSort);

    // Clear the container
    container.innerHTML = '';

    // Append the shuffled box elements back to the container
    boxElements.forEach(box => {
        container.appendChild(box);
    });
}

// Call the function on page refresh using window.onload or other methods
window.onload = displayRandomBoxElements;

// James Clear menu item
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayElementsByClassRandomOrder(className) {
  const elementsWithClass = Array.from(document.getElementsByClassName(className));
  const elementsWithoutClass = Array.from(document.querySelectorAll(`:not(.${className})`));
  
  elementsWithoutClass.forEach(el => {
    el.style.opacity = "0.3";
  });

  const shuffledElementsWithClass = shuffleArray(elementsWithClass);
  
  shuffledElementsWithClass.forEach((el, index) => {
    el.style.order = index;
  });

  elementsWithoutClass.forEach((el, index) => {
    el.style.order = shuffledElementsWithClass.length + index;
  });
}

displayElementsByClassRandomOrder("jamesclear");