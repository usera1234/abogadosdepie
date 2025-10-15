class AppObjetivosDireccion extends HTMLElement {
    constructor(){
        super()

            this.innerHTML =`
                <div id="objetivos-direccion" class="container" style="color: black; gap: 10rem;">                <!--Tarjeta Objetivos-->
                    <div class="text" style="text-align: center;">
                        <h2>Objetivos</h2>
                        <p>
                        Queremos fortalecer la Justicia, las Instituciones Republicanas y el Estado de Derecho como garantes de una sociedad más justa, libre, solidaria y democrática.
                        Buscamos consolidar la independencia del Poder Judicial, jerarquizar la tarea de los abogados y promover una ciudadanía informada, capaz de participar de los asuntos públicos. Aspiramos a ser un puente entre la comunidad jurídica y la sociedad, facilitando el acceso a la justicia y defendiendo los valores que sostienen nuestra democracia.
                        </p>
                    </div>
                </div>
            `
    }
}
customElements.define('app-objetivos-direccion', AppObjetivosDireccion);