class Graph {
  adjMap = new Map();

  constructor() {}

  addVertex(vertex) {
    let m = this.adjMap;

    if (m.get(vertex) !== undefined) {
      return false;
    } else {
      m.set(vertex, new Map());
    }
  }

  addEdge(from, to) {
    let f = this.adjMap.get(from);
    let t = this.adjMap.get(to);

    if (f === undefined || t === undefined) {
      return false;
    }

    if (f.has(to)) {
      f.set(to, f.get(to) + 1);
    }
    if (t.has(from)) {
      t.set(from, t.get(from) + 1);
    }

    if (!f.has(to)) {
      f.set(to, 1);
    }
    if (!t.has(from)) {
      t.set(from, 1);
    }
  }

  hasEdge(from, to) {
    let f = this.adjMap.get(from);
    let t = this.adjMap.get(to);

    return f.has(to) && t.has(from) ? true : false;
  }

  getAdjMap() {
    return this.adjMap;
  }

  getNumberOfVertices() {
    return this.adjMap.size;
  }

  getNumberOfEdges() {
    let m = this.adjMap;
    let e = 0;

    m.forEach((value) => (e += value.size));

    return e / 2;
  }
}

export default Graph;
