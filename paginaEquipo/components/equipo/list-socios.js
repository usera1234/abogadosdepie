class AppListSocios extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="listSociosContainer">
                <div class="listSociosGrid">
                    <div class="listSociosItem">
                        <img src="/static/imagenes/equipo/socios/ezequielD.jpg" alt="Ezzequiel Dominguez" class="listSociosImg">
                        <div class="listSociosTitle">Marcelo Ezequiel Dominguez</div>
                        <div class="listSociosRedes">
                            <div class="listSociosRedesRow">
                                <img src="/static/imagenes/equipo/iconos/gmail-equipo.png" alt="LinkedIn" class="listSociosRedesImg">
                                <p class="listSociosRedesText">mezequieldominguez@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('list-socios', AppListSocios);    