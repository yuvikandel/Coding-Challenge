var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "item";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var item = document.getElementsByClassName("item");
var i;
for (i = 0; i < item.length; i++) {
    item[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You can't write a blank to-do");
    } else {
        document.getElementById("todos").appendChild(li);
    }
    document.getElementById("input").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "item";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < item.length; i++) {
        item[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
function deleteAll(){
    var todo =  document.getElementById("todos");
    var lis = todo.getElementsByTagName("LI");
    console.log(lis);
    while(lis.length > 0){                   
        todo.removeChild(lis[0]);
    }
}