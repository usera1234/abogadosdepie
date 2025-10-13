class AppAutoridadesNicolasDurrieu extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/socios/nicolasDurrieu.jpg" alt="Nicolas Durrieu" class="listEquipoImg">
                        <div class="listEquipoTitle">Nicolas Durrieu</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/icono-persona-equipo.png" alt="icono-persona" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">Vicepresidente 2°</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/nicodurrieu/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div> 
                    </div>
        `
    }
}
customElements.define('app-autoridades-nicolas-durrieu',AppAutoridadesNicolasDurrieu)