class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
              <div class="HeaderContainer" data-animate>
                <div class="HeaderContainerImg">
                 <img onclick="location.href='index.html'" src="static/imagenes/10a_logo_adp.png" alt=" Header" class="HeaderImg">
                </div>
                <div class="HeaderContainerNav"> 
                  <button class="HeaderNavItem" style="color: #7b0033; font-size: 2rem;">Inicio</button>
                  <button img onclick="location.href='quienesSomos.html'"class="HeaderNavItem">Nuestro equipo</button>
                </div>
              </div>
        `
    import('../paginaEquipo/components/app-animar.js')
      .then(({ animar }) => animar(this.querySelectorAll('[data-animate]')))
      .catch(console.error);
    }
}
customElements.define('app-header', AppHeader);
