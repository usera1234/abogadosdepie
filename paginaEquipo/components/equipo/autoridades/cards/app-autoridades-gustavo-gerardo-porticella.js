class AppAutoridadesGustavoGerardoPorticella extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/socios/gustavoGerardoPorticella.jpg" alt=" Gustavo Gerardo<br>Porticella" class="listEquipoImg">
                        <div class="listEquipoTitle"> Gustavo Gerardo<br>Porticella</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/icono-persona-equipo.png" alt="icono-persona" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">Revisor de cuentas suplente</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/gustavo-gerardo-porticella-b2b67238/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div>
                    </div>
        `
    }
}
customElements.define('app-autoridades-gustavo-gerardo-porticella',AppAutoridadesGustavoGerardoPorticella)