class AppFooter extends HTMLElement {
    constructor(){
        super();

        this.innerHTML = `
            <div class="hor-bar" style="height: 2px; width: 100%"></div>                                         <!--Linea horizontal divisora-->

            <div id="footer" class="footer-container">                                                              <!--Pie de pagina-->
                <div class="container-row" style="gap:12%; align-items: center;">
                    <div class="container-row">                                                                      <!--Logo pie de pagina-->
                    <img class="logo" src="static/imagenes/10a_logo_adp.png" alt="logo abogados de pie" style="padding-left:30px;height:100px; width: 300px"> <!--Logo pie de pagina-->
                    </div>
                    <div class="container-row" style="gap:20rem;">                                                  <!--Botones redes-->
                    <div class="container-row" style="gap:2rem;">
                        <div id="twitter" class="container-row">                                                    <!--Twitter-->
                        <a href="https://x.com/AbogadosDePie?t=Abz6bWPfU0G38n1BWFskcQ&s=08" target="_blank">
                            <button class="btn" style="width:100px; height:100px; background-color: white;">
                            <img class="logo" src="static/imagenes/twt.png" style="height:30px; width:40px;"> 
                            </button>
                        </a>
                        </div>
                        <div id="Facebook" class="container-row">                                                   <!--Facebook-->
                        <a href="https://www.facebook.com/people/Abogados-de-Pie/100080766828964/?mibextid=ZbWKwL" target="_blank">
                            <button class="btn" style="width:100px; height:100px; background-color: white;">
                            <img class="logo" src="static/imagenes/fcb.png" style="height: 50px; width: 50px;"> 
                            </button>
                        </a>
                        </div>
                        <div id="instagram" class="container-row">                                                  <!--Instagram-->
                        <a href="https://www.instagram.com/abogadosdepie.ok/" target="_blank">
                            <button  class="btn" style="width:100px; height:100px; background-color: white;">
                            <img class="logo" src="static/imagenes/ig.png" style="height: 50px; width: 50px;"> 
                            </button>
                        </a>
                        </div>
                        <div id="mail-contacto" class="text" style="height:100px; flex-direction: row; gap:1rem;">  <!--Gmail-->
                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXDztFvvZqzBLJlczDJGGbCkGmLSnkRmZrFNZWtcsRPNnbWsPVdzVnFJDPGKmMDWFXxnK" target="_blank">
                            <button class="btn" style="height: 100px; width: 100px; background-color: rgba(245, 222, 179, 0);">
                                <img src="static/imagenes/logo_gmail.png" alt="Gmail ADP" style="height: 50px; width: 50px;">
                            </button>
                            </a>
                        </div>
                    </div>
                    </div>
                <div class="footer-section" style="justi"> <!--Direccion-->
                    <p style="font-size: 20px;">Tucumán 326 Piso 3 Oficina 15, Ciudad de Buenos Aires, Argentina</p>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('app-footer', AppFooter);