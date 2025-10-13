class AppListSocios extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="listEquipoContainer">
                <div class="listEquipoRow">
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/socios/abogadopromedio.jpg" alt="Ezzequiel Dominguez" class="listEquipoImg">
                        <div class="listEquipoTitle">Marcelo Ezequiel<br>Dominguez</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/gmail-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">mezequieldominguez@gmail.com</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/marcelo-ezequiel-dominguez-4b4b9820b/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/socios/abogadopromedio.jpg" alt="Ezzequiel Dominguez" class="listEquipoImg">
                        <div class="listEquipoTitle">Marcelo Juan<br>Dominguez</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/gmail-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">mezequieldominguez@gmail.com</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/marcelo-ezequiel-dominguez-4b4b9820b/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/socios/abogadopromedio.jpg" alt="Ezzequiel Dominguez" class="listEquipoImg">
                        <div class="listEquipoTitle">Marcelo Juan<br>Dominguez</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/gmail-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">mezequieldominguez@gmail.com</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/marcelo-ezequiel-dominguez-4b4b9820b/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('list-socios', AppListSocios);    