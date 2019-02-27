const header = document.querySelector('.article__header');
let headerContent = header.textContent;
const articleHeaders = document.querySelectorAll('.article__header');
const dashed = document.querySelector('.dashed');
const footer = document.querySelector('.article__footer');

headerContent = "Welcome to the Sam blog";

for(let i = 0; i < articleHeaders.length; i+= 1){
    articleHeaders[i].classList.add('important');
}

dashed.classList.remove('dashed');
footer.classList.add('goldenrod');

console.log(headerContent);
console.log(articleHeaders);
console.log(dashed);
console.log(footer);

