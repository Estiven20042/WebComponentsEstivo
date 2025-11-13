// EXPORTAR la clase para importarla en main.js
export class TarjetaObra extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/tarjeta-obra.css">
        
        <div class="card tarjeta">
            <div class="position-relative">
                <span class="position-absolute top-0 end-0 m-2 badge bg-primary">NEW</span>
                <img class="img-thumbnail my-3 card-img-center imagen" id="imagen" src="" alt="">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title titulo mb-2" id="titulo"></h5>
                <div class="d-flex justify-content-center gap-2 flex-wrap mt-3" id="tags-container">
                </div>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        const titulo = this.getAttribute('titulo') || 'Sin título';
        const imagen = this.getAttribute('imagen') || './assets/img/placeholder.png';
        const tag1 = this.getAttribute('tag1') || '';
        const tag2 = this.getAttribute('tag2') || '';
        
        this.shadowRoot.getElementById('titulo').textContent = titulo;
        this.shadowRoot.getElementById('imagen').src = imagen;
        this.shadowRoot.getElementById('imagen').alt = titulo;
        
        const tagsContainer = this.shadowRoot.getElementById('tags-container');
        
        if (tag1) {
            const etiqueta1 = document.createElement('etiqueta-elemento');
            etiqueta1.setAttribute('texto', tag1);
            etiqueta1.setAttribute('color', 'rosa');
            etiqueta1.setAttribute('icono', 'tag-fill');
            tagsContainer.appendChild(etiqueta1);
        }
        
        if (tag2) {
            const etiqueta2 = document.createElement('etiqueta-elemento');
            etiqueta2.setAttribute('texto', tag2);
            etiqueta2.setAttribute('color', 'azul');
            etiqueta2.setAttribute('icono', 'tag-fill');
            tagsContainer.appendChild(etiqueta2);
        }
    }
}
