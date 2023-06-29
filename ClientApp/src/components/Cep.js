import React, { useState } from 'react';
import axios from 'axios';

function Cep() {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(null);

    const handleCepChange = (event) => {
        setCep(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setAddress(response.data);
            setError(null);
        } catch (error) {
            setAddress(null);
            setError('Erro ao obter informações de CEP.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2 style={styles.title}>Consulta de CEP</h2>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        value={cep}
                        onChange={handleCepChange}
                        style={styles.input}
                        placeholder="Digite o CEP"
                    />
                    <button style={styles.button} onClick={handleSearch}>Pesquisar</button>
                </div>

                {address && (
                    <div>
                        <h3 style={styles.subtitle}>Endereco:</h3>
                        <p>CEP: {address.cep}</p>
                        <p>Logradouro: {address.logradouro}</p>
                        <p>Bairro: {address.bairro}</p>
                        <p>Cidade: {address.localidade}</p>
                        <p>Estado: {address.uf}</p>
                    </div>
                )}

                {error && <p style={styles.error}>{error}</p>}
            </div>
        </div>
    );
}

export default Cep;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
    },
    box: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '20px',
        width: '400px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    input: {
        marginRight: '10px',
        padding: '5px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer',
    },
    subtitle: {
        fontSize: '18px',
        marginTop: '20px',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
};
