import './secretarias/app-secretarias-row-1.js'
import './secretarias/app-secretarias-row-2.js'
import './secretarias/app-secretarias-row-3.js'
import './secretarias/app-secretarias-row-4.js'
import './secretarias/app-secretarias-row-5.js'
import './secretarias/app-secretarias-row-6.js'
import './secretarias/app-secretarias-row-7.js'

class AppListSecretarias extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="listEquipoContainer">
                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Relaciones Institucionales </div>

                    <app-secretarias-row-1></app-secretarias-row-1>

                <div>
                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Comunicación </div>

                    <app-secretarias-row-2></app-secretarias-row-2>

                <div>
                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Académia </div>

                    <app-secretarias-row-3></app-secretarias-row-3>

                <div>
                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Innovacion </div>

                    <app-secretarias-row-4></app-secretarias-row-4>

                <div>
                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Relaciones Interjurisdiccionales </div>

                    <app-secretarias-row-5></app-secretarias-row-5>

                <div>
                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Eventos </div>

                    <app-secretarias-row-6></app-secretarias-row-6>

                <div>
                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Nóveles </div>

                    <app-secretarias-row-7></app-secretarias-row-7>

                <div>
            </div>
        `
    }
}
customElements.define('app-list-secretarias', AppListSecretarias);    