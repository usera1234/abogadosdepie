import './cards/app-secretaria-carlos-laman.js'
import './cards/app-secretaria-marisa-kolansisky.js'

class AppSecretariasRow7 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">

                <app-secretaria-carlos-laman></app-secretaria-carlos-laman>

                <app-secretaria-marisa-kolansisky></app-secretaria-marisa-kolansisky>

            </div>
        `
    }
}
customElements.define('app-secretarias-row-7', AppSecretariasRow7)