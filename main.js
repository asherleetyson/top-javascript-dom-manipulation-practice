const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';
container.appendChild(content);

// Step 1
const step1 = document.createElement('p');
step1.classList.add('red-paragraph');
step1.textContent = 'Hey I\'m red!'
container.appendChild(step1);

// Step 2
const step2 = document.createElement('h3');
step2.classList.add('blue-h3');
step2.textContent =  'I\'m a blue h3!';
container.appendChild(step2);

// Step 3 - create a div with a pink background, black border, and the below 2 elements inside it
const step3 = document.createElement('div');
step3.classList.add('step3-div-styling');
step3.textContent = 'new container';

// Step 3.1 - create an H1 to stick inside the div above ('Step3') & append it to parent Step3
const step31 = document.createElement('h1');
step31.textContent = 'I\'m in a div';
step3.appendChild(step31);

// Step 3.2 - create a p to stick inside the div above ('Step3') & append it to parent Step 3
const step32 = document.createElement('p');
step32.textContent = 'ME TOO!';
step3.appendChild(step32); 

//Step 3.3 - finally append the parent (Step3) to its parent (container)
container.appendChild(step3);