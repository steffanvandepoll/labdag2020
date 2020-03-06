function Unlock(laptopName, password) {

      laptopName = laptopName.toLowerCase();
      console.log(laptopName);

      if (laptopName === 'iris' || laptopName === 'jasmine' || laptopName === 'kim') {
            return PasswordCheck(laptopName, password);
      } else {
            return 'Laptop not found!';
      }

}

function PasswordCheck(laptopName, password) {

      if ((laptopName === 'iris' && password === '02/02/2020') || (laptopName === 'jasmine' && password === 'jasminePass') || (laptopName === 'kim' && password === 'LetThereBeLight')) {
            return {
                  responseText: 'You have unlocked laptop ' + laptopName,
                  isUnlocked: true,
                  laptopName: laptopName
            }
      } else {
            return {
                  responseText: 'Wrong password for laptop ' + laptopName,
                  isUnlocked: false,
                  laptopName: laptopName
            }
      }
}


export default Unlock;