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
