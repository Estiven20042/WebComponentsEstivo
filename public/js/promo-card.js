// EXPORTAR la clase para importarla en main.js
export class PromoCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/promo-card.css">
        
        <div class="promo-contenedor position-relative overflow-hidden">
            <span class="position-absolute top-0 start-0 m-3 badge bg-danger fs-5 pulse-animation">🔥 HOT</span>
            <div class="row align-items-center justify-content-center g-4">
                <div class="col-md-5 text-center">
                    <div class="position-relative d-inline-block">
                        <img class="promo-imagen rounded-3 shadow-lg" id="imagen" src="" alt="Promo" style="max-width: 100%; height: auto;">
                        <div class="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                            <span class="badge bg-success fs-6">FREE READ</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 text-center">
                    <span class="badge bg-warning text-dark mb-3 fs-2">POR TIEMPO LIMITADO</span>
                    <h2 class="promo-titulo mb-3 fs-1" id="titulo"></h2>
                    <p class="promo-descripcion mb-4 fs-3" id="descripcion"></p>
                    <a class="btn-promo btn btn-lg shadow" id="enlace" href="#" target="_blank">
                        ¡LEER AHORA! 🚀
                    </a>
                    <div class="mt-3 d-flex justify-content-center gap-2 flex-wrap" id="tags-container">
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        const promo = JSON.parse(localStorage.getItem('promo') || '{}');
        
        const titulo = promo.titulo || 'Promoción Especial';
        const descripcion = promo.descripcionCorta || 'No te lo pierdas';
        const enlace = promo.enlace || '#';
        const imagen = promo.imagen || './assets/img/placeholder.png';
        const tag1 = promo.tag1 || '';
        const tag2 = promo.tag2 || '';
        const tag3 = promo.tag3 || '';
        
        this.shadowRoot.getElementById('titulo').textContent = titulo;
        this.shadowRoot.getElementById('descripcion').textContent = descripcion;
        this.shadowRoot.getElementById('enlace').href = enlace;
        this.shadowRoot.getElementById('imagen').src = imagen;
        this.shadowRoot.getElementById('imagen').alt = titulo;
        
        const tagsContainer = this.shadowRoot.getElementById('tags-container');
        const colores = ['verde', 'amarillo', 'morado'];
        const tags = [tag1, tag2, tag3].filter(tag => tag); 
        
        tags.forEach((tag, index) => {
            const etiqueta = document.createElement('etiqueta-elemento');
            etiqueta.setAttribute('texto', tag);
            etiqueta.setAttribute('color', colores[index % colores.length]);
            etiqueta.setAttribute('tamano', 'grande');
            etiqueta.setAttribute('icono', 'star');
            tagsContainer.appendChild(etiqueta);
        });
    }
}
