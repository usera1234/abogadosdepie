class AppSecretariaPabloDanielSanabria extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/secretarias/pabloDanielSanabria.jpg" alt="Pablo Daniel Sanabria" class="listEquipoImg">
                        <div class="listEquipoTitle">Pablo Daniel<br>Sanabria</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/icono-persona-equipo.png" alt="icono-persona" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">Secretario</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/pablo-daniel-sanabria-68819046/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div>
                    </div>
        `
    }
}
customElements.define('app-secretaria-pablo-daniel-sanabria',AppSecretariaPabloDanielSanabria)