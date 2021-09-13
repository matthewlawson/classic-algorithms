import { GraphNode } from "../../utils/GraphNode";
import { depthFirstTraversal } from "./depthfirsttraversal";

const node1 = new GraphNode("1")
const node2 = new GraphNode("2");
const node3 = new GraphNode("3");
const node4 = new GraphNode("4");

node1.setAdjacent([node2, node4]);
node2.setAdjacent([node3]);
node3.setAdjacent([node4]);

describe("Example one", () => {
    test("Visited in correct order", () => {
        const order: string[] = ["1", "2", "3", "4"];
        let visitCount = 0;
        const visit = (node: GraphNode) => {
            // console.log(node.value, order[visitCount])
            expect(node.value).toBe(order[visitCount]);
            visitCount++;
        }
        depthFirstTraversal(node1, visit);
        expect(visitCount).toBe(order.length)
    })
})
