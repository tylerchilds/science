#
#
# Fibinacci - Code Eval Challenge
# Tyler Childs - 10/12/2013
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

  if line.to_i % 2 == 0
    result = 1
  else
    result = 0
  end
  
  puts result
end

exit 0