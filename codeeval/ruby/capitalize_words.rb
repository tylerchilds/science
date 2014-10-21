#
#
# Capitalize Words - Code Eval Challenge
# Tyler Childs - 10/14/2014
#

class String
  def titleize
    self.split(" ").map do |word|
      word[0].capitalize + word[1..-1]
    end.join(" ")
  end
end

# open file from command line
if ARGV[0].nil?
  puts "NO FILE INPUT"
  exit
end

File.read(ARGV[0]).each_line { |line| puts line.titleize }