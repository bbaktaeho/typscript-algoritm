/**
 * * 버블정렬
 * ? 스왑이 한 번도 일어나지 않을 때 작성하기
 * * O(n^2)
 */
export {};

function bubbleSort(arr: Array<number>) {
  let swapCheck = 0;
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++)
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapCheck++;
      }
    if (swapCheck == 0) return;
  }
}

const arr = [1, 2, 3, 4, 5, 6];
bubbleSort(arr);
console.log(arr);
