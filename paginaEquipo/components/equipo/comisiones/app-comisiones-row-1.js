import './cards/app-comision-marisa-kolansisky.js'
import './cards/app-comision-laura-falabella.js'

class AppComisionesRow1 extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `
            <div class="listEquipoRow">

                <app-comision-laura-falabella></app-comision-laura-falabella>

                <app-comision-marisa-kolansisky></app-comision-marisa-kolansisky>
                
            </div>
        `
    }
}
customElements.define('app-comisiones-row-1',AppComisionesRow1)