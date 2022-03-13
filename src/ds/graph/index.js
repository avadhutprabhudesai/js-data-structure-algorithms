class Graph {
  constructor() {
    this.adjacentList = {};
    this.nodes = 0;
  }

  addVertex = (value) => {
    this.adjacentList[value] = [];
    this.nodes++;
  };

  hasVertex = (value) => {
    return this.adjacentList.hasOwnProperty(value);
  };

  getNumberOfNodes = () => this.nodes;

  addEdge = (vertexKey, edge) => {
    let edgeList = this.adjacentList[vertexKey];
    if (edgeList) {
      edgeList.push(edge);
    }
  };

  getEdgeList = (vertex) => {
    return this.adjacentList[vertex];
  };

  showConnections = () => {
    let str = '';
    for (let [key, value] of Object.entries(this.adjacentList)) {
      str = str.concat(`\n${key} -> ${value.join(' ')}`);
    }
    console.log(str);
  };
}

export default Graph;
