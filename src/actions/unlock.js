function Unlock(laptopName, password){

          switch(laptopName) {
            case 'Iris':
                    if(password === 'irisPass'){
                       return 'You have unlocked laptop Iris';
                    } else{
                       return 'Wrong password for laptop Iris';
                    }
            break;
            case 'Jasmine':
                    if(password === 'jasminPass'){
                       return 'You have unlocked laptop Jasmine';
                    } else{
                       return 'Wrong password for laptop Jasmine';
                    }
            break;
            case 'Kim':
                  if( password === 'kimPass'){
                     return 'You have unlocked laptop Kim';
                  } else{
                     return 'Wrong password for laptop Kim';
                  }
            break;
            default:
                  return 'Laptop not found!';
          }

}


export default Unlock;
