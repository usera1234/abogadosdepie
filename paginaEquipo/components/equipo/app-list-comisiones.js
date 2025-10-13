import './comisiones/app-comisiones-row-1.js'
import './comisiones/app-comisiones-row-3.js'
import './comisiones/app-comisiones-row-4.js'

class AppListComisiones extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="listEquipoContainer">

                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Derecho de Familia </div>

                    <app-comisiones-row-1></app-comisiones-row-1>

                <div>

                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Derecho Civil </div>

                    <app-comisiones-row-3></app-comisiones-row-3>

                <div>

                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Derecho Comercial </div>

                    <app-comisiones-row-4></app-comisiones-row-4>

                <div>

            </div>
        `
    }
}
customElements.define('app-list-comisiones', AppListComisiones);    