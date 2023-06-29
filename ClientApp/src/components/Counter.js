async function getCepInfo(cep) {
    const response = await fetch(`/api/correios/cep/${cep}`);
    if (response.ok) {
        const data = await response.json();
        return data;
    }

    throw new Error('Erro ao obter informações de CEP.');
}

