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
            return 'You have unlocked laptop ' + laptopName;
      }else{
            return 'Wrong password for laptop ' + laptopName;
      }
}


export default Unlock;
