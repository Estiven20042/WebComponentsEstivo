// EXPORTAR la clase para importarla en main.js
export class EtiquetaElemento extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
        <link rel="stylesheet" href="./css/etiqueta-elemento.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
        
        <span class="etiqueta" id="etiqueta">
            <i id="icono"></i>
            <span class="fs-3 text-black" id="texto"></span>
        </span>
        `;
    }

    connectedCallback() {
        const texto = this.getAttribute('texto') || '';
        const color = this.getAttribute('color') || 'morado';
        const tamano = this.getAttribute('tamano') || '';
        const icono = this.getAttribute('icono') || '';
        
        const etiqueta = this.shadowRoot.getElementById('etiqueta');
        const iconoEl = this.shadowRoot.getElementById('icono');
        const textoEl = this.shadowRoot.getElementById('texto');
        
        textoEl.textContent = texto;
        etiqueta.classList.add(color);
        
        if (tamano) {
            etiqueta.classList.add(tamano);
        }
        
        if (icono) {
            iconoEl.className = `bi bi-${icono}`;
        } else {
            iconoEl.style.display = 'none';
        }
    }
}
