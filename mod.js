var chat = document.createElement('div');

var iframe = document.createElement('iframe');
iframe.style.display = "none"
iframe.src = "localhost:8000"

var a = document.createElement('a');
a.className = 'option smallFancyButton'
a.innerText = "chat";
a.onclick = function() {
    if (iframe.style.display === "none") {
        iframe.style.display = "block"
    } else if (iframe.style.display === "block") {
        iframe.style.display = "none"
    }
}

document.getElementById('topBar').appendChild(chat);
document.body.append(iframe);
chat.append(a)
