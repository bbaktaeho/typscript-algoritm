/**
 * * 삽입 정렬
 * * 두 번째 데이터부터 시작해서 앞의 데이터와 비교(반복)
 * * O(n^2)
 */
export {};

async function insertionSort(arr: Array<number>): Promise<void> {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j <= i; j++) {
      if (arr[i - j + 1] < arr[i - j])
        [arr[i - j + 1], arr[i - j]] = [arr[i - j], arr[i - j + 1]];
      else break;
    }
  }
}

const arr = [5, 7, 1, 3, 2, 8, 0, 9, 10, 35, 23, 87, 54];
(async () => await insertionSort(arr))();
console.log(arr);
