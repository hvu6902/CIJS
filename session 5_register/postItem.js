import {
    convertDate
} from "./utils.js"

const style = `
}
.list-post{
    width: 60%;
    margin: auto;
}
.author-name{
    font-weight: 600;
}
.time{
    font-size: 12px;
}
.post-item{
    border: 1px solid #dbdbdb;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
    font-size: 14px;
    font-family: 'Roboto' serif;
}
`
class PostItem extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({
            mode: 'open'
        })
    }
    connectedCallback() {
        this.author = this.getAttribute('author')
        this.time = convertDate(this.getAttribute('time'))
        this.content = this.getAttribute('content')
        this.img = this.getAttribute('img')
        const imgElm = this.img ? `<div class="image">${this.img}</div>` : '' 
        this._shadowDom.innerHTML = `
        <style>${style}</style>
        <div class="post-item">
                <div class="author-name">${this.author}</div>
                <div class="time">${this.time}</div>
                ${imgElm}
                <div class="content">
                        ${this.content}
                    </div>
            </div>
        `
    }
}
window.customElements.define('post-item', PostItem)