// EXPORTAR la clase para importarla en main.js
export class PerfilArtista extends HTMLElement {
    constructor() {
        super();
        // Crear el Shadow DOM (encapsula estilos y HTML)
        const shadow = this.attachShadow({ mode: 'open' });

        // Insertar HTML y CSS al shadow
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/perfil-artista.css">
        
        <div class="perfil-contenedor">
            <div class="row align-items-center g-4">
                <div class="col-md-4 text-center">
                    <div class="avatar-wrapper position-relative d-inline-block">
                        <img class="avatar rounded-circle shadow-lg border border-3 border-primary" id="avatar" src="" alt="Avatar" style="width: 200px; height: 200px; object-fit: cover;">
                        <div class="position-absolute bottom-0 end-0 bg-success rounded-circle p-2 border border-2 border-dark" style="width: 40px; height: 40px;">
                            <span class="text-white fw-bold">✓</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="bg-dark bg-opacity-50 p-4 rounded-3 border border-2 border-primary border-opacity-50 shadow">
                        <h1 class="nombre mb-2 text-white fw-bold" id="nombre"></h1>
                        <p class="alias mb-3 text-primary fs-4" id="alias"></p>
                        <p class="edad mb-0 text-success lh-lg fs-4" id="edad"></p>
                        <p class="bio mb-3 text-light lh-lg fs-3" id="bio"></p>
                        <div class="d-flex gap-2 flex-wrap" id="habilidades-container">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        const perfil = JSON.parse(localStorage.getItem('perfil') || '{}');
        
        const nombre = perfil.nombre || 'Artista';
        const alias = perfil.alias || '@artista';
        const edad = perfil.edad || '21';
        const bio = perfil.bio || 'Artista digital';
        const avatar = perfil.avatar || './assets/img/perfil.jpg';
        const habilidades = perfil.habilidades || ['Ilustración', 'Diseño', 'Animación'];

        // Actualizar los elementos del shadow con los valores
        this.shadowRoot.getElementById('nombre').textContent = nombre;
        this.shadowRoot.getElementById('alias').textContent = alias;
        this.shadowRoot.getElementById('bio').textContent = bio;
        this.shadowRoot.getElementById('avatar').src = avatar;
        this.shadowRoot.getElementById('avatar').alt = nombre;
        this.shadowRoot.getElementById('edad').textContent = `${edad} años`;
        
        const habilidadesContainer = this.shadowRoot.getElementById('habilidades-container');
        const colores = ['morado', 'rosa', 'azul', 'verde', 'amarillo'];
        const iconos = ['palette-fill', 'brush-fill', 'pencil-fill', 'vector-pen', 'stars'];
        
        habilidades.forEach((habilidad, index) => {
            const etiqueta = document.createElement('etiqueta-elemento');
            etiqueta.setAttribute('texto', habilidad);
            etiqueta.setAttribute('color', colores[index % colores.length]);
            etiqueta.setAttribute('tamano', 'grande');
            etiqueta.setAttribute('icono', iconos[index % iconos.length]);
            habilidadesContainer.appendChild(etiqueta);
        });
    }
}
