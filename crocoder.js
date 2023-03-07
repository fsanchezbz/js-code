
// inserta varios elmentos LI dentro de una lista UL

const fruitList =["apple","banana","cherry","grape","mango","orange","peach","pineapple",];
const ulElement = document.querySelector("#listfruits");

// for (let i=0; i < fruitList.length; i++){
     
//     const liElment = document.createElement("li");
//     liElment.textContent = fruitList[i];
//     ulElement.appendChild(liElment);

// }

const newLiElement = () =>{

    fruitList.forEach(element => {
        const liElement = document.createElement("li");
        liElement.textContent = element;
        ulElement.appendChild(liElement);
    });

}


//Inserta una imagen con Logo dentro de un DEV
const divElement = document.querySelector("#logo");
const imageSry = "https://www.crocoder.dev/assets/logoNavigation-30263fec.png"

const newImgElement = () =>{
      imgElement = document.createElement("img");
      imgElement.src = imageSry;
      divElement.appendChild(imgElement);
}


// Change first and last item from an unordered list
// Change the text in the first and the last list item element in every unordered list element on this page. Change it to 'first' and 'last'.

const UlListClassFirst = document.querySelectorAll("ul >:first-child");
const UlListClassLast = document.querySelectorAll("ul >:last-child");

const ChangeFirstAndLast = () =>{

    UlListClassFirst.forEach((li) => (li.textContent = "first🔥"));

    UlListClassLast.forEach((li) => (li.textContent = "last🚀"));

}

