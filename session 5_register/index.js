import './screens/register.js'
import './inputWrapper.js'
import './screens/login.js'
import {getItemFromLocalStorage} from './utils.js'
import './screens/story.js'
import './header.js'
import './createPost.js'
import './postItem.js'
import './listPost.js'
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