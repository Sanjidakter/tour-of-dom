// 1.where to add
const placesList = document.getElementById('places-list');
//2.what to add
const li = document.createElement('li');
li.innerText = 'kaptai';

//3.add the child
placesList.appendChild(li);

//1.wher to add
const mainContainer = document.getElementById('main-container');
//what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'tehari';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'ilish';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);


//set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li> T-shirt</li>
<li>jeans</li>
<li>kurti</li>
</ul>
`
mainContainer.appendChild(sectionDress);

