// MÓDULO CENTRAL DE DATOS - Pobla localStorage automáticamente
export class DataLoader {

    static getDatosIniciales() {
        return {
            perfil: {
            nombre: 'Estiven Oña',
            alias: '@Estivo',
            edad: '21',
            bio: 'Nose, dibujo desde los 6, dibujaba muchos Gokus, así que decidí crear el mío, así nació Funky. Por algun mótivo, mi vida es dibujar, me encanta dibujar, pero estudio ingeniería.',
            avatar: './assets/img/yo.jpg',
            habilidades: ['Ilustración Digital', 'Diseño de Personajes', 'Animación', 'Manga', 'Concept Art']
            },

            personajes: [
            {
                id: 'funky',
                nombre: 'Funky',
                imagen: './assets/img/Funky.png',
                audio: './assets/audio/funkytheme.mp3'
            },
            {
                id: 'bikury',
                nombre: 'Bikury',
                imagen: './assets/img/Bikury.png',
                audio: './assets/audio/bikurytheme.mp3'
            },
            {
                id: 'zaid-fred',
                nombre: 'Zaid y Frederick',
                imagen: './assets/img/ZaidFred.png',
                audio: './assets/audio/zaidfredtheme.mp3'
            },
            {
                id: 'dulceFlair',
                nombre: 'Dulce Flair',
                imagen: './assets/img/Dulce.png',
                audio: './assets/audio/dulceevietheme.mp3'
            }
            ],

            // Obras de la galería
            obras: [
            {
                id: 'goku-funky',
                titulo: 'Funky & Goku',
                imagen: './assets/img/Goku_Funky.jpg',
                tag1: 'Fan Art',
                tag2: 'Digital'
            },
            {
                id: 'ilustracion-n',
                titulo: 'Little Devils',
                imagen: './assets/img/Ilustracion_N.jpg',
                tag1: 'Original',
                tag2: 'Color'
            },
            {
                id: 'ale',
                titulo: 'Ale...',
                imagen: './assets/img/ALE.jpg',
                tag1: 'Retrato',
                tag2: 'Digital'
            },
            {
                id: 'zaid-starbucks',
                titulo: 'Zaid después de comprar Starbucks',
                imagen: './assets/img/Zaidselomomochos.jpg',
                tag1: 'Meme',
                tag2: 'Sketch'
            },
            {
                id: 'funky-ilust',
                titulo: 'Evil Funky',
                imagen: './assets/img/FunkyntIlust.jpg',
                tag1: 'Original',
                tag2: 'Digital'
            },
            {
                id: 'halloween',
                titulo: 'Halloween Costumes',
                imagen: './assets/img/Halloween.jpg',
                tag1: 'Fan Art',
                tag2: 'Especial'
            },
            {
                id: 'season2ilust',
                titulo: 'Ilustración Temporada 2',
                imagen: './assets/img/AKIRAREF.jpg',
                tag1: 'Original',
                tag2: 'Akira Toriyama Reference'
            },
            {
                id: 'nagantxfunky',
                titulo: 'Los que se pelean, se aman',
                imagen: './assets/img/NaggyxFunky.jpeg',
                tag1: 'OC x Canon',
                tag2: 'Relationship'
            }
            ],

            promo: {
            titulo: 'LEE EL MANGA AQUÍ',
            descripcionCorta: '¡FUNKY ABYSS RIFT MANGA YA ESTÁ AQUÍ!',
            enlace: 'https://drive.google.com/file/d/1bamyP9OZg19NZKQOrRz0M0XrXx7EvZKz/view?usp=sharing',
            imagen: './assets/img/MangaCapitulo1.png',
            tag1: 'Acción',
            tag2: 'Aventura',
            tag3: 'Manga'
            },

            redes: [
            {
                nombre: 'Facebook',
                url: 'https://www.facebook.com/estiven20042',
                icono: './vendor/bootstrap-icons-1.13.1/facebook.svg',
                color: 'linear-gradient(135deg, #003d8dff, #1e5aa8ff)'
            },
            {
                nombre: 'Instagram',
                url: 'https://www.instagram.com/estiven20042/',
                icono: './vendor/bootstrap-icons-1.13.1/instagram.svg',
                color: 'linear-gradient(135deg, #b11717ff, #e63946ff)'
            },
            {
                nombre: 'X',
                url: 'https://x.com/estiven20042',
                icono: './vendor/bootstrap-icons-1.13.1/twitter-x.svg',
                color: 'linear-gradient(135deg, #1DA1F2, #4db8f5)'
            },
            {
                nombre: 'TikTok',
                url: 'https://www.tiktok.com/@estiven20042',
                icono: './vendor/bootstrap-icons-1.13.1/tiktok.svg',
                color: 'linear-gradient(135deg, #181818ff, #404040ff)'
            }
            ],

            proyectos: [
            {
                nombre: 'Capítulo 2 del Manga',
                descripcion: 'Finalmente, algo de acción, Funky encuentra pistas después de buscar en varios lugares, también conoce a alguien más que será un aliado increíble.',
                progreso: 65
            },
            {
                nombre: 'Manager de Manga en Web App',
                descripcion: 'Un manager para gestionar el proyecto: personajes, sitios, concept arts y un dashboard para mi mismo.',
                progreso: 30
            },
            {
                nombre: '¡Stickers de mis personajes!',
                descripcion: 'Unos dibujines para stickers que usa mi mami, yesyesyes',
                progreso: 50
            },
            {
                nombre: 'Animatic Corto de Bikury y Funky',
                descripcion: 'Son chibis, pero es animar wacho, que calvario ☠',
                progreso: 15
            }
            ],

            sketches: [
            {
                id: 'wip-1',
                titulo: 'Bikury Sketch',
                imagen: './assets/img/sketches/bikury-sketch.jpg',
                tag1: 'WIP',
                tag2: 'Sketch tradicional'
            },
            {
                id: 'wip-2',
                titulo: 'Funky x Nagant Sketch',
                imagen: './assets/img/sketches/nagantxfunky.jpg',
                tag1: 'WIP',
                tag2: 'Boceto Digital'
            },
            {
                id: 'wip-3',
                titulo: 'Evie con la AEG-1321',
                imagen: './assets/img/sketches/evie-sketch-formal.jpg',
                tag1: 'Sketch',
                tag2: 'Dibujos en la Uni'
            },
            {
                id: 'wip-4',
                titulo: 'Dulce y Zaid',
                imagen: './assets/img/sketches/dulce-zaid.jpg',
                tag1: 'Doodle',
                tag2: 'Dibujos en la Uni'
            },
            {
                id: 'wip-5',
                titulo: 'Angry Bikury',
                imagen: './assets/img/sketches/BikuryAnim.gif',
                tag1: 'Animation WIP',
                tag2: 'Sketch Digital'
            },
            {
                id: 'wip-6',
                titulo: 'Claire y sus pesadillas...',
                imagen: './assets/img/sketches/viñet.jpg',
                tag1: 'WIP',
                tag2: 'Sketch Digital'
            }
            ]
        };
    }
    static inicializar() {
        const datos = this.getDatosIniciales();

        localStorage.setItem('perfil', JSON.stringify(datos.perfil));
        localStorage.setItem('personajes', JSON.stringify(datos.personajes));
        localStorage.setItem('obras', JSON.stringify(datos.obras));
        localStorage.setItem('promo', JSON.stringify(datos.promo));
        localStorage.setItem('redes', JSON.stringify(datos.redes));
        localStorage.setItem('proyectos', JSON.stringify(datos.proyectos));
        localStorage.setItem('sketches', JSON.stringify(datos.sketches));

        console.log('Datos cargados en localStorage');
    }

    static getPerfil() {
        return JSON.parse(localStorage.getItem('perfil') || '{}');
    }

    static getPersonajes() {
        return JSON.parse(localStorage.getItem('personajes') || '[]');
    }

    static getObras() {
        return JSON.parse(localStorage.getItem('obras') || '[]');
    }

    static getPromo() {
        return JSON.parse(localStorage.getItem('promo') || '{}');
    }

    static necesitaInicializar() {
        return !localStorage.getItem('personajes');
    }
}
