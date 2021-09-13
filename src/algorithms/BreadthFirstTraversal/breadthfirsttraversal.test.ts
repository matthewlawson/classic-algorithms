import { GraphNode } from "../../utils/GraphNode";
import { breadthFirstTraversal } from "./breadthfirsttraversal";

const node1 = new GraphNode("1")
const node2 = new GraphNode("2");
const node3 = new GraphNode("3");
const node4 = new GraphNode("4");

node1.setAdjacent([node2, node4]);
node2.setAdjacent([node3]);
node3.setAdjacent([node4]);

describe("Example one", () => {
    test("Visited in correct order", () => {
        const order: string[] = ["1", "2", "4", "3"];
        let visitCount = 0;
        const visit = (node: GraphNode) => {
            expect(node.value).toBe(order[visitCount]);
            visitCount++;
        }
        breadthFirstTraversal(node1, visit);
        expect(visitCount).toBe(order.length)
    })
})
