

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
    alert("Submit button has been clicked")
})

function submitForm(event){
    console.log(event)
    alert("form has been submitted")
}


.container form .user-details{
 display:flex;
 flex-wrap: wrap;
 justify-content: space-between;
   
}
form .user-details .input-box{
    background-color: blue;
}

