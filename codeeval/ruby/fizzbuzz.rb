#
#
# Fizz Buzz - Code Eval Challenge
# Tyler Childs - 12/6/2013
#

# open file from command line
if ARGV[0].nil?
	puts "\nError: No file specified\n\n"
	exit 1
else
	file = File.read(ARGV[0])
end

# loop through file line by line
file.each_line do |line|

  # break line into integers
  values = line.split(" ").map { |s| s.to_i }

  a = values[0]
  b = values[1]
  n = values[2]
  result = ""

  # loop this line until n
  i = 1
  while i <= n do
    
    # output the proper fizz buzz both or nuzz
    if (i % a == 0) && (i % b == 0)
    	result = result + "FB"
    elsif (i % a == 0)
    	result = result + "F"
    elsif (i % b == 0)
    	result = result + "B"
    else
    	result = result + i.to_s
    end
    i += 1

    # only give whitespace at the end
    if i != n + 1
      result = result + " "
    end
  end
  
  puts result
end

exit 0