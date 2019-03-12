let theItems = [
    {text: "get the Esspresso machine fixed", isDone: false},
    {text: "get that mdphk Scottish-kilt cat", isDone: false},
    {text: "get at least 7.5 hours of sleeping", isDone: false},
    {text: "read the book ", isDone: false},
    {text: "Do someshit things", isDone: false}
];


let addtotheItems = () => {
    let inputText = document.getElementById("input").value;
    theItems.push({text: inputText, isDone: false});
    document.getElementById("input").value = "";
    render()
}



let remove = (i) => {
    theItems.splice(i,1)
render()
}


let done = (i) => {
    theItems[i].isDone = !theItems[i].isDone 
    // if (theItems[i].isDone == true) {theItems[i].text = `<s>${theItems[i].text}</s>`
    // }   else if (theItems[i].isDone == false) { theItems[i].text = theItems[i].text.substr(3, theItems[i].text.length - 6)}
render() ;
}



let addBtn =  document.getElementById("addbtn");
addBtn.addEventListener(`click`, addtotheItems);


let render = () => {
    let todolist = document.getElementById(`todos`)

    let todoHTML = theItems.map( (x,i) => {
        if(x.isDone == false) {
            return `<li><button href='#' onclick=done(${i})> Done </button>  ${x.text} <button href='#' onclick=remove(${i})> Delete </button> </li>\n`
        } else {
            return `<li> <button href='#' onclick=done(${i})> Mark undone </button> <s>${x.text}</s> <button href='#' onclick=remove(${i})> Delete </button> </li>\n`
        }
    
    });
    todolist.innerHTML = todoHTML.join('');
}

let filtercheck = document.getElementById(`check`).checked



render()

