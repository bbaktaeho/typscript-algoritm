/**
 * * 최단 경로 알고리즘(그래프 알고리즘)
 * * 노드 간에 최단 경로를 구하는 알고리즘
 * * 가중치 그래프에서 문제가 주어짐
 * * 단일 출발, 단일 도착 최단 경로 문제
 * * 단일 출발 최단 경로 문제: 특정 노드 하나로 그래프의 모든 노드와의 최단 경로를 구하는 문제(각각의 최단경로들을 구하는 것임)
 * * 전체 쌍 최단 경로 문제: 그래프의 모든 쌍의 최단 경로를 구하는 문제
 * todo: 다익스트라 알고리즘 -> 첫 정점을 기준으로 연결된 정점을 추가하며 최단 거리를 갱신하는 방법(BFS 유사) -> 우선순위 큐 사용
 * ? 우선순위 큐는 들어간 순서와 상관없이 우선순위가 높은 요소부터 꺼내온다(우선순위에 넣을 때 최소힙 구조이므로 넣을 때 가장 작은 것이 맨 앞으로 오게됨)
 * */

/**
 * * 다익스트라 알고리즘
 * 1. 첫 정점을 기준으로 배열을 선언하여 첫 정점에서 각 정점까지의 거리를 저장
 *     초기는 거리 0 으로 저장, 나머지는 무한대로 저장, 우선순위 큐에는 첫 정점 거리만 업데이트
 * 2. 우선순위큐에서 노드를 꺼냄
 *     처음에는 첫 정점이 꺼내짐
 *     첫 정점과 인접한 노드들 각각에 대해 각 노드로 가는 거리와 현재 배열에 저장되어 있는 첫 정점에서 각 정점까지의 거리를 비교함
 *     배열에 저장되어 있는 거리보다 첫 정점에서 해당 노드까지 거리가 더 짧은 경우 배열의 해당 노드의 거리를 업데이트함
 *     배열에 해당 노드의 거리가 업데이트된 경우 우선순위큐에 넣음
 *         결과적으로 너비우선탐색처럼 정점의 인접한 노드들을 순차적으로 방문하게 됨
 *         만약 배열에 기록된 현재까지 발견된 가장 짧은 거리보다 더 긴 거리를 가진 노드의 경우에는 해당 노드와 인접한 노드간의 거리 계산을 하지 않음
 * 3. 2번의 과정을우선순위 큐에 꺼낼 노드가 없을 때 까지 반복
 *
 * todo step_1 : 첫 정점을 기준으로 배열을 선언하여 첫 정점에서 각 정점까지의 거리를 저장(초기 첫 정점의 거리는 0, 나머지는 무한대로 저장, 우선순위 큐에 [첫 정점,거리 0]을 넣음)
 * todo step_2 : 우선순위큐에서 추출한 노드를 기반으로 인접 노드와의 거리 계산 -> 배열에 저장된 거리와 인접 노드의 거리를 비교해서 더 작다면 업데이트 후 우선순위큐에 넣음
 * 시간복잡도 :
 *    과정 1: 각 노드는 최대 한 번씩 방문하므로 그래프의 모든 간서은 최대 한 번씩 검사 O(E)
 *    과정 2: 우선순위 큐에 가장 많은 노드, 거리 정보가 들어가는 경우, 우선순위 큐에 노드/거리 정보를 넣고 삭제하는 과정이 최악의 시간이 걸림 O(ElogE)
 *    총 시간 복잡도: O(E) + O(ElogE) = O(E + ElogE) = O(ElogE)
 */
export {};

/**
 * * 우선순위 큐 구현
 * todo: 가장 낮은 값을 가지는 요소가 우선순위임
 */

class PriorityQueue {
    private queue: Array<any>;
    constructor() {
        this.queue = [];
    }

    // 큐 비었는지 확인
    public isEmpty() {
        if (this.queue.length == 0) return true;
        else return false;
    }

    // 큐 출력
    public getQueue() {
        return this.queue;
    }
    // 큐 삽입
    public enqueue(data: any) {
        this.queue.push(data);
    }
    // 큐 삭제
    public dequeue() {
        let entry = 0;
        this.queue.forEach((e, i) => {
            if (this.queue[entry].distance > this.queue[i].distance) entry = i;
        });

        return this.queue.splice(entry, 1)[0];
    }
}

const graph = {
    A: { B: 8, C: 1, D: 2 },
    B: {},
    C: { B: 5, D: 2 },
    D: { E: 3, F: 5 },
    E: { F: 1 },
    F: { A: 5 },
};

// Object.keys(객체).lenth -> 객체 요소의 개수 구하기
// Object.keys(객체) -> 객체를 배열화 , 키값으로만
// Object.entries(객체) -> 객체를 배열화 , 모두

function dijkstra(graph: any, startNode: any) {
    const graphList = Object.keys(graph); // graph 를 배열로
    const distances: Array<{ node: string; distance: number }> = []; // 거리 배열 초기화(첫 정점을 기준으로 배열 생성)
    for (let i in graphList) distances[i] = { node: graphList[i], distance: Infinity }; // 배열의 모든 노드의 거리를 무한대로 초기화
    distances[distances.findIndex((e) => e.node == startNode)].distance = 0; // 첫 정점 거리는 0 이므로 0으로 초기화
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(distances.find((e) => e.node == startNode));

    while (!priorityQueue.isEmpty()) {
        let current = priorityQueue.dequeue(); // 우선순위큐에서 나온 가장 짧은 거리의 노드의 연결된 노드를 접근해야함

        if (distances[distances.findIndex((el) => el.node == current.node)].distance < current.distance) continue; // 거리 배열에 있는 거리가 더 짧다면 아래 작업을 안해도됨

        Object.entries(graph[current.node]).forEach((e, i) => {
            let sumDistance = current.distance + e[1];
            let elNode = distances[distances.findIndex((el) => el.node == e[0])];
            if (sumDistance < elNode.distance) {
                elNode.distance = sumDistance;
                priorityQueue.enqueue(elNode); // 거리가 업데이트된다면 우선순위큐에 enqueue
            }
        });
    }
    return distances;
}

const distances = dijkstra(graph, 'A');
console.log(distances);
