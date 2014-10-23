#
#
# Roman Numerals - Code Eval Challenge
# Tyler Childs - 10/22/2014
#

class Roman
  def initialize
    @symbols = ["I", "V"], ["X", "L"], ["C", "D"], ["M"]
  end

  def numeralize(number)
    numeral = []

    number.scan(/./).reverse.each_with_index do |digit, index|
      numeral.unshift( lookup(digit.to_i, index) )
    end

    numeral.join("")
  end

  def lookup(value, pos)
    single = @symbols[pos][0]

    if pos < 3
      five = @symbols[pos][1]
      ten = @symbols[pos+1][0]
    end

    case value
    when 4
      single + five
    when 9
      single + ten
    else
      if value > 4
        @symbols[pos][1] + fill(value - 6, single)
      else
        fill(value - 1, single)
      end
    end
  end

  def fill(value, single)
    singles = ""
    (0..value).each do
      singles += single
    end
    singles
  end
end

# open file from command line
if ARGV[0].nil?
  puts "NO FILE INPUT"
  exit
end

citizen = Roman.new
File.read(ARGV[0]).each_line do |line|
  puts citizen.numeralize( line )
end