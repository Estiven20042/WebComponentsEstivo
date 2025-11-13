# 🎨 Portafolio de Artista con Web Components

Proyecto de portafolio personal usando **Web Components** puros en Vanilla JavaScript.

## Especificaciones Implementadas

- **Custom Elements** - Componentes personalizados HTML
- **Shadow DOM** - Encapsulamiento de estilos y estructura
- **ES Modules** - Sistema de módulos nativo (import/export)
- **HTML Templates** - Template literals en el constructor

---

## 📁 Estructura del Proyecto

```
public/
├── index.html
├── css/
│   ├── perfil-artista.css
│   ├── cinta-personajes.css
│   ├── tarjeta-obra.css
│   ├── galeria-obras.css
│   └── visor-imagen.css
├── js/
│   ├── main.js (importa y define componentes)
│   ├── perfil-artista.js
│   ├── cinta-personajes.js
│   ├── tarjeta-obra.js
│   ├── galeria-obras.js
│   └── visor-imagen.js
├── assets/
│   ├── img/
│   │   ├── perfil.jpg
│   │   ├── personaje-1.jpg, personaje-2.jpg, etc.
│   │   ├── manga-1.jpg, manga-2.jpg
│   │   ├── ilustracion-1.jpg, ilustracion-2.jpg
│   │   └── sketch-1.jpg, sketch-2.jpg
│   └── audio/
│       ├── tema-kaito.mp3
│       ├── tema-sakura.mp3
│       └── tema-ryuu.mp3
└── vendor/bootstrap/
```

---

## 🧩 Componentes

### 1. `<perfil-artista>`
Muestra el perfil del artista con foto, nombre, bio y estadísticas.

**Atributos observados:**
- `nombre` - Nombre del artista
- `alias` - Usuario (@Estivo)
- `edad` - Edad
- `bio` - Biografía corta
- `avatar` - Ruta de la imagen

**Uso:**
```html
<perfil-artista 
  nombre="Estiven Oña"
  alias="@Estivo"
  edad="21"
  bio="Artista de manga"
  avatar="./assets/img/perfil.jpg">
</perfil-artista>
```

---

### 2. `<cinta-personajes>` 🎵
Cinta horizontal con personajes del manga. **Al pasar el mouse reproduce música**.

**Características:**
- Reproduce audio al hacer hover
- Pausa el audio anterior automáticamente
- Scroll horizontal con personajes
- Efecto visual cuando está activo
- Lee personajes desde elementos `<personaje-item>` con atributos

**Uso:**
```html
<cinta-personajes>
  <personaje-item 
    nombre="Kaito" 
    imagen="./assets/img/personaje-1.jpg"
    audio="./assets/audio/tema-kaito.mp3">
  </personaje-item>
  
  <personaje-item 
    nombre="Sakura" 
    imagen="./assets/img/personaje-2.jpg"
    audio="./assets/audio/tema-sakura.mp3">
  </personaje-item>
</cinta-personajes>
```

---

### 3. `<tarjeta-obra>`
Tarjeta individual de una ilustración.

**Atributos observados:**
- `obra-id` - ID de la obra
- `titulo` - Título
- `imagen` - Ruta de la imagen
- `categoria` - manga | ilustracion | sketch

**Eventos emitidos:**
- `obraSeleccionada` - Al hacer click

**Uso:**
```html
<tarjeta-obra
  obra-id="1"
  titulo="Protagonista"
  imagen="./assets/img/manga-1.jpg"
  categoria="manga">
</tarjeta-obra>
```

---

### 4. `<galeria-obras>` ⭐
Contenedor que **genera `<tarjeta-obra>` dinámicamente** en formato **collage** (tipo Pinterest/Masonry).

**Características:**
- Layout de columnas que se adapta al tamaño de cada imagen
- Sin filtros, muestra todas las obras
- Diseño asimétrico y dinámico


**Características:**
- Crea componentes `<tarjeta-obra>` con `document.createElement()`
- Filtra por categoría
- Grid responsive

