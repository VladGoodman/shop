export default class Product extends  HTMLElement{
    connectedCallback(){
        const div = document.createElement('div');
        div.innerHTML = `${this.dataset.name} - ${this.dataset.price}`;
        this.innerHTML = div.innerHTML;
    }

}

