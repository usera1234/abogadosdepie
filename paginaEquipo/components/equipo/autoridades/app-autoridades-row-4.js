import './cards/app-autoridades-marisa-kolansisky.js'
import './cards/app-autoridades-carlos-laman.js'
import './cards/app-autoridades-adrian-diego-campos.js'


class AppAutoridadesRow4 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">

                <app-autoridades-marisa-kolansisky></app-autoridades-marisa-kolansisky>

                <app-autoridades-carlos-laman></app-autoridades-carlos-laman>

                <app-autoridades-adrian-diego-campos></app-autoridades-adrian-diego-campos>
                
            </div>
        `
    }
}
customElements.define('app-autoridades-row-4', AppAutoridadesRow4)