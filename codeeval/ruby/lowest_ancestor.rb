#
#
# Lowest Common Ancestor - Code Eval Challenge
# Tyler Childs - 10/18/2014
#

class TreeNode
  attr_accessor :value, :left, :right

  # The Tree node contains a value, and a pointer to two children - left and right
  # Values lesser than this node will be inserted on its left
  # Values greater than it will be inserted on its right
  def initialize val,left,right
    @value = val
    @left = left
    @right = right
  end
end

class BinarySearchTree

  # Initialize the Root Node
  def initialize val
    @root = TreeNode.new(val,nil,nil)
  end

  def insert(value)
    current_node = @root
    while nil != current_node
      if (value < current_node.value) && (current_node.left == nil)
        current_node.left = TreeNode.new(value,nil,nil)
      elsif  (value > current_node.value) && (current_node.right == nil)
        current_node.right = TreeNode.new(value,nil,nil)
      elsif (value < current_node.value)
        current_node = current_node.left
      elsif (value > current_node.value)
        current_node = current_node.right
      else
        return
      end
    end
  end

  # find a lineage
  def get_ancestors(value)
    ancestors = []
    current = @root

    until nil == current
      ancestors.push(current.value)
      return ancestors if current.value == value
      current = value < current.value ? current.left : current.right
    end

    ancestors
  end

  # get the two lineages and start sacrificing the youngest
  def lowest_common_ancestor(x, y)
    history_x = get_ancestors(x)
    history_y = get_ancestors(y)

    sacrifice_youngest(history_x, history_y)
  end

  # sacrifice children until the lowest common ansestor is found
  def sacrifice_youngest(hx, hy)
    until hx == nil && hy == nil
      return hx.last if hx.last == hy.last
      hx.length > hy.length ? hx.pop : hy.pop

      sacrifice_youngest(hx, hy)
    end
  end
end

bst = BinarySearchTree.new(30)
bst.insert(8)
bst.insert(52)
bst.insert(3)
bst.insert(20)
bst.insert(10)
bst.insert(29)

# open file from command line
if ARGV[0].nil?
  puts "NO FILE INPUT"
  exit
end

File.read(ARGV[0]).each_line do |line|
  x, y = line.split
  puts bst.lowest_common_ancestor(x.to_i, y.to_i)
end