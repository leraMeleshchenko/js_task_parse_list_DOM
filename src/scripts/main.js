'use strict';

// write code here

const people = Array.from(document.querySelectorAll('li'));

const sortedPeople = people.sort((a, b) => {
  const salaryA = parseInt(a.getAttribute('data-salary').replace(/[$,]/g, ''));
  const salaryB = parseInt(b.getAttribute('data-salary').replace(/[$,]/g, ''));

  return salaryB - salaryA;
});

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedPeople.forEach((li) => {
  ul.appendChild(li);
});
