import './cards/app-secretaria-beatriz-torres.js'
import './cards/app-secretaria-antonio-nae.js'

class AppSecretariasRow4 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">

                <app-secretaria-beatriz-torres></app-secretaria-beatriz-torres>

                <app-secretaria-antonio-nae></app-secretaria-antonio-nae>
                
            </div>
        `
    }
}
customElements.define('app-secretarias-row-4', AppSecretariasRow4)