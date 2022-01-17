let li = document.createElement("li");
let ul = document.getElementById("ul");
function addTodo() {
  let input = document.getElementById("input");
  let ul = document.getElementById("ul");
  let li = document.createElement("li");
  let liText = document.createTextNode(input.value);
  let delBtn = document.createElement("button");
  let delBtnText = document.createTextNode("delete");
  let editBtn = document.createElement("button");
  // let editBtnText = document.createTextNode("Edit");
  delBtn.setAttribute("onclick", "deleteFun(this)");
  delBtn.setAttribute("class", "delbtnjs");
  // editBtn.setAttribute("onclick", "editFun(this)");
  editBtn.setAttribute("class", "delbtnjs");
  ul.appendChild(li);
  li.appendChild(liText);
  li.appendChild(delBtn);
  delBtn.appendChild(delBtnText);
  // li.appendChild(editBtn);
  // editBtn.appendChild(editBtnText)
  
  if (input.value == "") {
    alert("ENTER YOUR TO-DO");
    return false;
  }
  input.value="";
}

function deleteFun(e) {
  e.parentNode.remove();
};
// function editFun() {
//     let newValue = prompt("ENTER YOUR TO-DO")
//     li.innerText=""
//     newValue = li.innerHTML
//     console.log(li.innerHTML)
// }

// function editFun() {
//    var val = e.parentNode.firstChild.nodeValue;
//    var editValue = prompt("enter",val)

//    val = editValue;
// }
function deleteAllTodo() {
    ul.innerHTML=""
}