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