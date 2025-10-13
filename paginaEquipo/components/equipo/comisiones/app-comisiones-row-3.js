import './cards/app-comision-juan-pablo-farchi.js'

class AppComisionesRow3 extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `
            <div class="listEquipoRow">

                <app-comision-juan-pablo-farchi></app-comision-juan-pablo-farchi>

            </div>
        `
    }
}
customElements.define('app-comisiones-row-3',AppComisionesRow3)