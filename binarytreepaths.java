//Java Solution

class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> paths = new ArrayList<>();
        dfs(root, "", paths);
        
        return paths;
    }
    
    public void dfs(TreeNode node, String path, List<String> paths) {
        if (node == null) {
            return;
        }
        
        path += node.val;
        
        if (node.left == null && node.right == null) {
            paths.add(path);
        } else {
            path += "->";
            dfs(node.left, path, paths);
            dfs(node.right, path, paths);
        }
    }
}