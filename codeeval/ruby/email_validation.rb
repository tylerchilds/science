#
#
# Email Validation - Code Eval Challenge
# Tyler Childs - 10/12/2014
#

# open file from command line
if ARGV[0].nil?
	puts "\nError: No file specified\n\n"
	exit 1
else
	file = File.read(ARGV[0])
end

def validate_email(string)
	return false if /^[a-zA-Z0-9.+\-_]*@[a-zA-Z0-9.\-]*\.[a-zA-Z0-9]{2,4}$/.match(string).nil?

	true
end

# loop through file line by line
file.each_line do |line|

	puts validate_email(line)

end

exit 0