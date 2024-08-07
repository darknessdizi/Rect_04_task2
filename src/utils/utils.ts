import { IData } from '../modals/modals';

export function sortArray(a: IData, b: IData): number {
  // Сортировка списка по дате
  const d1 = _getDate(a.date);
  const d2 = _getDate(b.date);

  let result: number = 0;
  if (d1 > d2) return result = 1; // d1 позже d2 (надо менять)
  if (d1 === d2) return result = 0;
  if (d1 < d2) return result = -1;
  return result;
}

function _getDate(str: string): Date {
  // Возвращает дату по значению строки
  const array = str.split('.').reverse();

  const curentTime = new Date();
  const year = String(curentTime.getFullYear()).slice(2);

  if ((Number(array[0]) >= 0) && (Number(array[0]) <= Number(year))) {
    array[0] = `20${array[0]}`;
  } else {
    array[0] = `19${array[0]}`;
  }

  const result = array.join('.');
  const date = new Date(result);

  return date;
}

export function addZero(str: string): string {
  // Делает число двухзначным
  let array = str.split('.');
  array = array.map((item) => {
    if (Number(item) < 10) {
      return `0${Number(item)}`;
    }
    return item;
  });
  const result = array.join('.');
  return result;
}
