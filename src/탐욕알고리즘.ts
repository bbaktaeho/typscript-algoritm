/**
 * * greedy algoritm
 * * 최적의 해에 가까운 값을 구하기 위해 사용
 * * 여러가지 경우가 있을 때 매순간 최적이라고 생각되는 경우을 선택하는 방식으로 진행해서 최종 값을 구하는 방식
 * ! 탐욕 알고리즘의 한계
 * * 탐욕 알고리즘은 가장 최적의 해를 구하기 보단 근사치를 구하는 알고리즘임
 * * 최적의 해에 가장 가까운 값을 구하는 방법 중 하나임
 * ? 2차원 트리를 탐색해서 최소 합을 구할 때 ??
 */

/**
 * * 탐욕 알고리즘의 기본 문제 (동전 문제)
 */
function minCoinCount(value: number) {
  let coinList = [500, 100, 50, 1];
  let totalCount: number = 0;
  let count: number = 0;
  for (let coin of coinList) {
    count = Math.floor(value / coin);
    totalCount += count;
    value -= coin * count;
  }
  return totalCount;
}
console.log(minCoinCount(4720));

/**
 * * 탐욕 알고리즘의 기본 문제 (부분 배낭 문제)
 * * 무게 제한이 k인 배낭에 최대 가치를 가지도록 물건을 넣는 문제
 * * 물건을 쪼갤 수 있음
 * * 물건은 무게와 가치를 가지고 있음
 */
// 물건 리스트([무게, 가치])
const dataList = [
  [10, 10],
  [15, 12],
  [20, 10],
  [25, 8],
  [30, 5],
];
// 알고리즘 (용량에 맞게 최대 가치의 물건을 넣을 수 있는 배낭)
function getMaxValue(dataList: Array<any>, capacity: number) {
  // 최적의 무게와 가치를 알수있게 정렬 (무게대비 가치가 높은 것이 맨 앞으로 오도록하기)
  const list = dataList
    .map((el, i) => {
      return { value: el[1] / el[0], data: dataList[i] };
    })
    .sort((a, b) => b.value - a.value);

  let totalValue = 0;
  for (let data of list) {
    if (capacity - data.data[0] >= 0) {
      // 옹량이 충분하기 때문에 통째로 담음
      capacity -= data.data[0];
      totalValue += data.data[1];
    } else {
      // 용량이 부족할 때 나눠 넣고 더 이상 공간도 없음
      let fraction = capacity / data.data[0];
      totalValue += data.data[1] * fraction;
      break; // 다음 물건은 볼 필요가 없음(용량 참)
    }
  }
  return totalValue;
}
console.log(getMaxValue(dataList, 30));
