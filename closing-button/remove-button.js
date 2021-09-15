const paragraphsList = document.getElementsByClassName("pane")

function removePane({target}){
    const paneToRemove = target.closest("div .pane")
    paneToRemove.parentElement.removeChild(paneToRemove)
}

function addRemoveButton(paneIndex){
    const button = document.createElement("button")
    button.textContent = "[x]"
    button.classList.add("remove-button")
    paragraphsList[paneIndex].appendChild(button)
    button.addEventListener("click", removePane)
}
for (let i=0; i<paragraphsList.length; i++){
    addRemoveButton(i)
}