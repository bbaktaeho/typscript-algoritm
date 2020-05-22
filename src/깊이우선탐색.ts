/**
 * * 깊이 우선 탐색
 * todo: 방문해야할 노드의 스택을 구현해야함
 * todo: 방문한 노드의 큐를 구현해야함
 * ? bfs와 다른 점: 너비우선탐색은 두 개의 큐로 구현했지만 깊이 우선 탐색은 스택과 큐로 구현됨
 * O(노드 수 + 간선 수)
 */

export = {};

function DFS(graph: Record<string, any>, startNode: string) {
  let visitedList: Array<string> = [];
  let needVisitList = [];

  needVisitList.push(startNode);
  while (needVisitList.length) {
    const node = needVisitList.pop() as string;
    if (!visitedList.find((e) => e === node)) {
      visitedList.push(node);
      needVisitList = [...needVisitList, ...graph[node]];
    }
  }
  return visitedList;
}

// 자식 노드의 오른쪽 부터 탐색하게 됨
const graph: Record<string, any> = {};
graph["A"] = ["B", "C"];
graph["B"] = ["A", "D"];
graph["C"] = ["A", "G", "H", "I"];
graph["D"] = ["B", "E", "F"];
graph["E"] = ["D"];
graph["F"] = ["D"];
graph["G"] = ["C"];
graph["H"] = ["C"];
graph["I"] = ["C", "J"];
graph["J"] = ["I"];

console.log(DFS(graph, "A"));
