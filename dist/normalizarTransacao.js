export default function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: transacao.Data,
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor ()"],
        valor: 0,
        pagamento: transacao["Forma de Pagamento ()"],
        novo: Boolean(transacao["Cliente novo ()"]),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map