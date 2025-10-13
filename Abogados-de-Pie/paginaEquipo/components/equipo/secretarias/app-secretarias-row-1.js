import './cards/app-secretaria-pablo-daniel-sanabria.js'
import './cards/app-secretaria-marcos-nazar-anchorena.js'

class AppSecretariasRow1 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">
                <app-secretaria-pablo-daniel-sanabria></app-secretaria-pablo-sanabria>

                <app-secretaria-marcos-nazar-anchorena></app-secretaria-marcos-nazar-anchorena>
            </div>
        `
    }
}
customElements.define('app-secretarias-row-1', AppSecretariasRow1)