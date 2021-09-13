import { GraphNode } from "../../utils/GraphNode";
import { Queue } from "../../utils/Queue";


type VisitedFunction = (node: GraphNode) => void;
export function breadthFirstTraversal(root: GraphNode, visited: VisitedFunction) {
    const queue = new Queue();
    root.visited = true;
    queue.enqueue(root);

    while(!queue.isEmpty()) {
        let frontNode = queue.dequeue() as GraphNode;
        // Process the node ...
        visited(frontNode);
        for(let node of frontNode.adjacent) {
            if(!node.visited) {
                node.visited = true;
                queue.enqueue(node);
            }
        }
    }
}
