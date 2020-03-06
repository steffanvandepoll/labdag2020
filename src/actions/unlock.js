function Unlock(laptopName, password){

          if(laptopName === 'Iris' || laptopName === 'Jasmine' || laptopName === 'Kim'){
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
