# 🎨 Mi Portafolio Artístico - PROYECTO P1 - Estiven Oña

Este es un sitio web donde muestro lo que he hecho como artista:, personajes y proyectos artísticos (valga la redundancia)

## ¿Qué hace este proyecto?

Este sitio web es como un portafolio virtual, dónde:
- Un componente de perfil muestra mi foto, nombre, alias, edad y una bio, además de cualidades que siento son clave.
- Se dan a conocer a los personajes principales de mi manga.
- Se Explora mi galería de ilustraciones terminadas.
- Se ven mis bocetos y trabajos en progreso.
- Promociono mis redes sociales
- Hay un pequeño card/sección de publicidad

Todo está construido con **Web Components**, para modularidad y mantenimiento ágil en caso de,

## ¿Cómo ejecutar el proyecto?

### Opción 1: Live Server (Recomendado)
1. Abre el proyecto en Visual Studio Code
2. Instala la extensión "Live Server" si no la tienes
3. Haz clic derecho en `index.html`
4. Seleccionar "Open with Live Server"
5. ¡Listo! El sitio se abrirá en tu navegador
- Tip: Después de instalar, abrir el index.html en el IDE y en la esquina derecha abajo aparecerá el botón live server.

### Opción 2: Abrir directamente (no recomendado)
1. Navega a la carpeta `public`
2. Haz doble clic en `index.html`
3. Se abrirá en el navegador por defecto, sin embargo por el API localstorage podría no cargar los datos y por tanto no mostrar información alguna.

**Nota:** Algunos navegadores pueden tener problemas con módulos de JavaScript al abrir directamente. Si hay errores, es mejor instalar y usar Live Server

## Componentes del Proyecto

Cada módulo tiene su chamba, en este caso, los describo brevemente a continuación:

### Componentes Principales

#### `perfil-artista`
Muestra mi información personal: nombre, foto, edad, biografía y mis habilidades como artista. Es como mi tarjeta de presentación.

#### `etiqueta-elemento` 
**¡El componente más reutilizable!** Es como una chapa o etiqueta bonita con colores y iconos. Se usa dentro de otros componentes:
- En `perfil-artista`: muestra habilidades (Ilustración, Manga, etc.)
- En `tarjeta-obra`: muestra las categorías de cada obra
- En `promo-card`: destaca características especiales

**Ejemplo de anidación (3 niveles):**
```
galeria-obras
  └── tarjeta-obra
       └── etiqueta-elemento
```

#### `galeria-obras`
Muestra todas mis ilustraciones en un bonito collage. Cada obra se muestra usando `tarjeta-obra`.

#### `tarjeta-obra`
Es la tarjeta individual de cada ilustración. Muestra la imagen, título y etiquetas de categoría. Usa `etiqueta-elemento` para mostrar los tags.

#### `cinta-personajes`
Un carrusel interactivo que muestra mis personajes originales. Al hacer clic en cada uno, ¡se reproduce su tema musical!

#### `promo-card`
Una tarjeta promocional grande que destaca mi proyecto principal (mi manga web). Usa `etiqueta-elemento` para mostrar características.

#### `galeria-sketches`
Similar a `galeria-obras` pero muestra bocetos y trabajos en proceso.

#### `proximos-proyectos`
Lista de proyectos futuros en los que estoy trabajando. 

#### `redes-sociales`
Enlaces a todas mis redes sociales con iconos de Bootstrap

### Módulos de Soporte

#### `data-loader.js`
Es el localstorage, tiene la función de una base de datos CS (Client Side) para persistencia de datos, se puede escalar obviamente usando una DB como POSTGRES, MYSQL, etc... para poder trabajar con JSONs.

#### `main.js`
Aquí solo se mandan a llamar los componentes, sigue este proceso:
1. Cargar los datos iniciales (Data-loader)
2. Registrar todos los Web Components (ES Modules)
3. Hacer que todo funcione junto (Define los componentes y funcionan al importarse como módulo en el index.)

### Archivos de Estilo

Cada componente tiene su propio archivo CSS:
- `perfil-artista.css` - Estilos del perfil
- `etiqueta-elemento.css` - Estilos de las etiquetas (con gradientes bonitos)
- `galeria-obras.css` - Estilos del collage de obras
- `tarjeta-obra.css` - Estilos de las tarjetas individuales
- Y más...

## Estructura de Carpetas

```
public/
├── index.html              (Página principal)
├── assets/
│   ├── img/               (Imágenes)
│   └── audio/             (Archivos de audio)
├── css/                   (Estilos de cada componente)
├── js/                    (Módulos JS)
│   ├── main.js           (Importa todo y define)
│   ├── data-loader.js    (LocalStorage)
│   ├── etiqueta-elemento.js 
│   ├── perfil-artista.js
│   ├── galeria-obras.js
│   ├── tarjeta-obra.js
│   └── ...
└── vendor/
    └── bootstrap/         (Framework de estilos e iconos)
```

## Características Requeridas

### Componentes Anidados
El proyecto demuestra cómo un componente puede usar otros componentes dentro de él:
- `galeria-obras` usa múltiples `tarjeta-obra`
- `tarjeta-obra` usa múltiples `etiqueta-elemento`
- `perfil-artista` usa múltiples `etiqueta-elemento`

### Temas Musicales
Cada personaje tiene su propio tema musical. Con un hover se pueden escuchar los temas

### Diseño Responsive
El sitio se adapta a diferentes tamaños de pantalla (celular, tablet, computadora) gracias a Bootstrap.

## Tecnologías Usadas

- **HTML5** - Estructura
- **CSS3** - Estilos y animaciones
- **JavaScript (ES6 Modules)** - Lógica e interactividad, Además ES6 usando funciones flecha, const y let para variables.
- **Web Components** - Componentes reutilizables
- **Bootstrap 5** - Framework de diseño
- **Bootstrap Icons** - Iconos bonitos
- **LocalStorage** - Almacenamiento en el navegador

## Notas para Developers

En caso de querer hacer modificaciones:

1. **Cambiar o agregar datos:** Editar o Crear Bloques en formato JSON `js/data-loader.js`
2. **Agregar o modificar estilos:** Editar/Crear los archivos CSS correspondientes
3. **Crear nuevo componente:** 
   - Crear `js/mi-componente.js`
   - Crear `css/mi-componente.css`
   - Impórtarlo y regístrarlo en `main.js`
---

Hecho con Claude y unas dos tazas de café, gracias.
- Estiven Oña
