import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Map from '@/Components/MapCompnent';
import { Head } from '@inertiajs/react';

function TodoList() {
  const [tarefa, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };

  const InputChange2 = (e) => {
    setInputValue2(e.target.value);
  }

  const InputChange3 = (e) => {
    setInputValue3(e.target.value);
  }

  const AddTarefa = () => {
    if (inputValue.trim() !== '' && inputValue2.trim() !== '' && inputValue3.trim() !== '') {
      setTarefa([...tarefa, { input: inputValue, input2: inputValue2, input3: inputValue3 }]);
      setInputValue(''); setInputValue2(''); setInputValue3('');
    }
  };

  const handleDeleteTask = (index) => {
    const novaTarefa = [...tarefa];
    novaTarefa.splice(index, 1);
    setTarefa(novaTarefa);
  };

  return (
    <div >
      <h2 className="font-semibold text-xl text-gray-800 leading-tight my-3 ">Adicionar Task</h2>

      {/* Dentro dessa div adicionar os campos */}
      <div className=" p-2 mb-10 flex flex-col items-center space-y-2">
        <input
          type="text"
          value={inputValue}
          className='w-3/6 rounded-lg'
          onChange={InputChange}
          placeholder="Adicionar Task"
        />
        <input
          type="text"
          value={inputValue2}
          className='w-3/6 rounded-lg'
          placeholder='teste'
          onChange={InputChange2}
        />
        <input
          type="text"
          value={inputValue3}
          className='w-3/6 rounded-lg'
          placeholder='teste'
          onChange={InputChange3}
        />

        <button className='text-white p-2 bg-blue-600 rounded w-20' onClick={AddTarefa}> Enviar</button>
      </div>

      <ul>
        {tarefa.map((task, index) => (
          <li className='cursor-pointer bg-stone-100 flex items-center my-5 rounded-lg pl-10 justify-between hover:shadow-md ' key={index}>
          
            <div className=" flex  space-y-2 w-2/6 flex flex-col">
              <span className='bg-stone-200  h-10 flex justify-start items-center pl-2' >{task.input}</span>
               <span  className='bg-stone-200  h-10 flex justify-start items-center pl-2'>{task.input2}</span>
                <span  className='bg-stone-200  h-10 flex justify-start items-center pl-2'>{task.input3}</span>
            </div>
                <Map>
                </Map>
                    <button className='rounded-full mx-8 my-5 bg-red-600 p-2' onClick={() => handleDeleteTask(index)}>x</button>

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
