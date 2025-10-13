import './cards/app-secretaria-jose-sanchez-sorondo.js'
import './cards/app-secretaria-gustavo-gerardo-porticella.js'

class AppSecretariasRow5 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">

                <app-secretaria-jose-sanchez-sorondo></app-secretaria-jose-sanchez-sorondo>

                <app-secretaria-gustavo-gerardo-porticella></app-secretaria-gustavo-gerardo-porticella>
                
            </div>
        `
    }
}
customElements.define('app-secretarias-row-5', AppSecretariasRow5)