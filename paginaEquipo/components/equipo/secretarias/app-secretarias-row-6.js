import './cards/app-secretaria-martina-del-valle-agosti.js'

class AppSecretariasRow6 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">

                <app-secretaria-martina-del-valle-agosti></app-secretaria-martina-del-valle-agosti>

            </div>
        `
    }
}
customElements.define('app-secretarias-row-6', AppSecretariasRow6)