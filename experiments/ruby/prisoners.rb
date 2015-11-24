#
#
# Prison Algorithms for escape
#
# Tyler Childs - 11/23/14
#

# we want to know
# success percentages
# avg. drawers opened

$prisoners = [*0..99]
$drawers = [*0..99].shuffle

class Challenge
  def initialize
    rabbit = RabbitHole.new
    increment = Increment.new

    for i in 1..10000
      $drawers = $drawers.shuffle

      rabbit.search
      increment.search
    end

    puts "Rabbit Hole test: "
    rabbit.data

    puts "Incremental step test:"
    increment.data
  end
end

class Search

  def initialize
    @success = 0
    @drawers_opened = []
    @allowance = 49
  end

  def search
    $prisoners.each do |prisoner|
      found_at = algorithm prisoner
      if algorithm prisoner
        @drawers_opened.push(found_at)
      else
        @drawers_opened.push(@allowance)
        return false
      end
    end

    @success += 1
  end

  def data
    puts "Success: #{(@success.to_f / 10000 * 100)}%"
    puts "Avg. drawers: #{@drawers_opened.inject(0.0) { |sum, el| sum + el } / @drawers_opened.size}"
  end

  private

  def algorithm(prisoner)
    ### define this on the sub class
  end

end

class RabbitHole < Search
  private

  def algorithm(prisoner)
    next_step = prisoner

    for step in 0..@allowance
      if prisoner == $drawers[next_step]
        return step
      else
        next_step = $drawers[next_step]
      end
    end

    false
  end
end

class Increment < Search
  private

  def algorithm(prisoner)
    for step in 0..@allowance
      if prisoner == $drawers[(prisoner+step) % $drawers.length]
        return step
      end
    end

    false
  end
end

challenge = Challenge.new
