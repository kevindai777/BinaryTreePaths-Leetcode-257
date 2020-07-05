//Objective is to find all possible paths of a binary tree.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that does a dfs traversal down the tree.

let paths = []

function dfs(node, path) {
    if (!node) {
        return
    }

    path += node.val 

    //We've reached the end of a path
    if (!node.left && !node.right) {
        paths.push(path)
    } else {
        path += '->'
        dfs(node.left, path)
        dfs(node.right, path)
    }
}
dfs(tree.root, '')

return paths