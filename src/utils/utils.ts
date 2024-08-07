import { IData } from '../modals/modals';

export function sortArray(a: IData, b: IData): number {
  // Сортировка списка по дате
  const d1 = _getDate(a.date);
  const d2 = _getDate(b.date);
  console.log('d1=', d1, 'd2=', d2)

  let result: number;
  if (d1 > d2) result = 1; // d1 позже d2 (надо менять)
  if (d1 === d2) result = 0;
  if (d1 < d2) result = -1;
  console.log('result', result)
  return result;
}

function _getDate(str: string) {
  // Наращивает год до четырех чисел
  let array = str.split('.').reverse();

  const curentTime = new Date();
  const year = String(curentTime.getFullYear()).slice(2);

  if ((Number(array[0]) >= 0) && (Number(array[0]) <= Number(year))) {
    array[0] = `20${array[0]}`;
  } else {
    array[0] = `19${array[0]}`;
  }

  let result = array.join('.');
  const date = new Date(result);

  return date;
}
