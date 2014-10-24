#
#
# Batch unzip .7z files using p7z
# Tyler Childs - 10/24/2014
#

# open file from command line
if ARGV[0].nil?
  puts "Error reading input"
  exit
end

archives = Dir["#{ARGV[0]}/**/*.7z"]

puts "Wiping: ./output"
`rm -rf #{ARGV[0]}/output`

puts "Creating: ./output"
`mkdir #{ARGV[0]}/output`

archives.each do |archive|
  file_name = archive[/^.*\/(?<name>.*)\..*$/, 1]
  escaped_file = file_name.gsub(/\s+/, "\\ ").gsub("'"){"\\'"} + ".7z"
  folder = file_name.gsub(/[\s']+/, "")

  puts "Creating: #{folder}"
  `mkdir #{ARGV[0]}/output/#{folder}`

  puts "Extracting: #{file_name}"
  `7za e -o#{ARGV[0]}/output/#{folder} #{ARGV[0]}/#{escaped_file}`
end