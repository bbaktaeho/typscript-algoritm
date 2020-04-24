/**
 * * 선택 정렬
 * * 가장 최소값을 찾아 스왑
 */
export {};

function selectionSort(arr: Array<number>) {
  let min: number;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) arr[min] > arr[j] && (min = j);
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
}

const arr = [5, 7, 4, 3, 6, 2, 1];
selectionSort(arr);
console.log(arr);
