const button = document.querySelector("button")
const input = document.querySelector("#text")
const chat = document.querySelector(".chat")
input.focus()

button.onclick = (e) => {
    const message = input.value
    if (message.trim().length > 0){
        const spanSend = document.createElement("span")
        spanSend.className = "send"
        spanSend.innerText = message
        chat.appendChild(spanSend)
            
        const spanReceive = document.createElement("span")
        spanReceive.className = "receive"
        spanReceive.innerText = "typing..."
        chat.appendChild(spanReceive)
            setTimeout(() => {
                if (message === "kandaisyn"){
                    spanReceive.innerText = "Jakshy ozun?"
                } else if (message === "ne kylyp"){
                    spanReceive.innerText = "oturam"
                } else {
                    spanReceive.innerText = "A?"
                }
                },1200)
    }  
    input.value = "" 
    input.focus() 
}