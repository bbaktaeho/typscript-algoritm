/**
 * * 삽입 정렬
 * todo: 두 번째 데이터부터 시작해서 앞의 데이터와 비교하여 두 번째 데이터가 작다면 앞 자리로 삽입
 * todo: 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여 삽입할 위치를 찾음
 * * O(n^2)
 */
export {};

async function insertionSort(arr: Array<number>): Promise<void> {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j <= i; j++) {
            if (arr[i - j + 1] < arr[i - j]) [arr[i - j + 1], arr[i - j]] = [arr[i - j], arr[i - j + 1]];
            else break;
        }
    }
}

const arr = [5, 7, 1, 3, 2, 8, 0, 9, 10, 35, 23, 87, 54];
(async () => await insertionSort(arr))();
console.log(arr);
