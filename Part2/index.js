const input = document.getElementById("idInput")
const color = document.getElementById("colorInput")

function setCard(){
    const card = document.getElementById(idInput.value)
    // const color = document.getElementById("color")
    card.style.color = colorInput.value;
 
}

