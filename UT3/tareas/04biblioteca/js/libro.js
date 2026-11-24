class Libro {
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

    prestar() {
        if(this.disponible === true){
            return false;
        }

        this.disponible = false;
        return true;
    }

    devolver() {
        if(this.disponible === true){
            return false;
        }

        this.disponible = true;
        return true;
    }

    antiguedad() {
        const anioActual = new Date().getFullYear();
        return anioActual - this.anio;
    }

    resumen() {
        return `${this.titulo} — ${this.autor} (${this.anio})`;
    }
}