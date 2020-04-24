export {};
/**
 * * 동적계획법
 * * 입력 크기가 작은 부분 문제들을 해결한 후, 해당 부분 문제의 해를 활용해서 보다 큰 크기의 부분 문제를 해결 -> 최종 문제를 해결
 * * 상향식 접근 법으로 가장 최하위 해답을 구하고 이를 저장한 다음 상위 문제를 풀어가는 방식
 * * Momoization (이전 계산 값을 저장하는 방식)
 * * 문제를 쪼갤 때 부분 문제는 중복되어 재활용됨
 */

function fibo_dp(num: number): number {
  let cache = [];
  cache[0] = 0;
  cache[1] = 1;
  for (let i = 2; i < num + 1; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[num];
}
