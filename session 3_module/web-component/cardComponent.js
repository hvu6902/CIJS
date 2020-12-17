const style =`
<style>
.card-container img{
    width: 500px;
    padding: 10px;
}
.card-body{
    font-family: sans-serif;
    text-align: center;
    border: 5px;
}
.title{
    font-size: 1.5 rem;
    font-weight: 600;
}
</style>
`
class CardComponent extends HTMLElement {
    constructor() {
        super()
        // khai báo shadow_dom
        this._shadowDom = this.attachShadow({mode: 'open'})
        this.imgsrc = this.getAttribute('imgsrc')
        this._shadowDom.innerHTML = `
        ${style}
            <div class="card-container"> 
             <img src=${this.imgsrc}">
            </div>
            <div class="card-body">
             <div class="title">s1m pờ le</div>
             <div class="description"> top 1 hltv </div>
            </div>
            `
    }
}
window.customElements.define('card-container', CardComponent)