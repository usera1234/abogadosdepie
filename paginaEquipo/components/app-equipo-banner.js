class AppEquipoBanner extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`
            <div class="equipoBannerContainer">
                <img src="static/imagenes/adp-banner.png" alt="Equipo Banner" class="equipoBannerImg">
                    <div class="equipoBannerText">
                        <!-- <h1 class="equipoBannerText">Nuestro Equipo</h3> -->
                    </div>
            </div>
        `
    }
}

customElements.define('app-equipo-banner', AppEquipoBanner);