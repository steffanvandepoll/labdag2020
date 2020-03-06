export default function rotate(value) {
    const possibleValues = {
        room: {
            id: 'background'
        }
    }
    
    if (possibleValues.hasOwnProperty(value)) {
        console.log(value);
        const element = document.getElementById("background");
        element.classList.toggle("flip");
    }
}

