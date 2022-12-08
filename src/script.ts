import fetchData from "./fetchData.js";

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus = "Paga" 
| "Recusada pela operadora de cartão" 
| "Aguaradndo pagamento" 
| "Estornada";

interface TransacaoAPI{
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ['Valor ()']: string;
  ['Forma de Pagamento ()']: TransacaoPagamento;
  ['Cliente novo ()']: number;
}

async function handleData() {
  const data =  await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json");

  if(data){
    data.forEach(item => {
      console.log(item.Email)
    });
  }
}

handleData();