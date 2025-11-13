// EXPORTAR la clase para importarla en main.js
export class GaleriaSketches extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/galeria-sketches.css">
        
        <div class="mb-4 text-center">
            <h2 class="display-4 mb-2" style="font-family: 'Aclonica', sans-serif; color: #e8eaf6;">SKETCHES & WIP</h2>
            <p class="lead text-muted" style="font-family: 'Space Mono', monospace;">✏️ Proceso creativo y bocetos ✏️</p>
        </div>
        <div class="collage" id="collage"></div>
        `;
    }

    connectedCallback() {
        this.mostrarSketches();
    }

    mostrarSketches() {
        const collage = this.shadowRoot.getElementById('collage');
        
        const sketches = JSON.parse(localStorage.getItem('sketches') || '[]');
        
        const htmlTarjetas = sketches.map(sketch => {
            const { titulo, imagen, tag1, tag2 } = sketch;
            
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
