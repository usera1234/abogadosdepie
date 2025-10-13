class AppSecretariaFernandoJoseMarcone extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/secretarias/fernandoJoseMarcone.jpg" alt="Fernando José<br>Marcone" class="listEquipoImg">
                        <div class="listEquipoTitle">Fernando José<br>Marcone</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/icono-persona-equipo.png" alt="icono-persona" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">Subsecretario</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/fernando-jos%C3%A9-marcone/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div>
                    </div>
        `
    }
}
customElements.define('app-secretaria-fernando-jose-marcone',AppSecretariaFernandoJoseMarcone)