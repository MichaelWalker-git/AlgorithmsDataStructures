Given an undirected graph represented as an adjacency matrix and an integer k, 
write a function to determine whether each vertex in the graph can be colored such 
that no two adjacent vertices share the same color using at most k colors.

```
const valid = (graph, colors) => {
  let lastVertex;
  let lastColor = colors.length - 1,
  
  let colored_neighbors = [i
            for i, has_edge
            in enumerate(graph[last_vertex])
            if has_edge and i < last_vertex]
  
  for (let neighbor in coloredNeighbors) {
    if(colors[neighbor] == lastColor){
      return false;
    }
  }
  return true;
}

const colorable = (graph, k, colors = []) => {
 if(colors.length === graph.length){
   return true;
 }
 
 for(let i in k.length){
   colors.push(i);
   if(valid(graph, colors)){
     if(colorable(graph, k, colors){
       return true;
     }
   }
   colors.pop();
 }
 
 return false;
}

```
Thought Process: 
Use backtracking.
We start at vertex 0,try out every color from 0 -> k -1, then try to see if we can recursively paint the rest of the grpah without any conflicting colors. 

We'll create a helper function valid(graph, colors). It will look at the last colored vertex and all its neighbors to see if it conflicts with any of its neightbors (has the same color). We can skip all the uncolored vertices here.

To represent the colors, we can just keep a separate color list that maps 1-to-1 with the vertices. You can also convert the graph into ndoes and add a color property as well.

Time: O(k^N)
Space: O(k)
