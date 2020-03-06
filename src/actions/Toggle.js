let lampIsOn = false;
let aircoIsOn = false;


export default function toggle(value) {
    switch(value){
      case "lamp":
        if(lampIsOn){
          lampIsOn = false;
          return "You've turned off the lamp.. the room is kind of dark"
        }
        lampIsOn = true;
        return "You've turned on the lamp.. you spot a 'note' on the floor"

      case "airco":
        if(aircoIsOn){
          aircoIsOn = false;
          return "you've turned of the airdconditioning.. the room is a little bit warm"
        }
        aircoIsOn = true;
        return "You've turned on the airdconditioning.. the room is a little chilly"

      default:
        return "I dont know what you're trying to toggle"
    }
}
