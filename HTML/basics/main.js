const button=document.querySelector("button");
button.addEventListener("click",updateName);
function updateName(){
    const name=prompt("Enter what u want :");
    button.textContent = `Haww you clicked me: ${name}`;
}