console.log("You are working with listOfItems.js");

// List of items
// You are building a web page that displays a list of items. 
// The user should be able to add new items to the list and edit the text of the items. 
// Your task is to use the DOM API to create the necessary elements, add event listeners to them, 
// and manipulate the elements as the user interacts with the page.

// https://www.crocoder.dev/blog/the-dom-exercises/



const divListApp = document.getElementById("list-app");

const addButtonElement = document.getElementById("addButton");
const textElement = document.getElementById("textAdd");// input element
const ulElementListApp = document.createElement ("ul");
//const input = document.createElement("input");


    const AddElementListApp = (e) => {

        e.preventDefault() // prevent the page FORM refreshing FORMULARIO

        const liElement = document.createElement("li");
        
        liElement.innerHTML = textElement.value;
        
        ulElementListApp.appendChild(liElement);
        
        divListApp.appendChild(ulElementListApp);

        textElement.value = "";

        
    };
    
    // list.addEventListener("click", function(event) {
    //     if (event.target.tagName === "li") {
    //         const text = prompt("Enter new text:");
    //         event.target.innerHTML = text;
    //     }
    // });
    
 addButtonElement.addEventListener("click",AddElementListApp);

 



