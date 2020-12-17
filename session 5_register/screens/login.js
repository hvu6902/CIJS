const style = `
.login-container{
    width: 100vw;
    height: 100vh;
    background: url('https://i.pinimg.com/564x/4f/0e/2f/4f0e2f2c4bfba4f5ff195a6bc447c411.jpg');
    background-size: 60%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
}
#login-form{
    width: 30%;
    background: #fff;
    height: 100vh;
    padding: 0px 20px;
}
h1{
    text-align: center;
    color: #333;
}
button {
    background: #006bb6;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
}
`
import {
    redirect
} from '../index.js'
import {
    getDataFromDocs, saveToLocalStorage
} from '../utils.js'
class loginScreen extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        })
    }
    connectedCallback() {
        this._shadowRoot.innerHTML = `
    <style>
     ${style}
    </style>
    <div class="login-container">
        <form id="login-form">
            <h1>CI project</h1>
            <input-wrapper id="email" type="text" placeholder="Email">Email</input-wrapper>
            <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
            <button type="submit">Log in</button>
            <br></br>
            <a id="redirect">Don't have an account ? Register </a>

        </form>
     </div>
    `
        const loginForm = this._shadowRoot.getElementById('login-form')
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            const email = this._shadowRoot.getElementById('email').value
            const password = this._shadowRoot.getElementById('password').value
            let isValid = true

            if (
                email.trim() === ''
            ) {
                isValid = false
                this.setError('email', 'Please input email')
            }
            if (
                password.trim() === ''
            ) {
                isValid = false
                this.setError('password', 'Please input Password')
            }
            if (!isValid) {
                return
            }
            const user = await firebase.firestore()
            .collection('users')
            .where('email', '==', email)
            .where('password', '==', CryptoJS.MD5(password).toString())
            .get()
            if (user.empty) {
                alert('Email or password is wrong, try again')
            } else {
                saveToLocalStorage('currentUser', getDataFromDocs(user)[0])
                redirect('story')
                
            }

        })
        this._shadowRoot.getElementById('redirect').addEventListener('click', () => {
            redirect('register')
        })
    }
    setError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute('error', message)
    }
}


window.customElements.define('login-container', loginScreen)