const para = document.querySelector('p');

para.addEventListener('click', updateAge);

function updateAge() {
  const age = prompt('Enter the year you were born');
  para.textContent = `Your Age: ${(age-2022)*-1}`;
}    

function createParagraph() {
    const text = document.createElement('h2');
    text.textContent = 'HI';
    document.body.appendChild(text);
  }
  
  const buttons = document.querySelectorAll('button');
  
  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }