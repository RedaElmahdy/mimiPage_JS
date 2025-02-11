const doc = document;
const body = document.querySelector("body");

// Assign Tilte
doc.title = "Create Page With JS";

// Colors
let primaryColor = "#009688",
  backgroundColor = "#efefef",
  whithColor = "#fff";

// ========================= Strart Create Elements Header =========================//
const header = doc.createElement("div"),
  container = doc.createElement("div"),
  h1 = doc.createElement("h1"),
  ul = doc.createElement("ul");

//Create Links
let links = [
  (homeLink = doc.createElement("a")),
  (aboutLink = doc.createElement("a")),
  (servicesLink = doc.createElement("a")),
  (contactLink = doc.createElement("a")),
];

// Assign Value To Links
links[0].innerHTML = "Home";
links[1].innerHTML = "About";
links[2].innerHTML = "Sevices";
links[3].innerHTML = "Contact";

// Assign Value To Elements
h1.innerText = "Reda";

// Add Classes To Elements
header.className = "header";
container.className = "container";

// Add Elements To Page
body.appendChild(header);
header.appendChild(container);
container.appendChild(h1);
container.appendChild(ul);
for (let i = 0; i < links.length; i++) {
  li = doc.createElement("li");
  ul.appendChild(li);
  li.style.cssText = `marign-right: 10px;`;
  li.appendChild(links[i]);
}

// ============ Style CSS With JavaScript ============ //
body.style.cssText = `
margin: 0;
font-family: sans-serif;
background: ${backgroundColor}`;

header.style.cssText = `
  margin: 0;`;

container.style.cssText = `
  background: ${whithColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;`;

ul.style.cssText = `
  display: flex;
  list-style: none;
  `;

h1.style.cssText = `
  color: ${primaryColor}`;

for (let i = 0; i < links.length; i++) {
  links[i].style.cssText = `
    marign-right: 10px;
    display: block;
    text-decoration: none;
    padding: 0 10px`;
}

// ========================= End Create Elements Header ======================== //
// ========================= Start Create Elements Body ======================== //

// Create Content Body
const content = doc.createElement("div");

// Content Style
content.style.cssText = `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;`;

// Add => [Elements, Style]
body.appendChild(content);
for (let i = 0; i < 15; i++) {
  // Create Boxis
  const box = doc.createElement("div"),
    spanNum = doc.createElement("span"),
    spanProduct = doc.createElement("span");

  // Add Boxis To Content
  content.appendChild(box);
  box.appendChild(spanNum);
  box.appendChild(spanProduct);

  // Assign Value To Elements
  spanNum.innerText = 1 + i;
  spanProduct.innerHTML = "Product";

  // Style
  box.style.cssText = `
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${whithColor};
    height: 100px`;

  spanNum.style.cssText = `
    font-size: 30px;
    font-weight: bold;`;
}

// ========================== End Create Elements Body ========================= //
// ======================== Strar Create Elements Footer ======================= //

// Create Elements
const footer = doc.createElement("div"),
  span = doc.createElement("span");

// Add Elements To Page
body.appendChild(footer);
footer.appendChild(span);

// Assign Value
span.innerText = "Copyright 2025";

// Style Footer
footer.style.cssText = `
  background: ${primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 77px`;

span.style.cssText = `
  color: ${whithColor};
  font-size: 20px`;

// ========================= End Create Elements Footer ======================== //
