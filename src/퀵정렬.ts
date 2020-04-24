export {};
import fs from "fs";
/**
 * * 분할 정복 (병합정렬, 퀵정렬)
 * * 하양식 접근법으로 상위의 해답을 구하기 위해 아래로 내려가면서 하위의 해답을 구하는 방식
 * * 문제를 쪼갤 때 부분 문제는 서로 중복되지 않음
 */
/**
 * * 퀵정렬
 * * 피봇(기준점)을 정해서 기준보다 작은 데이터는 왼쪽, 큰 데이터는 오른쪽으로 모음
 * * 재귀법을 사용해서 다시 동일 함수를 호출하여 왼쪽과 오른쪽을 정렬함
 * @param arr 정렬할 배열
 * todo: 피봇 잡는 법을 다르게해서 성능 최적화 가능
 * * O(nlogn), 최악은 O(n^2)
 */
function quickSort(arr: Array<number>): Array<number> {
  if (arr.length <= 1) return arr;
  let left: Array<number> = [];
  let right: Array<number> = [];
  let pivot = arr[0]; // 피봇을 가장 처음 요소로 잡음
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) left.push(arr[i]);
    if (pivot < arr[i]) right.push(arr[i]);
  }
  let leftS = quickSort(left);
  let rightS = quickSort(right);
  return [...leftS, pivot, ...rightS];
}

const randomArr = [];
while (randomArr.length < 10000)
  randomArr.push(Math.floor(Math.random() * 100000) + 1);
fs.writeFileSync("../output/quickSort.txt", quickSort(randomArr), {
  encoding: "utf8",
});
