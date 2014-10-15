#
#
# Game of Life - Code Eval Challenge
# Tyler Childs - 10/12/2013
#

class Array
	def to_string
		s = ""
		self.each do |e|
			s += e
		end

		s
	end
end

class Life
	def initialize
		@board = []
		@toggles = []
	end

	def add_row(row)
		@board.push(row)
	end

	def show_board
		@board.each do |row|
			puts row.to_string
		end
	end

	def generation(times)
		(1..times).each do |index|
			@toggles = []

			@board.each_with_index do |row, m|
				row.each_with_index do |cell, n|
					neighbors = count_neighbors(m, n)
					decide_fate(neighbors, m, n)
				end
			end

			update_board()
		end
		
		self
	end

	def update_board()
		# loop through the toggles and... toggle
		@toggles.each do |m, n|
			@board[m][n] = cell_is_alive?(@board[m][n])? '.' : '*'
		end
	end

	def cell_is_alive?(cell)
		cell == '*'
	end

	def count_neighbors(m, n)
		count = 0

		# loop through row above to below... same for the columns left to right
		(m-1..m+1).reject{ |x| x < 0 || x >= @board.length }.each do |x|
			(n-1..n+1).reject{ |y| y < 0 || y >= @board[0].length }.each do |y|

				# don't count itself as dead or alive
				unless x == m && y == n
					count += 1 if cell_is_alive?(@board[x][y])
				end

			end
		end
		
		count
	end

	def decide_fate(neighbors, m, n)
		if cell_is_alive?(@board[m][n])
			if neighbors < 2 || neighbors > 3
				@toggles.push([m,n])
			end
		else
			if neighbors == 3
				@toggles.push([m,n])
			end
		end
	end
end



# open file from command line
if ARGV[0].nil?
	puts "\nError: No file specified\n\n"
	exit 1
else
	file = File.read(ARGV[0])
end

game = Life.new

# loop through file line by line
file.each_line do |line|

	game.add_row(line.scan(/./))

end

game.generation(10).show_board