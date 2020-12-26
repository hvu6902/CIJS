const style = `
.register-container{
    width: 100vw;
    height: 100vh;
    background: url('https://i.pinimg.com/564x/4f/0e/2f/4f0e2f2c4bfba4f5ff195a6bc447c411.jpg') width: 60%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
}
#register-form{
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
@media only screen and (max-width: 768px){
    #register-form{
        width: 100%
    }
}
`

class RegisterScreen extends HTMLElement {
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
    <div class="register-container">
        <form id="register-form">
            <h1>CI project</h1>
            <input-wrapper id="first-name" type="text" placeholder="First name"></input-wrapper>
            <input-wrapper id="last-name" type="text" placeholder="Last name"></input-wrapper>
            <input-wrapper id="email" type="text" placeholder="Email">Email</input-wrapper>
            <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
            <input-wrapper id="confirm-password" type="password" placeholder="Confirm password"></input-wrapper>
            <button type="submit">Register</button>
            <br></br>
            <a id="redirect">Already have an account ? Log in </a>

        </form>
     </div>
    `
        const registerForm = this._shadowRoot.getElementById('register-form')
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault()

            const firstName = this._shadowRoot.getElementById('first-name').value
            const lastName = this._shadowRoot.getElementById('last-name').value
            const email = this._shadowRoot.getElementById('email').value
            const password = this._shadowRoot.getElementById('password').value
            const confirmPassword = this._shadowRoot.getElementById('confirm-password').value
            let isValid = true
            if (
                firstName.trim() === ''
            ) {
                isValid = false
                this.setError('first-name', 'Please input first name')
            }
            if (
                lastName.trim() === ''
            ) {
                isValid = false
                this.setError('last-name', 'Please input last name')
            }
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
            if (password !== confirmPassword) {
                this.setError('confirm-password', "Password didn't match")
            }
            if (!isValid) {
                return
            }
            const user = {
                fullName: `${firstName} ${lastName}`,
                email: `${email}`,
                password: CryptoJS.MD5(password).toString()
            }

            const check = await this.checkEmailExist(email)
            if (check) {
                alert('Email exist, try another')
            } else {
                firebase.firestore().collection('users').add(user)
                alert ("Register successfully")
                redirect('login')
            }
            
        })
        this._shadowRoot.getElementById('redirect').addEventListener('click', () => {
            router.navigate('login')
        })
    }
    setError(id, message) {
        this._shadowRoot.getElementById(id).setAttribute('error', message)
    }
    async checkEmailExist(email) {
        const res = await firebase.firestore().collection('users').where('email', '==', email).get()
        return !res.empty
    }
}
window.customElements.define('register-container', RegisterScreen)