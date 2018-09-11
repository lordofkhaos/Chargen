import string, time
from datetime import datetime
from random import choice
import os

def clear():
	# for windows 
	if os.name == 'nt': 
		_ = os.system('cls')
	else: 
		_ = os.system('clear')

def printProgressBar (iteration, total, prefix = '', suffix = '', decimals = 1, length = 100, fill = '#'):
	"""
	Call in a loop to create terminal progress bar
	@params:
		iteration   - Required  : current iteration (Int)
		total	   - Required  : total iterations (Int)
		prefix	  - Optional  : prefix string (Str)
		suffix	  - Optional  : suffix string (Str)
		decimals	- Optional  : positive number of decimals in percent complete (Int)
		length	  - Optional  : character length of bar (Int)
		fill		- Optional  : bar fill character (Str)
	"""
	percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
	filledLength = int(length * iteration // total)
	bar = fill * filledLength + '.' * (length - filledLength)
	print('\r%s [%s] %s%% %s' % (prefix, bar, percent, suffix))
	# Print New Line on Complete
	if iteration == total: 
		print()

def main():
	# Open & create if does not exist
	print("Opening py-rt.txt")
	sttime = datetime.now().strftime('%Y%m%d_%H%M%S')
	name = sttime + "-py-rt.txt"
	f= open(name, "w+")
	x= open("log.txt", "a+")
	x.write('Starting python generation at: ' + sttime + '\n')
	all_char = string.ascii_letters + string.punctuation + string.digits

	for x in range(100000):
		# Get random string
		m = "".join(choice(all_char) for t in range(100000))
		# Write the string
		f.write(m)
		x += 1
		time.sleep(0.1)
		clear()
		printProgressBar(x + 1, 100000, prefix = "Progress:", suffix = "Complete", length = 50)
	
	# Close the writer
	f.close()
	entime = datetime.now().strftime('%Y%m%d_%H:%M:%S - ')
	x.write('Ending python generation at:' + entime + '\n')
	x.close()
main()