**Datos internos:**
```javascript
this.obras = [
  {
    id: 1,
    titulo: "Protagonista del Manga",
    imagen: "./assets/img/manga-1.jpg",
    categoria: "manga"
  },
  // más obras...
**Uso:**
```html
<galeria-obras></galeria-obras>
```

---

### 5. `<visor-imagen>`
Modal para ver imágenes ampliadas.

**Eventos escuchados:**
- `abrirVisor` - Abre el modal con la imagen

**Uso:**
```html
<visor-imagen></visor-imagen>
```

---

## 🔄 Flujo de Comunicación

```
<perfil-artista>              (Estático con atributos)

<cinta-personajes>            (Reproduce audio al hover)
      ├─ <personaje-item>     (Atributos: nombre, imagen, audio)
      ├─ <personaje-item>
      └─ <personaje-item>

<galeria-obras>               (Muestra todas las obras en collage)
      ├─ <tarjeta-obra>       (Generada dinámicamente)
      ├─ <tarjeta-obra>
      └─ <tarjeta-obra>
            └─ Emite: "obraSeleccionada"
                          ↓
<visor-imagen>                (Abre modal)
```

---

## 📝 Funciones JavaScript Explicadas

### `forEach()`
Recorre cada elemento de un array:
```javascript
array.forEach(elemento => {
  // hacer algo con cada elemento
});
```

### `querySelectorAll()`
Busca todos los elementos que coincidan con un selector:
```javascript
const elementos = this.querySelectorAll('personaje-item');
// Devuelve un NodeList con todos los <personaje-item>
```

### `getAttribute()`
Obtiene el valor de un atributo HTML:
```javascript
const nombre = elemento.getAttribute('nombre');
```

### `addEventListener()`
Escucha eventos en un elemento:
```javascript
elemento.addEventListener('click', () => {
  // código al hacer click
});
```

### `dispatchEvent()` y `CustomEvent()`
Emite eventos personalizados:
```javascript
this.dispatchEvent(new CustomEvent('miEvento', {
  detail: { datos: 'valor' },
  bubbles: true,
  composed: true
}));
```

### `classList.add()` / `classList.remove()`
Agrega o quita clases CSS:
```javascript
elemento.classList.add('activo');
elemento.classList.remove('activo');
```

### `new Audio()`
Crea un objeto de audio:
```javascript
const audio = new Audio('./ruta/audio.mp3');
audio.play();  // Reproduce
audio.pause(); // Pausa
audio.currentTime = 0; // Reinicia al inicio
```

---

## 🚀 Cómo Usar

1. **Agregar imágenes** en `assets/img/`:
   - `perfil.jpg`
   - `personaje-1.jpg`, `personaje-2.jpg`, `personaje-3.jpg`
   - `manga-1.jpg`, `manga-2.jpg`
   - `ilustracion-1.jpg`, `ilustracion-2.jpg`
   - `sketch-1.jpg`, `sketch-2.jpg`

2. **Agregar audios** en `assets/audio/`:
   - `tema-kaito.mp3`
   - `tema-sakura.mp3`
   - `tema-ryuu.mp3`

3. **Abrir** `index.html` en el navegador

---

## 🎯 Características Clave

- ✅ **Export/Import** - Clases exportadas e importadas en main.js
- ✅ **CSS externo** - Cada componente con su CSS separado
- ✅ **Shadow DOM** - Encapsulamiento total
- ✅ **Audio interactivo** - Música al pasar el mouse en personajes
- ✅ **Layout Collage** - Galería tipo Pinterest/Masonry
- ✅ **Atributos dinámicos** - Personajes definidos con atributos en HTML
- ✅ **Componentes anidados** - `<galeria-obras>` genera `<tarjeta-obra>`
- ✅ **Custom Events** - Comunicación entre componentes
- ✅ **Código comentado** - Funciones JS explicadas

---

## 🎨 Estilo

- **Tema oscuro** - Tonos azul oscuro (#0a0e27, #161b22, #4a6fa5)
- **Minimalista** - Diseño limpio y enfocado
- **Responsive** - Adaptable a móvil, tablet y escritorio

---

Hecho con ❤️ usando Web Components puros
