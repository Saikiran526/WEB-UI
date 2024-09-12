const input=document.getElementById('input');
const listcontainer=document.getElementById('list-container');

function handleClick(){
    if(input.value==='')
        alert("Write something to add");
    else{
        console.log(listcontainer);
        const li=document.createElement('li');
        console.log(li);
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value='';
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("before1");
        saveData();
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML=localStorage.getItem('data');
}
showData();