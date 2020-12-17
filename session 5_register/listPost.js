import { getDataFromDocs } from "./utils.js"

const style =`
.list-post{
    width: 60%;
    margin: auto;
    margin-top: 10px;
}
`
class ListPost extends HTMLElement{
    constructor(){
        super()
    this._shadowDom = this.attachShadow({mode: 'open'})
    }
    async connectedCallback(){
    const res = await firebase.firestore().collection('post').where('isShow','==', true).get()
    this.listenCollectionChange()
    const listPost = getDataFromDocs(res)
    let html = ''
    listPost.forEach(element => {
        html +=`
         <post-item 
          time="${element.createdAt}" 
          author="${element.authorName}" 
          content="${element.content}">
         </post-item>
         `
    })
    this._shadowDom.innerHTML =`
    <style>${style}</style>
    <div class="list-post">
        ${html}
    </div>
        `
    }
    listenCollectionChange(){
        let firstRun = true
        firebase.firestore()
        .collection('post')
        .where('isShow', '==',true)
        .onSnapshot((snapShot) => {
            if(firstRun){
                firstRun = false
                return
            }
            const docChange = snapShot.docChanges()
            for (const oneChange of docChange){
                if(oneChange.type === 'added'){
                this.appendPostItem(getDataFromDocs(oneChange.doc))    
                }
            }
        })
    }
    appendPostItem(data){
        const postItem = document.createElement('post-item')
        postItem.setAttribute('time', data, createdAt)
        postItem.setAttribute('author', data, authorName)
        postItem.setAttribute('content', data.content)
        const parent = this._shadowDom.querySelector('.list-post')
        parent.insertBefore(postItem, parent.firstChild)
}
}
window.customElements.define('list-post', ListPost)