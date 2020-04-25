export {};
/**
 * * 이진 탐색
 * * 탐색할 자료를 둘로 나누어 해당 데이터가 있을만한 곳을 탐색하는 방법
 * * 분할정복
 * todo: divide-> 리스트를 두 개의 서브 리스트로 나눔
 * todo: comquer
 * @param arr 탐색할 배열
 * @param value 찾을 값
 * ! 정렬된 리스트를 파라미터로 받아야 함
 * * O(logn)
 */
function binarySearch(arr: Array<number>, value: number): boolean {
  if (arr.length == 1) {
    if (arr[0] == value) return true;
    else return false;
  }

  let middle = Math.floor(arr.length / 2);
  if (arr[middle] == value) return true;
  else {
    if (value > arr[middle]) return binarySearch(arr.slice(middle + 1), value);
    else return binarySearch(arr.slice(0, middle), value);
  }
}

const randomArr = [];
while (randomArr.length < 11)
  randomArr.push(Math.floor(Math.random() * 20) + 1);
randomArr.sort((a, b) => a - b);
console.log(randomArr);
console.log(binarySearch(randomArr, 10));
