class contaBancaria {
    contructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo= valor;
    } 

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação Negada. Saldo Insuficiente."
        }
        this._saldo = this._saldo - valor;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super (agencia, numero);
        this.tipo = "Conta Corrente";
        this._cartaoCredito = cartaoCredito;
    }
    
    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor (agencia, numero) {
        super (agencia, numero);
        this.tipo = "Conta Poupança";
    }
}

class contaUniversitaria extends contaBancaria {
    constructor (agencia, numero) {
        super (agencia, numero);
        this.tipo = "Conta Universitária";
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação Negada. Saque máximo de 500 reais."
        }
        this._saldo = this._saldo - valor;
    }
}