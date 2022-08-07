
public abstract class Conta implements iConta {
	
	private static final int AGENCIA_UNICA = 1;
	private static int SEQUENCIAL = 1;
	
	protected int agencia;
	protected int numero;
	protected double saldo;
	
	public Conta() {
		this.agencia = Conta.AGENCIA_UNICA;
		this.numero = SEQUENCIAL++;
	}
	
	
	@Override
	public void sacar(double valor) {
		this.saldo -= valor;
	}

	@Override
	public void depositar(double valor) {
		this.saldo += valor;
	}

	@Override
	public void transferir(double valor, Conta contaDestino) {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

	
	public int getAgencia() {
		return agencia;
	}

	public int getNumero() {
		return numero;
	}

	public double getSaldo() {
		return saldo;
	}
	
	protected void infosComuns() {
		System.out.println("Ag: " + this.agencia);
		System.out.println("Num: " + this.numero);
		System.out.println("Saldo: " + this.saldo);
	}
	
	
}
