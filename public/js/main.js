// Importar el DataLoader primero
import { DataLoader } from './data-loader.js';

// Importar componentes
import { PerfilArtista } from './perfil-artista.js';
import { TarjetaObra } from './tarjeta-obra.js';
import { GaleriaObras } from './galeria-obras.js';
import { CintaPersonajes } from './cinta-personajes.js';
import { PromoCard } from './promo-card.js';
import { RedesSociales } from './redes-sociales.js';
import { ProximosProyectos } from './proximos-proyectos.js';
import { GaleriaSketches } from './galeria-sketches.js';
import { EtiquetaElemento } from './etiqueta-elemento.js';

const MODO_DESARROLLO = true;

if (MODO_DESARROLLO || DataLoader.necesitaInicializar()) {
    DataLoader.inicializar();
    console.log('Datos cargados desde data-loader.js');
} else {
    console.log('Usando datos existentes en localStorage');
}

customElements.define('perfil-artista', PerfilArtista);
customElements.define('etiqueta-elemento', EtiquetaElemento);
customElements.define('tarjeta-obra', TarjetaObra);
customElements.define('galeria-obras', GaleriaObras);
customElements.define('cinta-personajes', CintaPersonajes);
customElements.define('promo-card', PromoCard);
customElements.define('redes-sociales', RedesSociales);
customElements.define('proximos-proyectos', ProximosProyectos);
customElements.define('galeria-sketches', GaleriaSketches);
