function Unlock(laptopName, password){

          laptopName.toLowerCase();

          if(laptopName === 'iris' || laptopName === 'jasmine' || laptopName === 'kim'){
              return PasswordCheck(laptopName, password);
          }else{
              return 'Laptop not found!';
          }

}

function PasswordCheck(laptopName, password){

      if(password === 'irisPass' || password === 'jasminPass' || password === 'kimPass' ){
            return {responseText:'You have unlocked laptop ' + laptopName, isUnlocked: true, laptopName: laptopName}
      }else{
            return {responseText:'Wrong password for laptop ' + laptopName, isUnlocked: false, laptopName: laptopName}
      }
}


export default Unlock;
