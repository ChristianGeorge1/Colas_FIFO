class Cola {
    constructor() {
        this._primero = null;
        this._ultimo = null;
    }

    get primero() {
        return this._primero;
    }
    get ultimo() {
        return this._ultimo;
    }
    set primero(primero) {
        this._primero = primero;
    }
    set ultimo(ultimo) {
        this._ultimo = ultimo;
    }

    add(nuevo) {
        if (this._primero) {
            this._ultimo.siguiente = nuevo;
            this._ultimo = nuevo;
        } else {
            this._primero = nuevo;
            this._ultimo = nuevo;
        }
    }

    search(nombre) {
        let actual = this._primero;
        while (actual && actual.nombre != nombre) {
            actual = actual.siguiente;
        }
        if (actual) {
            return actual;
        } else {
            return null;
        }
    }


    sacar() {
        if (this._primero) {
            let nodo = this._primero;
            this._primero = this._primero.siguiente;
            return nodo;
        } else {
            return null;
        }
    }

    ciclos() {
        let temp = 0;
        let actual = this._primero;

        while (actual) {
            temp += actual.ciclos;
            actual = actual.siguiente;
        }
        return temp;
    }
    tamaño() {
        let temp = 0;
        let actual = this._primero;
        while (actual) {
            temp++;
            actual = actual.siguiente;
        }

        return temp;
    }

}