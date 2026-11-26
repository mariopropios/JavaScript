import {Libro} from "./libro.js";

// Encapsula el catálogo de libros y las operaciones de consulta

export class Biblioteca{

    // Crea una biblioteca vacía.
    constructor()
    {
        this.libros = [];
    }

    // --- MÉTODOS DE BIBLIOTECA

    /**
    - Añade un libro solo si es instancia de Libro.
    @param {Libro} libro Libro a añadir.
    @returns {boolean} true si se añadió; false si el tipo no era válido.
   */
    agregar(libro){
        if(!(libro instanceof Libro)){
            console.warn("Solo se admiten instancias de los libros");
            return false;
        }
        this.libros.push(libro);
        return true;
    }

    /**
    - Carga libros desde un texto (una línea por libro; campos separados por ;).
    - Formato: titulo;autor;annio;paginas;genero;si|no
    @param {string} texto Bloque de texto con varios libros.
    @returns {number} Cantidad de libros añadidos.
   */
    cargarDesdeTexto(texto){
        const lineas = texto.trim().split("\n");
        let cuantos = 0;

        for(const linea of lineas){

            const limpia = linea.trim();

            if(limpia == ""){
                continue;
            }

            const partes = limpia.split(";");
            if(partes.length < 6){
                continue;
            }

            const titulo = partes[0].trim();
            const autor  = partes[1].trim();
            const annio = Number(partes[2].trim());
            const paginas = Number(partes[3].trim())
            const genero = partes[4].trim();
            const disponible = partes[5].trim().toLowerCase() === "si";

            if(Number.isNaN(annio) || Number.isNaN(paginas)){
                continue;
            }

            this.agregar(new Libro(titulo, autor, annio, paginas, genero, disponible));
            cuantos++;
        }
        return cuantos;
    }

    /**
    - Busca libros cuyo título o autor contienen el texto (sin mayúsculas/minúsculas).
    @param {string} texto Texto a buscar.
    @returns {Libro[]} Libros que coinciden.
   */
    buscar(texto){
        const t = texto.toLowerCase();
        return this.libros.filter(function (libro) {
            return libro.titulo.toLowerCase().includes(t) ||
            libro.autor.toLowerCase().includes(t);
        });
    }

    /**
    - Filtra los libros de un género concreto.
    @param {string} genero Género buscado.
    @returns {Libro[]} Libros de ese género.
   */
    filtrarPorGenero(genero){
        return this.libros.filter(function (libro) {
            return libro.genero === genero;
        });
    }

    /**
    - Filtra por disponibilidad.
    @param {boolean} disponible true = disponibles | false = prestados.
    @returns {Libro[]} Libros filtrados.
   */
    filtrarPorDisponibilidad(disponible){
        return this.libros.filter(function(libro){
            return libro.disponible === disponible;
        });
    }

    /**
    - Ordena una copia del catálogo sin modificar el array original.
    @param {"titulo"|"autor"|"annio"|"paginas"} campo - Campo de ordenación.
    @param {boolean} [ascendente=true] - true = A→Z / menor→mayor.
    @returns {Libro[]} Nueva lista ordenada.
   */
    ordenarPor(campo, ascendente = true){
        const copia = this.libros.slice();

        copia.sort(function (a,b){
            const va = a[campo];
            const vb = b[campo];
            let r;

            if(typeof va === "string"){
                r = va.localeCompare(vb);
            }else{
                r = va - vb;
            }

            if(ascendente){
                return r;
            }

            return -r;
        });

        return copia;
    }

    /**
    - Obtiene los géneros únicos del catálogo.
    @returns {string[]} Array de géneros sin repetir, ordenados.
   */
    generos(){

        const set = new Set(this.libros.map(function (l) {
            return l.genero;
        }));

        return [...set].sort(function (a, b) {
            return a.localeCompare(b);
        });
    }

    /**
    - Calcula estadísticas del catálogo.
    @returns {{total:number, disponibles:number, prestados:number, mediaPaginas:number, masAntiguo:string, porGenero:Map<string, number>}}
   */
    estadisticas(){
        const total = this.libros.length;

        const disponibles = this.libros.filter(function (l) {
            return l.disponible;
        }).length;

        const prestados = total - disponibles;

        const sumaPaginas = this.libros.reduce(function (acum, l) {
            return acum + l.paginas;
        }, 0);

        const mediaPaginas = total === 0 ? 0 : Math.round(sumaPaginas / total);

        const masViejo = this.libros.reduce(function (viejo, actual) {
            if (actual.annio < viejo.annio) {
                return actual;
            }
            return viejo;
        });

        const porGenero = new Map();

        for (const libro of this.libros) {
            const n = porGenero.get(libro.genero) ?? 0;
            porGenero.set(libro.genero, n + 1);
        }

        return {
            total: total,
            disponibles: disponibles,
            prestados: prestados,
            mediaPaginas: mediaPaginas,
            masAntiguo: masViejo.titulo,
            porGenero: porGenero
        };
    }
}

// --- CATÁLOGO INICIAL
export const catalogo = new Biblioteca();

catalogo.agregar(new Libro("El Quijote", "Miguel de Cervantes", 1605, 1250, "novela"));
catalogo.agregar(new Libro("La casa de Bernarda Alba", "Federico García Lorca", 1945, 120, "teatro", false));
catalogo.agregar(new Libro("Niebla", "Miguel de Unamuno", 1914, 280, "novela"));
catalogo.agregar(new Libro("Bodas de sangre", "Federico García Lorca", 1933, 160, "teatro"));
catalogo.agregar(new Libro("Campos de Castilla", "Antonio Machado", 1912, 210, "poesía"));
catalogo.agregar(new Libro("La Regenta", "Leopoldo Alas Clarín", 1884, 980, "novela", false));
catalogo.agregar(new Libro("Romancero gitano", "Federico García Lorca", 1928, 150, "poesía"));
catalogo.agregar(new Libro("Ensayo sobre la ceguera", "José Saramago", 1995, 352, "ensayo"));

catalogo.cargarDesdeTexto(`
Luces de bohemia;Ramón del Valle-Inclán;1924;160;teatro;si
Platero y yo;Juan Ramón Jiménez;1917;180;poesía;si
Cien años de soledad;Gabriel García Márquez;1967;471;novela;no
El laberinto de la soledad;Octavio Paz;1950;250;ensayo;si
`);