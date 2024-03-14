import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import axios from "axios";
import { api } from './API/axion';
export default function All({ auth }) {
    const [valor, setValor] = useState('');
    const [result, setResult] = useState(null);

    const pesquisar = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${valor}`);
            setResult(response.data.results);
        } catch (error) {
            console.error('Ocorreu um erro ao pesquisar:', error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Search</h2>}
        >
            <Head title="Search" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <input
                                type="text"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                className='w-5/6 rounded-lg'
                                placeholder="Digite sua consulta"
                            />
                            <button onClick={pesquisar} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Pesquisar</button>
                        </div>
                    </div>
                </div>
            </div>

            {result && (
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Renderize os resultados da pesquisa aqui */}
                            <ul>
                                {result.map((character) => (
                                    <li key={character.id}>{character.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    )
}
