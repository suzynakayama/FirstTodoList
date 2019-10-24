let button = document.getElementById("btn");
let newText = document.getElementById("newtext");
let ul = document.querySelector("ul");
let btnCleanAll = document.getElementById("cleanAll");
let h3phrase = document.getElementById("h3");

function newItemLength() {
    return newText.value.length;
};

function addNewItem() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newText.value));
    ul.appendChild(li);
    newText.value = "";

    //Checkbox button that when clicked strikethrough the li item using the CSS done class
    let checkBtn = document.createElement("input");
    checkBtn.type = "checkbox";
    checkBtn.name = "done";
    checkBtn.value = "checked";
    checkBtn.id = "box";
    li.appendChild(checkBtn);

    checkBtn.addEventListener("click", function crossedOut() {
        if (li.className !== "done") {
            li.className = "done";
        } else {
            li.className = "";
        }
    });
    
    //Delete li item button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.style.cssText = "margin: 10px; background-color: rgba(102, 153, 255, 0.4); color: red; font-weight: bold; font-size: 25px; text-align: center; border: 2px solid rgb(102, 153, 255); width: 40px; height: 45px; line-height: 30px; border-radius: 30%; font-family: 'Indie Flower', cursive; color: rgb(102, 153, 255);";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function() {
        li.parentNode.removeChild(li);
    })
};

function addNewItemAfterClick() {
    if (newItemLength() > 0) {
        addNewItem();
    }
};

function addNewItemAfterKeypress() {
    if (newItemLength() > 0 && event.keyCode === 13) {
        addNewItem();
    }
};

button.addEventListener("click", addNewItemAfterClick);

newText.addEventListener("keypress", addNewItemAfterKeypress);

//Button to Delete All the li's
btnCleanAll.addEventListener("click", function() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});

// array com frases e escolha aleatoria
let phrases = ["You got this!", "You can do this!", "Don't leave for tomorrow what you can finish today!", "Push, push, push!", "Believe in yoursefl!", "Stop, Breath, Keep Going!"];

let randomItem = phrases[Math.floor(Math.random() * phrases.length)];

h3phrase.innerHTML = randomItem;
