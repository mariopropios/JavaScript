// Representa un libro del catálogo de la biblioteca
export class Libro {
    
    /**
    - Crea un libro.
    @param {string} titulo - Título del libro.
    @param {string} autor - Autor del libro.
    @param {number} annio - Año de publicación.
    @param {number} paginas - Número de páginas.
    @param {string} genero - Género literario.
    @param {boolean} [disponible=true] - Si está disponible para préstamo.
   */
    constructor(titulo,autor,annio,paginas,genero,disponible = true)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.annio = annio;
        this.paginas = paginas;
        this.genero = genero;
        this.disponible = disponible;
    }

    // --- MÉTODOS DE LIBRO

    /**
    - Marca el libro como prestado.
    @returns {boolean} true si se pudo prestar; false si ya estaba prestado.
   */
    prestar() {
        if(this.disponible === false){
            return false;
        }

        this.disponible = false;
        return true;
    }

    /**
    - Marca el libro como disponible.
    @returns {boolean} true si se pudo devolver; false si ya estaba disponible.
   */
    devolver() {
        if(this.disponible === true){
            return false;
        }

        this.disponible = true;
        return true;
    }

    /**
    - Calcula los años desde la publicación usando Date.
    @returns {number} Años de antigüedad.
   */
    antiguedad() {
        const anioActual = new Date().getFullYear();
        return anioActual - this.annio;
    }

    /**
    - Devuelve un resumen textual del libro.
    @returns {string} Texto tipo «Niebla — Miguel de Unamuno (1914)».
   */
    resumen() {
        return `${this.titulo} — ${this.autor} (${this.annio})`;
    }
}