function displayRandomBoxElements() {
    const boxElements = document.querySelectorAll('.box');
    const shuffledElements = [...boxElements].sort(() => Math.random() - 0.5);
  
   return shuffledElements.forEach((element, index) => {
      element.style.order = index;
      element.style.display = 'block'; // If elements are initially hidden, this line will display them
    });
  }