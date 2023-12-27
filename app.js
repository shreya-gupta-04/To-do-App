const inp = document.querySelector("input");
const addtask = document.querySelector(".add task");
const ul= document.querySelector("ul")
const btn= document.querySelector("button");

btn.addEventListener("click",function(){
    if(inp.value == " ")
    {
        alert("write something!");
    }
    else{
        let item= document.createElement("li");
        item.innerText=inp.value;
        ul.appendChild(item);
        let dltbtn= document.createElement("button");
        dltbtn.innerHTML="\u00d7";
        item.appendChild(dltbtn);
    }
    inp.value="";
    savedata();
});
tasks.addEventListener("click",function(event)
{
    if(event.target.tagName == "LI")
    {
        event.target.classlist.toggle("checked");
        savedata();
    }
    else if(event.target.nodeName =="BUTTON")
    {
        let listitem = event.target.parentElement;
        listitem.remove();
        savedata();
    }
}, false);
function savedata()
{
    localStorage.setitem("data", tasks.innerHTML);
}
function showtask()
{
    tasks.innerText = localStorage.getitem("data");
}
showtask();




