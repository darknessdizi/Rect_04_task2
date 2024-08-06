import './App.css';
import React, { useState } from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import { $elements, IFormData } from './modals/modals';

function App(): React.JSX.Element {
  const [formData, setFormData] = useState<IFormData>({
    date: '',
    path: '',
    array: [],
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const { date, path }: $elements = form.elements as any;

    const newData = {
      date: date.value,
      path: path.value,
    }

    const index = formData.array.findIndex((item) => {
      return item.date === date.value
    });

    console.log('index', index);

    setFormData((prevForm) => ({
      ...prevForm, // открываем для сохранения предыдущее состояние нашей формы
      ['date']: '',
      ['path']: '',
    }));

    if (index === -1) {
      setFormData((prevForm) => ({
        ...prevForm,
        ['array']: [...prevForm.array, newData],
      }));
    } else {
      setFormData((prevForm) => {
        const newArray = prevForm.array.slice();
        newArray[index].path = String(Number(newArray[index].path) + Number(path.value));
        return {
          ...prevForm,
          ['array']: [...newArray],
        }
      });
    }

    console.log('date:', date.value, 'path:', path.value)
    console.log('formData:', formData)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  return (
    <div className='conteiner'>
      <Form date={formData.date} path={formData.path} change={onChange} submit={onSubmit} />
      <Table array={formData.array} /> 
    </div>
  )
}

export default App
