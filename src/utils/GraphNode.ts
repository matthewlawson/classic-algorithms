export class GraphNode {
    value: string;
    adjacent: GraphNode[];
    visited: boolean;
    constructor(value: string, adjacent?: GraphNode[], visited= false) {
        this.value = value;
        this.adjacent = adjacent ? adjacent : [];
        this.visited = visited;
    }

    setAdjacent(adjacent: GraphNode[]) {
        this.adjacent = adjacent;
    }
}
