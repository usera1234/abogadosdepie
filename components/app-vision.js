class AppVision extends HTMLElement {
    constructor(){
        super()

            this.innerHTML =`
                <div id="vision-direccion" class="container" style="color: black">                                <!--Tarjeta Vision-->
                    <div class="text" style="text-align:center; height: 300px">
                        <h2>Visión</h1>
                        <p>Participar activamente en todos los espacios donde se define, aplica y controla el funcionamiento de la justicia, desde el ámbito legislativo hasta el ejecutivo y el judicial, tanto a nivel local como nacional.
                        Nuestros integrantes ocupan cargos en comisiones, el tribunal de disciplina y el Consejo Directivo del Colegio Público de Abogados de la Capital Federal, en el Consejo de la Magistratura de la Ciudad y en distintos espacios académicos y del Poder Ejecutivo local y Nacional, aportando nuestra mirada profesional y ética.
                        Impulsar propuestas, analizamos políticas públicas, acompañamos causas relevantes para la sociedad, generamos espacios de formación, debates y acciones de visibilización en redes y medios de comunicación.</p>
                    </div>
                </div>
            `
    }
}
customElements.define('app-vision', AppVision);