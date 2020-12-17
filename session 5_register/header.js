import { redirect } from './index.js'
import { getItemFromLocalStorage } from './utils.js'

const style = `
*{
    margin: 0;
    padding: 0;
}
.container{
    font-family: 'Roboto', sans-serif;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 10%;
}
.logo, .user-info{
    display: flex;
    align-items: center;
}
.logo img{
    width: 5%;
}
.branch{
    font-size: 1.8 rem;
    color: #fff;
    margin-left: 20px;
    font-weight: 600;
}
.user-info i{ 
    font-size: 20px;
    color: #fff;

}
.btn {
    background-color: transparent;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    outline: none;
}
`
export class StoryHeader extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({
            mode: 'open'
        })
    }
    connectedCallback() {
        this._shadowDom.innerHTML = `
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
         ${style}
        </style>
        <div class="container">
        <div class="logo">
            <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="">
            <div class="branch">Share my story</div>
    </div>
        <div class="user-info">
        <div class="avatar"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
        <button class="btn"><i class="fa fa-sign-out" aria-hidden="true"></i></button>
        </div>
    </div>
        
        `

    const signOut = this._shadowDom.querySelector('.btn');
    signOut.onclick = () => {
        localStorage.removeItem('currentUser')
        redirect('login')
    }
    }
}
window.customElements.define('story-header', StoryHeader)