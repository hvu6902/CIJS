import { getItemFromLocalStorage } from "./utils.js"

const style =`
#create-post {
    width: 60%;
    margin: auto;
    margin-top: 20px;
    text-align: right;
}
#create-post textarea {
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    outline: none;
}
.post{
    background-color: #259bfb;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
}


`

class CreatePost extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML =`
        <style>${style}</style>
        <form id="create-post">
            <textarea name="content" rows="6"> </textarea>
            <button class="post">Post</button>
        </form>
        `
    const postForm = this._shadowDom.getElementById('create-post')
    postForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const content = postForm.content.value
        if (content.trim === ''){
            alert('Please enter something on your mind')
        }
        const user = getItemFromLocalStorage ('currentUser')
        const data = {
            createdBy: user.id  ,
            createdAt: new Date().toISOString(),
            content: content,
            comment: [],
            authorName: user.fullName ,
            isShow: true,
        }
        firebase.firestore().collection('post').add(data)
        postForm.content.value = ''
    })
    }
}
window.customElements.define('create-post',CreatePost)
