class AppEquipoBanner extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`
            <div class="equipoBannerContainer">
                <img src="../static/imagenes/adp-banner.png" alt="Equipo Banner" class="equipoBannerImg">
            </div>
        `
    }
}

customElements.define('app-equipo-banner', AppEquipoBanner);