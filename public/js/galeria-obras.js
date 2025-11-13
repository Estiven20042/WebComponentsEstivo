// EXPORTAR la clase para importarla en main.js
export class GaleriaObras extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/galeria-obras.css">
        
        <div class="mb-4 text-center">
            <h2 class="display-4 mb-2" style="font-family: 'Aclonica', sans-serif; color: #e8eaf6;">GALERÍA</h2>
            <p class="lead text-muted" style="font-family: 'Space Mono', monospace;">✨ Mis ilustraciones más recientes ✨</p>
        </div>
        <div class="collage" id="collage"></div>
        `;
    }

    connectedCallback() {
        this.mostrarObras();
    }

    mostrarObras() {
        const collage = this.shadowRoot.getElementById('collage');
        
        const obras = JSON.parse(localStorage.getItem('obras') || '[]');
        
        const htmlTarjetas = obras.map(obra => {
            const { titulo, imagen, tag1, tag2 } = obra || {};
            
            return `
                <div class="collage-item">
                    <tarjeta-obra 
                        titulo="${titulo}"
                        imagen="${imagen}"
                        tag1="${tag1 || ''}"
                        tag2="${tag2 || ''}">
                    </tarjeta-obra>
                </div>
            `;
        }).join('');
        
        collage.innerHTML = htmlTarjetas;
    }
}

