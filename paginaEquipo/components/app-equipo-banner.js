class AppEquipoBanner extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`
            <div class="equipoBannerContainer" data-animate>
                <img src="static/imagenes/adp_intgr_1.png" alt="Equipo Banner" class="equipoBannerImg">
                    <div class="equipoBannerText">
                        <!-- <h1 class="equipoBannerText">Nuestro Equipo</h3> -->
                    </div>
            </div>
        `
        import('./app-animar.js')
         .then(({ animar }) => animar(this.querySelectorAll('[data-animate]')))
         .catch(console.error);
    }
}

customElements.define('app-equipo-banner', AppEquipoBanner);