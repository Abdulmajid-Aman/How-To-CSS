let accordion = document.getElementsByClassName('accordion')
console.log(accordion[0].nextElementSibling)



for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', (e) => {
        accordion[i].classList.toggle("active")
        let panel  = accordion[i].nextElementSibling
        console.log(panel);
        
        if(panel.style.display === 'block') {
            panel.style.display = 'none'
        } else {
            panel.style.display = 'block'
        }
    })
}

/* Understanding nextElementSibling, Nodes, and Elements in the HTML DOM

The HTML DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, where each node represents an element, attribute, text, or comment.

nextElementSibling

The nextElementSibling property returns the next element in the DOM tree, or null if there is no next element. */


/* 
// Get the first div element
const div1 = document.getElementById('div1');

// Log the next element sibling of div1
console.log(div1.nextElementSibling); // returns <div id="div2">World</div>

// Get the second div element
const div2 = document.getElementById('div2');

// Log the next element sibling of div2
console.log(div2.nextElementSibling); // returns <div id="div3">!</div>

// Get the third div element
const div3 = document.getElementById('div3');

// Log the next element sibling of div3
console.log(div3.nextElementSibling); // returns null
*/


/* Nodes vs Elements

In the HTML DOM, there are two types of objects: nodes and elements.

Nodes: A node is an object that represents a single point in the DOM tree. Nodes can be elements, text, comments, or other types of content.
Elements: An element is a type of node that represents an HTML element (such as a div, p, or img element). */


/* // HTML code
<div id="div1">
  <!-- This is a comment node -->
  <p id="p1">Hello</p> <!-- This is an element node -->
  <p id="p2">World</p> <!-- This is an element node -->
  <!-- This is a text node -->
  Some text
</div>

// JavaScript code
const div1 = document.getElementById('div1');

// Get all child nodes of div1
const nodes = div1.childNodes;

// Log the nodes
console.log(nodes); // returns a NodeList of 5 nodes:
// 1. comment node
// 2. element node (p1)
// 3. element node (p2)
// 4. text node
// 5. text node ( whitespace )

// Get all child elements of div1
const elements = div1.children;

// Log the elements
console.log(elements); // returns an HTMLCollection of 2 elements:
// 1. <p id="p1">Hello</p>
// 2. <p id="p2">World</p> */


/* Methods to get HTMLCollection

Here are some methods that return an HTMLCollection:

getElementsByTagName(): Returns a collection of elements with the specified tag name.
getElementsByClassName(): Returns a collection of elements with the specified class name.
children property: Returns a collection of child elements of a given element. */


/* // HTML code
<div id="div1">
  <p id="p1">Hello</p>
  <p id="p2">World</p>
</div>

// JavaScript code
const div1 = document.getElementById('div1');

// Get all paragraph elements inside div1 using getElementsByTagName
const paragraphs = div1.getElementsByTagName('p');

// Log the paragraphs
console.log(paragraphs); // returns an HTMLCollection of 2 elements:
// 1. <p id="p1">Hello</p>
// 2. <p id="p2">World</p>

// Get all elements with class "myClass" inside div1 using getElementsByClassName
const elementsWithClass = div1.getElementsByClassName('myClass');

// Log the elements with class "myClass"
console.log(elementsWithClass); // returns an HTMLCollection of elements with class "myClass"

// Get all child elements of div1 using children property
const childElements = div1.children;

// Log the child elements
console.log(childElements); // returns an HTMLCollection of child elements */

/* Methods to get NodeList

Here is a method that returns a NodeList:

querySelectorAll(): Returns a collection of nodes that match the specified CSS selector.
 */


/* // HTML code
<div id="div1">
  <p id="p1">Hello</p>
  <p id="p2">World</p>
  <!-- comment -->
</div>

// JavaScript code
const div1 = document.getElementById('div1');

// Get all nodes inside div1 using querySelectorAll
const nodes = div1.querySelectorAll('*');

// Log the nodes
console.log(nodes); // returns a NodeList of nodes:
// 1. element node (p1)
// 2. element node (p2)
// 3. comment node
// 4. text node (whitespace) */