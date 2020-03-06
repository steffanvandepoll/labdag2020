function doIt() {
    const event = new CustomEvent('secret', { detail: "hi there!" });
    
    // this is what needs to be build by the player..
    // window.addEventListener('secret', function (e) {
    //     console.log(e.detail);
    // }, false);
    
    // event is fired every 5 seconds. If you build a listener you can get the message
    const interval = setInterval(function() {
        window.dispatchEvent(event);
    }, 5000);
    
    // at some point disable the interval..
    // clearInterval(interval); // thanks @Luca D'Amico
}

 export default doIt