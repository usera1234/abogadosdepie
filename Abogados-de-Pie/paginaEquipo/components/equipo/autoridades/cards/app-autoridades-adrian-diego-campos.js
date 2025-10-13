class AppAutoridadesAdrianDiegoCampos extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
                    <div class="listEquipoItem">
                        <img src="static/imagenes/equipo/socios/adrianDiegoCampos.jpg" alt="Adrián Diego<br>Campos" class="listEquipoImg">
                        <div class="listEquipoTitle">Adrián Diego<br>Campos</div>
                        <div class="listEquipoRedes">
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/icono-persona-equipo.png" alt="icono-persona" class="listEquipoRedesImg">
                                <p class="listEquipoRedesText">Revisor de cuentas</p>
                            </div>
                            <div class="listEquipoRedesRow">
                                <img src="static/imagenes/linkedin-equipo.png" alt="LinkedIn" class="listEquipoRedesImg">
                                <a href="https://www.linkedin.com/in/adri%C3%A1n-diego-campos-46b7361a/" target="_blank" class="listEquipoRedesText">LinkedIn</a>
                            </div>
                        </div>
                    </div>
        `
    }
}
customElements.define('app-autoridades-adrian-diego-campos',AppAutoridadesAdrianDiegoCampos)