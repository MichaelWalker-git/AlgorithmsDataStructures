## You are given a list of projects and a list of dependencies 
### Which is a list of pairs of projects where the first project is dependent on the second project). 
### All of a project's dependencies must be build before the project is. 
### Find a build order that will allow the projects to be built. If there is no valid build order, return an error. 

```
EXAMPLE

Input:

  projects: a, b, c, d, e, f
  dependencies: (d, a), (b, f), (d, b), (a, f), (c, d)
  
  output: f, e, a, b, d, c 

```

Thought process:
Directed graph representing the dependencies.
Each node is a project, an an edge exists between A to B on A (A must be built before B).

// f -> e (?) -> a / b -> d -> c

 Depth first search is recommended, find last node and that will be the node where none are dependent on edge.

1.) We start with incoming edges which don't have any dependencies. ie. f or d

2.) Build those edges.

3.) We remove f and d from outgoing edges.

4. Repeat with c, b, g 

Break: If there are nodes remaining but all have dependencies. This is an error; we throw an error.

```
findBuildOrder(projects, dependencies){
  let graph = buildGraph(projects, dependencies);
  return orderProjects(graph.getNodes());
}

buildGraph(projects, dependencies){
  const graph = new Graph();
  
  for(let project in projects){
    graph.createNode(project);
  }
  
  for(let dependency in dependencies) {
    let first = dependency[0];
    let second = dependency[1];
    
    graph.addEdge(first, second);
  }
  
  return graph;
}

const orderProjects = (projects) => {
  const order = new Project[projects.size()];
  const endOfList = addNonDependent(order, projects, 0);
  let toBeProcessed = 0;
  
  while(toBeProcessed < order.length){
    const current = order[toBeProcessed];
    
    /* We have a circular dependency since there are no remaining projects with zero dependencies */
    if(current === null){
      return null;
    }
    
    /* Remove myself as a dependency. */
    const children = current.getChildren();
    for(let child in children){
      child.decremenetDependencies();
    }
    
    /* Add children that have no one depending on them */
    endOfList - addNonDependent(order, children, endOfList);
    toBeProcessed++;
  }
  return order;
}

/* A helper function to insert projects with zero dependencies into the order array, starting at index offset. */
addNonDependent(order, projects, offset){
  for(let project in projects){
    if(project.getNumberDependecies() === 0){
      order[offset] = project;
      offset++;
    }
  }
  return offset;
}



```
