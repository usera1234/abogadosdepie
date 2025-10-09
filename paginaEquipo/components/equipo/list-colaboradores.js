class AppListColaboradores extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="listEquipoContainer">
                <div class="listEquipoRow">
                    <div class="listEquipoItem">
                        <img src="/static/imagenes/equipo/socios/ezequielD.jpg" alt="Ezzequiel Dominguez" class="listEquipoImg">
                        <div class="listEquipoTitle">Marcelo Benajmin Dominguez</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="/static/imagenes/gmail-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">mezequieldominguez@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="listEquipoItem">
                        <img src="/static/imagenes/equipo/socios/ezequielD.jpg" alt="Ezzequiel Dominguez" class="listEquipoImg">
                        <div class="listEquipoTitle">Marcelo Juan Dominguez</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="/static/imagenes/gmail-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">mezequieldominguez@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="listEquipoItem">
                        <img src="/static/imagenes/equipo/socios/ezequielD.jpg" alt="Ezzequiel Dominguez" class="listEquipoImg">
                        <div class="listEquipoTitle">Marcelo Juan Dominguez</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="/static/imagenes/gmail-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">mezequieldominguez@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('list-colaboradores', AppListColaboradores);    