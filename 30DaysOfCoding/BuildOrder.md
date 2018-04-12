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
