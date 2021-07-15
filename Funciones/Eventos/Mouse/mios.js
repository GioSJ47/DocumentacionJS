var eventFire = (el, etype) => {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(etype, true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
}

function enviar(eMsg, eBoton, msg){
    //add text into input field
    eMsg.innerHTML = msg.replace(/  /gm,'');

    //Force refresh
    event = document.createEvent("UIEvents");
    event.initUIEvent("input", true, true, window, 1);
    eMsg.dispatchEvent(event);

    //Click at Send Button
    eventFire(eBoton, 'click');
}
