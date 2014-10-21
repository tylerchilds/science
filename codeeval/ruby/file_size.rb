#
#
# File Size - Code Eval Challenge
# Tyler Childs - 10/21/2014
#

# open file from command line
if ARGV[0].nil?
  puts "NO FILE INPUT"
  exit
end

puts File.size(ARGV[0])