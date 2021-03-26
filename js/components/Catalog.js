import {f} from '../main.js';
export default class Catalog extends  HTMLElement{
    async connectedCallback(){
       const div = await this.getHtml();
       this.innerHTML = div.innerHTML;
    }

    async getHtml(){
        const products = await this.getProducts();
        const div = document.createElement('div');
        products.forEach(product => {
            let item = document.createElement('shop-product');
            item.dataset.name = product.name;
            item.dataset.price = product.price;
            console.log(item);
            //
            // let item = document.createElement('div');
            // item.innerHTML = `${product.name} - ${product.price}`;
            div.append(item);
        });
        return div;
    }

    async getProducts(){
        return await  f('products');
    }
}

