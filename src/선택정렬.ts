/**
 * * 선택 정렬 (제자리 정렬)
 * todo: 주어진 리스트에서 가장 최소값을 찾아 스왑
 * todo: 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 찾아 스왑
 * todo: 하나의 원소만 남을 때 까지 반복
 * * O(n^2)
 */
export {};
import fs from 'fs';

function selectionSort(arr: Array<number>) {
    let minIdx: number;
    for (let i = 0; i < arr.length - 1; i++) {
        minIdx = i;
        for (let j = i + 1; j < arr.length; j++) arr[minIdx] > arr[j] && (minIdx = j);
        [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
}

const arr = [];
while (arr.length <= 10000) arr.push(Math.floor(Math.random() * 100000) + 1);
selectionSort(arr);
fs.writeFileSync('../output/selectionSort.txt', arr);
