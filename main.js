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
function displayJamesClearElementsRandomly() {
    // Get a list of all elements with the jamesclear class and other elements
    const container = document.querySelector('.container');
    const jamesclearElements = Array.from(container.querySelectorAll('.jamesclear'));
    const otherElements = Array.from(container.children).filter(el => !el.classList.contains('jamesclear'));

    // Remove elements from the container
    container.innerHTML = '';

    // Shuffle the jamesclear elements
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const shuffledJamesClearElements = shuffle(jamesclearElements);

    // Add the shuffled jamesclear elements back to the container
    shuffledJamesClearElements.forEach(el => container.appendChild(el));

    // Adjust opacity for other elements and add them to the container
    otherElements.forEach(el => {
        el.style.opacity = '0.5';
        container.appendChild(el);
    });
}

// clear James Clear

function resetPageState() {
    const container = document.querySelector('.container');
    const allElements = Array.from(container.children);
  
    allElements.forEach(el => {
      el.style.opacity = '';
    });
  
    container.innerHTML = '';
  
    allElements.forEach(el => {
      container.appendChild(el);
    });
  }

  // Adding event listeners to all menu items with submenus
function displaySubmenu() {document.querySelectorAll('nav li').forEach(item => {
    const submenu = item.querySelector('.submenu');
    
    if (submenu) {
      item.addEventListener('mouseenter', () => {
        submenu.style.display = 'flex';
      });
      
      item.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
      });
    }
  });
}