import './cards/app-secretaria-fernando-felder.js'
import './cards/app-secretaria-gisela-rios.js'

class AppSecretariasRow2 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">

                <app-secretaria-fernando-felder></app-secretaria-fernando-felder>

                <app-secretaria-gisela-rios></app-secretaria-gisela-rios>
                
            </div>
        `
    }
}
customElements.define('app-secretarias-row-2', AppSecretariasRow2)