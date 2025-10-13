class AppSecretariaMarcosNazarAnchorena extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/secretarias/marcosNazarAnchorena.jpg" alt="Marcos Nazar Anchorena" class="listEquipoImg">
                        <div class="listEquipoTitle">Marcos Nazar<br>Anchorena</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/icono-persona-equipo.png" alt="icono-persona" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">Subsecretario</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/marcosnazaranchorena/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div>
                    </div>
        `
    }
}
customElements.define('app-secretaria-marcos-nazar-anchorena',AppSecretariaMarcosNazarAnchorena)