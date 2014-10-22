#
#
# Minumum Coins - Code Eval Challenge
# Tyler Childs - 10/22/2014
#

class Cashier
  def initialize(drawer)
    @drawer = drawer
  end

  def count_change(amount)

    coins = 0

    @drawer.each do |value|
      coins += amount / value
      amount %= value
    end

    coins
  end
end

# open file from command line
if ARGV[0].nil?
  puts "NO FILE INPUT"
  exit
end

clerk = Cashier.new([5, 3, 1])

File.read(ARGV[0]).each_line do |line|
  puts clerk.count_change( line.to_i )
end