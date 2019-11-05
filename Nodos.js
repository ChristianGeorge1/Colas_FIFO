class Nodo {
    constructor(n) {
        this._nombre = n;
        this._ciclos = Math.trunc(Math.random() * 11 + 4);
        this._siguiente = null;
    }

    get nombre() {
        return this._nombre;
    }
    get ciclos() {
        return this._ciclos;
    }
    set ciclos(ciclos) {
        this._ciclos = ciclos;
    }
    set siguiente(next) {
        this._siguiente = next;
    }
}