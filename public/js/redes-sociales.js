// EXPORTAR la clase para importarla en main.js
export class RedesSociales extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/redes-sociales.css">
        
        <div class="redes-contenedor">
            <div class="row align-items-center">
                <div class="col-md-6 text-center">
                    <div class="seguime-box bg-dark bg-opacity-50 p-4 rounded-3 border border-2 border-primary border-opacity-50 shadow">
                        <h2 class="titulo-seccion mb-0">MIS REDES SOCIALES</h2>
                        <p class="subtitulo-seccion text-primary mt-2 mb-0">Mantente al tanto de todas las novedades</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row g-3 justify-content-center" id="redesGrid"></div>
                </div>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        const grid = this.shadowRoot.getElementById('redesGrid');
        
        const redes = JSON.parse(localStorage.getItem('redes') || '[]');
        
        redes.forEach(red => {
            const { nombre, url, icono, color } = red;
            
            const col = document.createElement('div');
            col.className = 'col-auto';
            
            col.innerHTML = `
                <a href="${url}" target="_blank" class="red-link text-decoration-none">
                    <div class="red-card-wrapper p-1 rounded-3" style="background: ${color};">
                        <div class="red-card text-center p-3 bg-dark rounded-3 shadow h-100">
                            <img src="${icono}" alt="${nombre} Icon" class="red-icon mb-2" style="filter: invert(1); width: 40px; height: 40px;">
                            <p class="nombre-red mb-0 text-light">${nombre}</p>
                        </div>
                    </div>
                </a>
            `;
            
            grid.appendChild(col);
        });
    }
}
