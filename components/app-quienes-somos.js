class AppQuienesSomos extends HTMLElement {
    constructor(){
        super()

            this.innerHTML = `
                <div id="quienes-somos-direccion" class="container" style="gap: 10rem;" data-animate>                            <!--Tarjeta Quienes somos-->
                    <div class="tarjeta">
                        <div class="text" style="text-align:center; height: 700px; width: 900px;">
                            <div class="container" style="flex-direction: column; border-radius: 50px;">
                                <h2>Quienes somos</h2>
                                <p>
                                Somos un grupo de abogados independientes, provenientes de diversas ramas y trayectorias dentro del Derecho, unidos por una mirada humanista y la convicción de que la Justicia y las instituciones republicanas son pilares fundamentales para la vida democrática. Nos motiva la preocupación por el deterioro del Estado de Derecho en nuestro país y asumimos la responsabilidad de actuar frente a esta realidad. No representamos intereses sectoriales ni partidarios: somos profesionales comprometidos con la defensa de la Constitución, la transparencia institucional y el respeto por los derechos y garantías de todos los ciudadanos.
                                </p>
                            </div>
                            <img src="static/imagenes/adp_intgr_1.png" alt="foto adp" class="logo" style="height: 500;">  <!--Imagen fondo quienes somos-->
                        </div>
                    </div>
                </div>
            `
        import('../paginaEquipo/components/app-animar.js')
           .then(({ animar }) => animar(this.querySelectorAll('[data-animate]')))
           .catch(console.error);
    }
}
customElements.define('app-quienes-somos', AppQuienesSomos);