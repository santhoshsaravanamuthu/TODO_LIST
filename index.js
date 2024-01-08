var ul = document.getElementById("content")
var input=document.getElementById("input")
function addcontent()
{
    var listitem=document.createElement('li')
    listitem.innerHTML= "<br>"+input.value + "&nbsp;"+"<button onclick='deleteItem(event)' class='button'>Completed</button>"
    ul.append(listitem)
    input.value = "";
    input.placeholder = "ADD TASK TO COMPLETE";
}
function deleteItem(event)
{
    event.target.parentElement.remove()
}