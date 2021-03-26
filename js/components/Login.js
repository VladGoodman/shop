import {f} from '../main.js';
export default class Login extends  HTMLElement{
    connectedCallback(){
        this.innerHTML = this.getHtml();
        let btn = document.getElementById('in');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let that = this;
        btn.onclick = function(){
            that.loginUser(email.value, password.value);
        };
    }

    getHtml(){
        return `
            <hr>
                <form method="post">
                    <label> Email
                        <input  id="email" type="text" name="email">
                    </label><br><br>
                    <label> Password
                        <input  id="password" type="text" name="password">
                    </label><br>
                    <button id="in" type="button">Вход</button>
                </form>
            <hr>

        `;
    }

    async loginUser(email, password){
        return await f('login', 'post', null, {
            'email':email,
            'password':password
        }).then(res => console.log(res));
    }


}

