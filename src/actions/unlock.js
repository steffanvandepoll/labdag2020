function Unlock(laptopName, password){

          switch(laptopName) {
            case 'Iris':
                  return PasswordCheck(password, 'Iris');
            break;
            case 'Jasmine':
                  return PasswordCheck(password, 'Jasmine');
            break;
            case 'Kim':
                  return PasswordCheck(password, 'Kim');
            break;
            default:
                  return 'Laptop not found!';
          }

}

function PasswordCheck(password, laptopName){

          if(password === 'irisPass' || password === 'jasminPass' || password === 'kimPass'){
             return 'You have unlock laptop: ' + laptopName;
          } else{
             return 'Wrong password';
          }

}

export default Unlock;
