/**
 * * 1~num 까지 곱하는 함수
 * @param num 마지막으로 곱할 수
 */
function multiple(num: number): number {
  if (num == 1) return 1;
  return num * multiple(num - 1);
}

/**
 * * 리스트를 모두 더하는 함수
 * @param arr 모두 더할 리스트
 */
function sumList(arr: Array<number>): number {
  if (arr.length === 1) return arr[0];
  return (arr.pop() as number) + sumList(arr);
}

/**
 * * 회문을 찾는 함수
 * @param word 검사할 단어
 */
function palindrome(word: string): boolean {
  if (word.length == 1) return true;
  else if (word.charAt(0) == word.charAt(word.length - 1))
    return palindrome(word.substring(1, word.length - 1));
  else return false;
}

/**
 * * 결국 1이 되는 함수
 * @param num 원하는 수
 * todo: 홀수일 때 3 * n + 1
 * todo: 짝수일 때 n / 2
 */
function lastOne(num: number): number {
  console.log(num);

  if (num == 1) return num;
  else if (num % 2 == 0) return lastOne(num / 2);
  else return lastOne(3 * num + 1);
}

/**
 * * 1, 2, 3 의 덧셈으로 num을 표현하는 횟수를 구하는 함수
 * @param num 0 이상의 정수
 * todo: 규칙을 찾아보기
 */
function oneTwoThree(num: number): number {
  if (num == 1) return 1;
  else if (num == 2) return 2;
  else if (num == 3) return 4;
  return oneTwoThree(num - 3) + oneTwoThree(num - 2) + oneTwoThree(num - 1);
}

console.log(oneTwoThree(6));
