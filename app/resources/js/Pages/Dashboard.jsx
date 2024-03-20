import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function TodoList() {
  const [tarefa, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const AddTarefa = () => {
    if (inputValue.trim() !== '') {
      setTarefa([...tarefa, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const novaTarefa = [...tarefa];
    novaTarefa.splice(index, 1);
    setTarefa(novaTarefa);
  };

  return (
    <div>
      <h2 className="font-semibold text-xl text-gray-800 leading-tight my-3">Adicionar Task</h2>

      
     <div className="p-2 mb-10 flex justify-between ">
      <input
        type="text"
        value={inputValue}
        className='w-5/6 rounded-lg'
        onChange={handleInputChange}
        placeholder="Adicionar Task"
      />
      <button className='text-white p-2 bg-blue-600 rounded' onClick={AddTarefa}> Enviar</button>
      </div>

      <ul>
        {tarefa.map((task, index) => (
          <li className='bg-stone-100 flex items-center my-2 rounded-lg pl-10 justify-between hover:shadow-md' key={index}>
            {task}
            <button className='mx-8 my-5 bg-red-600 p-2  rounded' onClick={() => handleDeleteTask(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
                                                        
export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Task</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
          
              <TodoList />
            </div>
          </div> 
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
