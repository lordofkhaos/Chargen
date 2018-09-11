require 'date'
def main()
    # Open & create if does not exist
    puts "Opening rb-rt.txt"
    sttime = DateTime.now.strftime("%Y%m%d_%H%M")
    name = sttime + "-rb-rt.txt"
    a = File.open(name, 'w+')
    b = File.open("log.txt", 'a+')
    b.write('Starting ruby generation at: ' + sttime + "\n")
    all_char = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '+', ';', ':', ',', '<', '.', '>', '?']

    100_000.times {
        |x|
        # Get random string
        100_000.times {
            t = rand(all_char.length)
            a.write(all_char[t])
        }
        puts "Writing string num: " + x.to_s
    }
    entime = DateTime.now.strftime("Y%m%d_%H%M")
    b.write('Ending ruby generation at: ' + entime + "\n")
end
main()