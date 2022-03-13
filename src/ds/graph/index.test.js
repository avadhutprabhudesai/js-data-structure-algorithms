/**
 * addVertex
 * addEdge
 */

import Graph from '.';

let graph;
beforeEach(() => {
  graph = new Graph();
  graph.addVertex('0');
  graph.addVertex('1');
  graph.addVertex('2');
  graph.addVertex('3');
  graph.addVertex('4');
  graph.addVertex('5');
  graph.addVertex('6');
});

describe('Testing Undirected graph', () => {
  it('adds a vertex in the graph', () => {
    graph.addVertex('7');

    expect(graph.hasVertex('7')).toBeTruthy();
    expect(graph.hasVertex('8')).toBeFalsy();
    expect(graph.getNumberOfNodes()).toEqual(8);
  });
  it('adds an edge in the graph between 2 vertex', () => {
    graph.addEdge('3', '1');
    graph.addEdge('3', '4');
    graph.addEdge('4', '2');
    graph.addEdge('4', '5');
    graph.addEdge('1', '2');
    graph.addEdge('1', '0');
    graph.addEdge('0', '2');
    graph.addEdge('6', '5');

    expect(graph.getEdgeList('3')).toEqual(['1', '4']);
    expect(graph.getEdgeList('4')).toEqual(['2', '5']);
    graph.showConnections();
  });
});
