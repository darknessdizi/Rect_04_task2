import './App.css';
import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import { IElements, IFormData } from './modals/modals';
import { sortArray, addZero } from './utils/utils';

function App() {
  const [formData, setFormData] = useState<IFormData>({
    date: '',
    path: '',
    array: [],
    statusEditor: false,
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Событие submit для формы (нажатие кнопки ОК)
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const { date, path }: IElements = form.elements as any;

    const newData = {
      date: addZero(date.value),
      path: path.value,
    }

    const index = formData.array.findIndex((item) => {
      return item.date === addZero(date.value);
    });

    setFormData((prevForm) => ({
      ...prevForm, // открываем для сохранения предыдущее состояние нашей формы
      ['date']: '',
      ['path']: '',
      statusEditor: false,
    }));

    if (index === -1) {
      setFormData((prevForm) => ({
        // Добавляем новую строку с данными
        ...prevForm,
        ['array']: [...prevForm.array, newData].sort(sortArray),
      }));
    } else {
      if (formData.statusEditor) {
        // Редактируем строку с данными
        setFormData((prevForm) => {
          const newArray = prevForm.array.slice();
          newArray[index].path = path.value;
          return {
            ...prevForm,
            ['array']: [...newArray],
          }
        });
      } else {
        // Добавляем данные в строку с данными
        setFormData((prevForm) => {
          const newArray = prevForm.array.slice();
          newArray[index].path = String(Number(newArray[index].path) + Number(path.value));
          return {
            ...prevForm,
            ['array']: [...newArray],
          }
        });
      }
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Событие изменения значения в поле input
    const { name, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const onClick =(e: React.ClipboardEvent<HTMLTableElement>) => {
    const element = e.target as HTMLElement;
    if (element.className === 'controll-delete') {
      // Удаление строки таблицы с данными (нажатие на крестик)
      const parent = element.closest('.table-item');
      const itemDate = parent?.querySelector('.item-date');
      setFormData((prevForm) => ({
        ...prevForm,
        ['array']: [...prevForm.array].filter((el) => el.date !== itemDate?.textContent),
      }));
    }
    if (element.className === 'controll-editor') {
      // Редактирование строки с данными (нажатие кнопки редактировать)
      const parent = element.closest('.table-item');
      const itemDate = parent?.querySelector('.item-date')?.textContent;
      const itemPath = parent?.querySelector('.item-path')?.textContent;
      if ((typeof itemDate === 'string') && (typeof itemPath === 'string')){
        const textDate: string = itemDate;
        const textPath: string = itemPath;
        setFormData((prevForm) => ({
          ...prevForm,
          ['date']: textDate,
          ['path']: textPath,
          statusEditor: true,
        }));
      }
    }
  }

  return (
    <div className='conteiner'>
      <Form date={formData.date} path={formData.path} change={onChange} submit={onSubmit} />
      <Table array={formData.array} click={onClick} /> 
    </div>
  )
}

export default App
