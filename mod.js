var chat = document.createElement('div');

function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}


var a = document.createElement('a');
a.innerText = "chat";
a.href = "JavaScript:newPopup('http://localhost:8000');"

document.getElementById('topBar').childNodes[23].remove()

document.getElementById('topBar').childNodes[24].remove()

document.getElementById('topBar').appendChild(chat);

chat.append(a)
