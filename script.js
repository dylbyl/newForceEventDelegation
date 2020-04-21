document.querySelector("#home-link").addEventListener("click", function(){
    htmlGenerator("HOME");
})

document.querySelector("#contact-link").addEventListener("click", function(){
    htmlGenerator("CONTACT");
})
document.querySelector("#about-link").addEventListener("click", function(){
    htmlGenerator("ABOUT");
})
document.querySelector("#project-link").addEventListener("click", function(){
    htmlGenerator("PROJECT");
})


const htmlGenerator = (linkName) =>{
document.querySelector("#java-container").innerHTML = `
    <h1>${linkName}</h1>
    <p>placeholder text</p>`
    if(linkName === "CONTACT"){
        document.querySelector("#java-container").innerHTML += `
        <form action="">
            <input id="name-field" type="text" placeholder="Name">
            <input id="message-field" type="text" placeholder="Message">
        </form>
         <button id="send-btn">Send</button>
        `
    }
    document.querySelector("#message-container").innerHTML = ``;
}

document.querySelector("#java-container").addEventListener("click", function(){
    if (event.target.id === "send-btn"){
        document.querySelector("#message-container").innerHTML = `
        Your message has been sent!
        `
    }
})