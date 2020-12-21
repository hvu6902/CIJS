import {getItemFromLocalStorage} from './utils.js'
var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on({
    'login': function () {
      redirect('login')
    },
    'register': function () {
      redirect('register')
    },
    'story': function () {
      redirect('story')
    },
    '*': function () {
     router.navigate('login')
    }
   
  })
  .resolve();

  export function redirect(screenName) {
    if (screenName ==='register'){
        document.getElementById('app').innerHTML =`
        <register-container></register-container>
        `
    } else if (screenName === 'login'){
        document.getElementById('app').innerHTML =`
        <login-container></login-container>
        ` 
    }
    else if (screenName === 'story'){
        document.getElementById('app').innerHTML =`
        <story-screen></story-screen>
        `
    }
}
checkAuthen()

async function checkAuthen(){
    const user = getItemFromLocalStorage('currentUser')
    if (user){
        const res = await firebase.firestore()
        .collection('users')
        .where('email', '==', user.email)
        .where('password','==',user.password)
        .get()
        if (res.empty){
            redirect('login')
        } else {
            redirect('story')
        }
    }
    else{
        redirect('login')
    }
}
window.router = router