import { GraphNode } from "../../utils/GraphNode";


type VisitedFunction = (node: GraphNode) => void;
export function depthFirstTraversal(root: GraphNode, visited: VisitedFunction) {
    helper(root, visited);
}

function helper(node: GraphNode, visited: VisitedFunction) {
    if(node.visited) {
        return;
    }
    visited(node);
    node.visited = true;
    for(let adjacentNode of node.adjacent) {
        helper(adjacentNode, visited);
    }
}
