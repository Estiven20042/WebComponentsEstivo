// EXPORTAR la clase para importarla en main.js
export class ProximosProyectos extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/proximos-proyectos.css">
        
        <div class="proyectos-contenedor">
            <h2 class="titulo-seccion text-center mb-4">PRÓXIMOS PROYECTOS</h2>
            <div class="row g-3" id="proyectosGrid"></div>
        </div>
        `;
    }

    connectedCallback() {
        const grid = this.shadowRoot.getElementById('proyectosGrid');
        
        // Leer proyectos desde localStorage
        const proyectos = JSON.parse(localStorage.getItem('proyectos') || '[]');
        
        proyectos.forEach(proyecto => {
            const { nombre, descripcion, progreso } = proyecto;
            
            const col = document.createElement('div');
            col.className = 'col-md-6';
            
            col.innerHTML = `
                <div class="proyecto-card p-3">
                    <h5 class="proyecto-nombre mb-2 fs-2 text-warning">${nombre}</h5>
                    <p class="proyecto-descripcion mb-3 fs-3 text-info">${descripcion}</p>
                    <div class="progress" style="height: 25px;">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                                role="progressbar" 
                                style="width: ${progreso}%;" 
                                aria-valuenow="${progreso}" 
                                aria-valuemin="0" 
                                aria-valuemax="100">
                                ${progreso}%
                        </div>
                    </div>
                </div>
            `;
            
            grid.appendChild(col);
        });
    }
}
