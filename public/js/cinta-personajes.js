// EXPORTAR la clase para importarla en main.js
export class CintaPersonajes extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/cinta-personajes.css">
        
        <div class="cinta-contenedor">
            <h2 class="titulo-cinta mb-2">CREW</h2>
            <p class="text-center text-muted my-2 fs-4" style="font-family: 'Space Mono', monospace;">🎵 Pasa el cursor para escuchar sus temas</p>
            <div class="row g-3 mt-3 justify-content-center" id="personajesGrid"></div>
        </div>
        `;

        this.audioActual = null;
    }

    connectedCallback() {
        const grid = this.shadowRoot.getElementById('personajesGrid');
        
        const personajes = JSON.parse(localStorage.getItem('personajes') || '[]');
        
        personajes.forEach(personaje => {
            const { nombre, imagen, audio } = personaje;

            const col = document.createElement('div');
            col.className = 'col-auto';
            
            const card = document.createElement('div');
            card.className = 'personaje-card card text-center';
            
            card.innerHTML = `
                <div class="position-relative">
                    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger mb-3">
                        LIVE AUDIO
                    </span>
                    <img class="card-img-top personaje-imagen" src="${imagen}" alt="${nombre}">
                </div>
                <div class="card-body p-3">
                    <p class="card-text personaje-nombre my-3 fs-3">${nombre}</p>
                    <small class="text-muted d-block mt-3 fs-4" style="font-family: 'Space Mono', monospace;">🎧 ¡Escucha aquí!</small>
                </div>
            `;
            
            card.addEventListener('mouseenter', () => {
                if (this.audioActual) {
                    this.audioActual.pause();
                    this.audioActual.currentTime = 0;
                }
                
                this.audioActual = new Audio(audio);
                
                this.audioActual.play().catch(error => {
                    console.log('Error al reproducir audio:', error);
                });
                
                card.classList.add('activo');
            });
            
            card.addEventListener('mouseleave', () => {
                if (this.audioActual) {
                    this.audioActual.pause();
                    this.audioActual.currentTime = 0;
                }
                
                card.classList.remove('activo');
            });
            
            col.appendChild(card);
            grid.appendChild(col);
        });
    }
}