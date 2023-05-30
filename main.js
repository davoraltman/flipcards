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

  // Unknown menu item
  function displayUnknownElementsRandomly() {
    // Get a list of all elements with the unknown class and other elements
    const container = document.querySelector('.container');
    const unknownElements = Array.from(container.querySelectorAll('.unknown'));
    const otherElements = Array.from(container.children).filter(el => !el.classList.contains('unknown'));

    // Remove elements from the container
    container.innerHTML = '';

    // Shuffle the unknown elements
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const shuffledUnknownElements = shuffle(unknownElements);

    // Add the shuffled unknown elements back to the container
    shuffledUnknownElements.forEach(el => container.appendChild(el));

    // Adjust opacity for other elements and add them to the container
    otherElements.forEach(el => {
        el.style.opacity = '0.5';
        container.appendChild(el);
    });
}

// clear filter

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

// back to top functionality
document.addEventListener('DOMContentLoaded', function () {
    let backToTop = document.querySelector('#backToTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});

//check if mobile

function isMobile() {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  }

//tagline slide on-hover

  function slideTagline() {
    if (!isMobile()) {
      const tagline = document.querySelector('.tagline');
  
      if (tagline) {
        tagline.classList.add('tagline-animate');
      }
    }
  }