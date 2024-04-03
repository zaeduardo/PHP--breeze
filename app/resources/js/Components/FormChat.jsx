'import React, { useState } from 'react';

const Formulario = () => {
    const [dadosFormulario, setDadosFormulario] = useState({
        campo1: '',
        campo2: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosFormulario({
            ...dadosFormulario,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/salvar-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormulario)
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
                // Faça algo após enviar os dados com sucesso, como redirecionar ou exibir uma mensagem de sucesso
            } else {
                console.error('Erro ao enviar os dados.');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="campo1">Campo 1:</label>
                <input
                    type="text"
                    id="campo1"
                    name="campo1"
                    value={dadosFormulario.campo1}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="campo2">Campo 2:</label>
                <input
                    type="text"
                    id="campo2"
                    name="campo2"
                    value={dadosFormulario.campo2}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
'