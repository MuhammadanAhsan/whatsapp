
	function simulateMouseEvents(element, eventName) 
{ 
	var mouseEvent = document.createEvent('MouseEvents'); 
	mouseEvent.initEvent(eventName, true, true); 
	element.dispatchEvent(mouseEvent); 
} 


name = "contact name"

	simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown');

function startTimer() 
{ 
	setTimeout(myFunc, 3000); 
} 

startTimer(); 

var eventFire = (MyElement, ElementType) => { 
	var MyEvent = document.createEvent("MouseEvents"); 
	MyEvent.initMouseEvent 
	(ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
	MyElement.dispatchEvent(MyEvent); 
}; 

function myFunc() 
{ 

	messageBox = document.querySelectorAll("[contenteditable='true']")[1]; 

	message = "Im sorry "; //message 

	counter = 25; 

	for (i = 0; i < counter; i++) { 
		event = document.createEvent("UIEvents"); 
		messageBox.innerHTML = message.replace(/ /gm, ' '); 
		event.initUIEvent("input", true, true, window, 1); 
		messageBox.dispatchEvent(event); 

		eventFire(document.querySelector('span[data-icon="send"]'), 'click'); 
	} 
}
