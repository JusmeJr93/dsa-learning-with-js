/* eslint-disable react/no-unescaped-entities */
const Lesson7 = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Day 23-26: Graphs</h2>
      <p className="mb-4">
        Graphs are a versatile data structure that can represent various
        relationships and connections.
      </p>
      <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
      <ul className="list-disc list-inside pl-6 mb-4">
        <li>What is a graph?</li>
        <li>Graph representation: Adjacency list vs. adjacency matrix</li>
        <li>Graph traversal: BFS and DFS</li>
        <li>Graph algorithms: Dijkstra's, Kruskal's, Prim's</li>
        <li>Applications of graphs</li>
      </ul>
      <p className="mb-4">
        By mastering graphs, you will be able to solve complex problems in
        networking, social media, and more.
      </p>

      <div className="p-5">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction to Graphs
          </h2>
          <p>
            A graph is a collection of nodes (or vertices) and edges that
            connect pairs of nodes. Graphs are used to model relationships and
            are widely used in computer science for algorithms, networking, and
            many other fields.
          </p>
          <p>
            Graphs can represent various structures like social networks,
            computer networks, and even maps. Understanding graph theory is
            fundamental to solving many problems efficiently.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Types of Graphs</h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Undirected Graph:</b> In an undirected graph, edges have no
              direction. The connection between nodes is bidirectional.
            </li>
            <li>
              <b>Directed Graph (Digraph):</b> In a directed graph, edges have a
              direction. The connection between nodes is unidirectional.
            </li>
            <li>
              <b>Weighted Graph:</b> In a weighted graph, edges have weights
              representing the cost or distance between nodes.
            </li>
            <li>
              <b>Unweighted Graph:</b> In an unweighted graph, all edges are
              considered to have the same weight or no weight.
            </li>
            <li>
              <b>Cyclic Graph:</b> A graph that contains at least one cycle (a
              path that starts and ends at the same vertex).
            </li>
            <li>
              <b>Aciclic Graph:</b> A graph with no cycles. Directed Acyclic
              Graphs (DAGs) are a subset of acyclic graphs.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Graph Representations
          </h2>
          <p>
            Graphs can be represented in different ways, with each
            representation having its own advantages and disadvantages:
          </p>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Adjacency Matrix:</b> A 2D array where the cell at row i and
              column j represents the edge between vertices i and j. It is
              useful for dense graphs.
            </li>
            <li>
              <b>Adjacency List:</b> An array of lists where each list
              represents the vertices adjacent to a given vertex. It is useful
              for sparse graphs.
            </li>
          </ul>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`// Adjacency Matrix for a graph with 4 vertices
const adjMatrix = [
  [0, 1, 1, 0], // Vertex 0
  [1, 0, 1, 1], // Vertex 1
  [1, 1, 0, 1], // Vertex 2
  [0, 1, 1, 0]  // Vertex 3
];

// Adjacency List for a graph with 4 vertices
const adjList = [
  [1, 2],   // Vertex 0
  [0, 2, 3], // Vertex 1
  [0, 1, 3], // Vertex 2
  [1, 2]    // Vertex 3
];
`}
          </pre>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Graph Traversal Algorithms
          </h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Breadth-First Search (BFS):</b> An algorithm that explores the
              graph level by level, starting from a source node. It is used to
              find the shortest path in an unweighted graph.
            </li>
            <li>
              <b>Depth-First Search (DFS):</b> An algorithm that explores as far
              as possible along each branch before backtracking. It can be used
              to find paths, detect cycles, and more.
            </li>
          </ul>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`// BFS Implementation
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// DFS Implementation
function dfs(graph, start, visited = new Set()) {
  console.log(start);
  visited.add(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Example graph
const graph = {
  0: [1, 2],
  1: [0, 2, 3],
  2: [0, 1, 3],
  3: [1, 2]
};

console.log('BFS:');
bfs(graph, 0);

console.log('DFS:');
dfs(graph, 0);
`}
          </pre>
        </section>
        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Examples and Exercises
          </h2>
          <p>Try the following exercises to practice working with graphs:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              Implement a graph class with adjacency list representation and
              methods for adding edges and vertices.
            </li>
            <li>
              Write a function to find the shortest path between two nodes in an
              unweighted graph using BFS.
            </li>
            <li>Implement DFS to detect cycles in a directed graph.</li>
            <li>
              Create a function to find all connected components in an
              undirected graph.
            </li>
            <li>
              Use graphs to solve real-world problems such as finding the
              shortest path in a map or social network analysis.
            </li>
          </ol>
        </section> */}
      </div>
    </div>
  );
};

export default Lesson7;
