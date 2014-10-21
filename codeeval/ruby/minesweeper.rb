#
#
# Minesweeper - Code Eval Challenge
# Tyler Childs - 10/12/2014
#

class Array
	def to_string
		s = ""
		self.each do |e|
			s += e.to_s
		end

		s
	end
end

def chunk(string, size)
	string.scan(/.{1,#{size}}/)
end

class Minefield
	def initialize(x, y, mines)
		@field = []

		mines.scan(/.{#{y}}/).each do |row|
			@field.push(row.scan(/./))
		end

	end

	def add_row(row)
		@field.push(row)
	end

	def show
		output = ""

		@field.each do |row|
			output += row.to_string
		end

		puts output
	end

	def minesweep
		@field.each_with_index do |row, m|
			row.each_with_index do |cell, n|

					@field[m][n] = count_neighbors(m, n) unless cell_has_mine?( @field[m][n] )

			end
		end

		self
	end

	def cell_has_mine?(cell)
		cell == '*'
	end

	def count_neighbors(m, n)
		count = 0

		# loop through row above to below... same for the columns left to right
		(m-1..m+1).reject{ |x| x < 0 || x >= @field.length }.each do |x|
			(n-1..n+1).reject{ |y| y < 0 || y >= @field[0].length }.each do |y|

				# don't count itself as dead or alive
				unless x == m && y == n
					count += 1 if cell_has_mine?(@field[x][y])
				end

			end
		end

		count
	end

end

# open file from command line
if ARGV[0].nil?
	puts "\nError: No file specified\n\n"
	exit 1
else
	file = File.read(ARGV[0])
end

# loop through file line by line
file.each_line do |line|
	grid, mines = line.split(";")
	row, col = grid.split(",")

	minefield = Minefield.new(row, col, mines)
	minefield.minesweep.show
end