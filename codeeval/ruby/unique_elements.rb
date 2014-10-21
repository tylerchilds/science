#
#
# Unique Elements - Code Eval Challenge
# Tyler Childs - 10/12/2014
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
	puts line.split(',').map(&:to_i).uniq.join(',')
end