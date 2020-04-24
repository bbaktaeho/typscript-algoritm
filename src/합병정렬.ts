export {};
import fs from "fs";

/**
 * * 합병정렬
 * * 분할정복 알고리즘 기법 중 하나
 * * 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눔
 * * 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬
 * @param arr 정렬할 배열
 * * O(nlogn)
 */

function merge(left: Array<number>, right: Array<number>): Array<number> {
  let resultArr: Array<number> = [];
  let leftIdx = 0,
    rightIdx = 0;
  // left, right 둘 다 남아있을 때
  while (left.length > leftIdx && right.length > rightIdx) {
    if (left[leftIdx] > right[rightIdx]) {
      resultArr.push(right[rightIdx]);
      rightIdx++;
    } else {
      resultArr.push(left[leftIdx]);
      leftIdx++;
    }
  }
  // left만 남아있을 때
  while (left.length > leftIdx) {
    resultArr.push(left[leftIdx]);
    leftIdx++;
  }
  // right만 남아있을 때
  while (right.length > rightIdx) {
    resultArr.push(right[rightIdx]);
    rightIdx++;
  }
  return resultArr;
}
function mergeSort(arr: Array<number>): Array<number> {
  if (arr.length <= 1) return arr;
  let partition = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, partition));
  let right = mergeSort(arr.splice(partition));
  return merge(left, right);
}

const randomArr: Array<number> = [];
while (randomArr.length < 10000)
  randomArr.push(Math.floor(Math.random() * 100000 + 1));
fs.writeFileSync("../output/mergeSort.txt", mergeSort(randomArr));
