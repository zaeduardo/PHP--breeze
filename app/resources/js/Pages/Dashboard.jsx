import React, { useState, useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Mapakkk from '@/Components/MapCompnent';
import { Head } from '@inertiajs/react';
import Datakkk from '@/Components/Date';
import DropDowTask from '@/Components/DropDownTask';

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };

  const InputChange2 = (e) => {
    setInputValue2(e.target.value);
  }

  const InputChange3 = (e) => {
    setInputValue3(e.target.value);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEnviarClick = () => {
    console.log("task_name", inputValue);
    console.log("location:", inputValue2);
    console.log("city:", inputValue3);
    console.log("Valor do Datakkk:", selectedDate);
  };

  return (
    <div className='h-dvh'>
      <div className='flex  ml-5'>

      <h2 className="font-semibold text-xl text-gray-800 leading-tight my-3 mr-5 ">Adicionar Task</h2>
      <DropDowTask/>
      </div>
      <div className='bg-slate-100	flex flex-row space-x-36 rounded-lg p-8 '>
        <div className=" p-2 mb-10 flex flex-col items-center space-y-2 w-2/4  justify-center ">
          <div className='flex space-y-4 flex-col justify-center w-full  space-y-5 items-center'>
            <input
              type="text"
              value={inputValue}
              className='w-5/6 rounded-lg'
              onChange={InputChange}
              placeholder="Adicionar Task"
            />
            <input
              type="text"
              value={inputValue2}
              className='w-5/6 rounded-lg'
              placeholder='teste'
              onChange={InputChange2}
            />
            <input
              type="text"
              value={inputValue3}
              className='w-5/6 rounded-lg'
              placeholder='teste'
              onChange={InputChange3}
            />
          </div>
          <div className='w-5/6 flex space-x-4'>
            <input type="text" className='rounded-lg w-2/4' />
            <Datakkk onDateChange={handleDateChange} />
          </div>
          <input type="text" className='w-5/6 rounded-lg' />
          <button className='text-white p-2 bg-blue-600 rounded w-20' onClick={handleEnviarClick}>Enviar</button>
        </div>
        <div style={{ backgroundColor: 'red', width: '60%', height: '600px', borderRadius: '20px' }}>
          <Mapakkk />
        </div>
      </div>
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
