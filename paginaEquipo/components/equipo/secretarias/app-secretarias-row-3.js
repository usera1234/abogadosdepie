import './cards/app-secretaria-adrian-diego-campos.js'
import './cards/app-secretaria-fernando-jose-marcone.js'

class AppSecretariasRow3 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">
            
                <app-secretaria-adrian-diego-campos></app-secretaria-adrian-diego-campos>

                <app-secretaria-fernando-jose-marcone></app-secretaria-fernando-jose-marcone>

            </div>
        `
    }
}
customElements.define('app-secretarias-row-3', AppSecretariasRow3)