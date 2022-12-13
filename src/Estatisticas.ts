export default class Estatisticas {
  private transacoes;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
  }
}