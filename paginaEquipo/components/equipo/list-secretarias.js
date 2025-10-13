import './secretarias/app-secretarias-row-1.js'

class AppListSecretarias extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="listEquipoContainer">
                <div class="listEquipoColumn">

                    <div class="listEquipoText"> Relaciones Institucionales </div>

                    <app-secretarias-row-1></app-secretarias-row-1>

                <div>
            </div>
        `
    }
}
customElements.define('list-secretarias', AppListSecretarias);    