import './cards/app-autoridades-agustin-pesce.js'
import './cards/app-autoridades-beatriz-torres.js'
import './cards/app-autoridades-nicolas-durrieu.js'


class AppAutoridadesRow1 extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
            <div class="listEquipoRow">

                <app-autoridades-agustin-pesce></app-autoridades-agustin-pesce>

                <app-autoridades-beatriz-torres></app-autoridades-beatriz-torres>

                <app-autoridades-nicolas-durrieu></app-autoridades-nicolas-durrieu>
                
            </div>
        `
    }
}
customElements.define('app-autoridades-row-1', AppAutoridadesRow1)