function Unlock(laptopName = 'test', password = 'test') {

      laptopName = laptopName.toLowerCase();



      let pass1 = laptopName.split(',')[1];

      let laptop = laptopName.split(',')[0];



      laptopName = laptop;
      password = pass1;


      if (laptopName === '"iris"' || laptopName === '"jasmine"' || laptopName === '"kim"' || laptopName === "'iris'"|| laptopName === "'jasmine'" || laptopName === "'kim'") {
            return PasswordCheck(laptopName, password);
      } else {
            return { responseText: 'Laptop not found!'} ;
      }

}

function PasswordCheck(laptopName, password) {

      if ((laptopName === '"iris"' && password === '"02/02/2020"') || (laptopName === '"jasmine"' && password === '"jasminePass"') || (laptopName === '"kim"' && password === '"LetThereBeLight"') ||
      (laptopName === "'iris'" && password === "'02/02/2020'") || (laptopName === "'jasmine'" && password === "'jasminePass'") || (laptopName === "'kim'" && password === "'LetThereBeLight'")) {
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
