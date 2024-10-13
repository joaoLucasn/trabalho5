const url = 'https://raw.githubusercontent.com/joaoLucasn/API/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    
    // Usando os dados da pesquisa
    const totalAlunos = dados.total_alunos; // Supondo que você tenha adicionado isso ao JSON
    const porcentagemConectada = (dados.celulares_por_marca.Apple + dados.celulares_por_marca.Samsung + dados.celulares_por_marca.Motorola + dados.celulares_por_marca.Xiaomi + dados.celulares_por_marca.Nokia + dados.celulares_por_marca.OnePlus) / totalAlunos * 100;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `  Esta pesquisa foi realizada em uma sala de aula com <span>${totalAlunos}</span> alunos 
    e tem como objetivo identificar quais marcas de celulares são mais utilizadas pelos estudantes. 
    Aproximadamente <span>${porcentagemConectada.toFixed(2)}%</span> dos alunos estão utilizando 
    seus celulares, e a pesquisa busca entender a distribuição das marcas entre os dispositivos utilizados.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();
