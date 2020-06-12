/**
 * * 버블정렬
 * todo: 서로 인접한 두 요소를 검사하여 정렬
 * todo: (오름차순) 한 번 루프를 돌고나면 가장 큰 요소가 맨 뒤로 이동함
 * todo: 2회전에서 맨 끝에 있는 요소는 정렬에서 제외함
 * ? 스왑이 한 번도 일어나지 않을 때 작성하기
 * * O(n^2)
 */
export {};

function bubbleSort(arr: Array<number>) {
    let swapCheck = 0; // 스왑이 일어났는지 체크
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
