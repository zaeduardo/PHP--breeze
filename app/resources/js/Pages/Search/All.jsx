import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import { apiC } from './API/axion';


export default function All({ auth }) {
    const [input, setInput] = useState('')
    const [cep, setCep ] = useState({})

    async function pesquisar() {
    await apiC.get(`${input}/json`)
    .then((response)=> { 
            console.log("TESTE",apiC);
            setCep(response.data)
        }).catch((err)=> { 
            console.log(err);
        }).finally(() => {
            setInput('')
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pesquisar</h2>}
        >
            <Head title="Search" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className='w-5/6 rounded-lg'
                                placeholder="Digite sua consulta"
                            />
                            <button onClick={pesquisar} className="p-2 bg-blue-600 rounded">Pesquisar</button>
                        </div>
                    </div>
                </div>
            </div>

            {cep && Object.keys(cep).length > 0 && (
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Renderize os resultados da pesquisa aqui */}
                            <ul>
                                <li>CEP: {cep.logradouro}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
