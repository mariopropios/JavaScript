import {Libro} from "./libro.js";

class Biblioteca{
    constructor()
    {
        this.libros = [];
    }

    // --- MÉTODOS DE BIBLIOTECA

    agregar(libro){
        if(!(libro instanceof Libro)){
            console.warn("Solo se admiten instancias de los libros");
            return false;
        }
        this.libros.push(libro);
        return true;
    }

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

            if(Number.isNaN(anio) || Number.isNaN(paginas)){
                continue;
            }

            this.agregar(new Libro(titulo, autor, annio, paginas, genero, disponible));
            cuantos++;
        }
        return cuantos;
    }

    buscar(texto){
        const t = texto.toLowerCase();
        return this.libros.filter(function (libro) {
            return libro.titulo.toLowerCase().includes(t) ||
            libro.autor.toLowerCase().includes(t);
        });
    }

    filtrarPorGenero(genero){
        return this.libros.filter(function (libro) {
            return libro.disponible === disponible;
        });
    }
}