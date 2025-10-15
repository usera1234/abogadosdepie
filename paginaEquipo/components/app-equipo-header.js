class AppEquipoHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
              <div class="equipoHeaderContainer">
                <div class="equipoHeaderContainerImg">
                 <img onclick="location.href='index.html'" src="static/imagenes/10a_logo_adp.png" alt="Equipo Header" class="equipoHeaderImg">
                </div>
                <div class="equipoHeaderContainerNav">
                  <button onclick="location.href='index.html'"class="equipoHeaderNavItem">Inicio</button>
                  <button class="equipoHeaderNavItem" style="color: #7b0033; font-size: 2rem;">Nuestro Equipo</button>
                </div>
              </div>
        `
    }
}
customElements.define('app-equipo-header', AppEquipoHeader);
