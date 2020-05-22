export {};
/**
 * * BFS
 * * 정점들과 같은 레벨에 있는 노드들을 먼저 탐색하는 방식
 * todo: 방문해야할 노드를 가지고 있는 큐 구현 -> 큐에서 하나씩 꺼내 연결된 노드를 방문하도록 구현해야함
 * todo: 방문된 노드를 가지고 있는 큐 구현
 * 방문해야할 큐에서 하나의 노드를 꺼내고 방문했는지 방문된 큐를 확인하고 방문하지 않았다면 방문된 큐에 넣고 연결된 노드들을 방문해야될 큐에 넣는다.
 * O(노드 수 + 간선 수)
 * ! 큐를 두 개 사용한 다는 것을 알자.
 */

function BFS(graph: Record<string, any>, startNode: string) {
  let visitedList: Array<any> = [];
  let needVisitList = [];

  needVisitList.push(startNode);
  while (needVisitList.length) {
    const node = needVisitList.shift() as string;
    if (!visitedList.find((e) => e === node)) {
      visitedList.push(node);
      needVisitList = [...needVisitList, ...graph[node]];
    }
  }
  return visitedList;
}

// Record 를 활용하여 딕셔너리 구현 (Object, Map 으로 대체 가능)
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

console.log(BFS(graph, "A"));
