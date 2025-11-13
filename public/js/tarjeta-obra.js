// EXPORTAR la clase para importarla en main.js
export class TarjetaObra extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/tarjeta-obra.css">
        
        <div class="card tarjeta" style="cursor: pointer;">
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
        
        <div id="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; justify-content: center; align-items: center;">
            <div style="position: relative; max-width: 90%; background: linear-gradient(135deg, #1a2332 0%, #0d1117 100%); padding: 25px; border-radius: 15px; max-height: 90vh; overflow: auto; border: 2px solid #4a6fa5; box-shadow: 0 10px 40px rgba(74, 111, 165, 0.4);">
                <button id="closeModal" style="position: absolute; top: 10px; right: 10px; background: #dc3545; color: white; border: none; border-radius: 50%; width: 35px; height: 35px; font-size: 20px; cursor: pointer; z-index: 10000; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">×</button>
                <img id="modalImage" src="" alt="" style="max-width: 100%; max-height: 70vh; display: block; margin: 0 auto; border-radius: 8px; box-shadow: 0 5px 20px rgba(0,0,0,0.5);">
                <div style="text-align: center; margin-top: 20px; padding: 10px;">
                    <h3 id="modalTitulo" style="color: #e8eaf6; display: inline-block; margin-right: 10px; font-family: 'Aclonica', sans-serif;"></h3>
                    <span id="favStar" style="display: inline-block; font-size: 45px; cursor: pointer; background: #4a6fa5; color: #fff; padding: 8px 15px; border-radius: 8px; box-shadow: 0 3px 10px rgba(74, 111, 165, 0.5); transition: all 0.3s ease;">☆</span>
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
        
        // Eventos del modal
        const modal = this.shadowRoot.getElementById('modal');
        const modalImage = this.shadowRoot.getElementById('modalImage');
        const modalTitulo = this.shadowRoot.getElementById('modalTitulo');
        const closeModal = this.shadowRoot.getElementById('closeModal');
        const favStar = this.shadowRoot.getElementById('favStar');
        const tarjeta = this.shadowRoot.querySelector('.tarjeta');
        
        // Abrir modal al hacer clic en la tarjeta
        tarjeta.addEventListener('click', () => {
            modalImage.src = imagen;
            modalImage.alt = titulo;
            modalTitulo.textContent = titulo;
            modal.style.display = 'flex';
            this.actualizarEstrella(favStar, imagen);
        });
        
        // Cerrar modal
        closeModal.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.style.display = 'none';
        });
        
        // Cerrar modal al hacer clic fuera de la imagen
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Toggle favorito
        favStar.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorito(imagen, favStar);
        });
    }
    
    actualizarEstrella(estrella, imagen) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
        if (favoritos.includes(imagen)) {
            estrella.textContent = '★';
            estrella.style.color = '#ffd700';
        } else {
            estrella.textContent = '☆';
            estrella.style.color = '#666';
        }
    }
    
    toggleFavorito(imagen, estrella) {
        let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
        if (favoritos.includes(imagen)) {
            favoritos = favoritos.filter(fav => fav !== imagen);
        } else {
            favoritos.push(imagen);
        }
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        this.actualizarEstrella(estrella, imagen);
    }
}
