/**
 * * 선택 정렬
 * * 가장 최소값을 찾아 스왑
 * * O(n^2)
 */
export {};

function selectionSort(arr: Array<number>) {
  let minIdx: number;
  for (let i = 0; i < arr.length - 1; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++)
      arr[minIdx] > arr[j] && (minIdx = j);
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
}

const arr = [5, 7, 4, 3, 6, 2, 1];
selectionSort(arr);
console.log(arr);
