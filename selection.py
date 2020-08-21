w = open( '/home/osama/Desktop/Bright_number/selection.txt' ,'w')
r = open('/home/osama/Desktop/Bright_number/phonegetter.txt' )
text = r.read()
x = text.split()
for i in range (0,len(x)):
	if (len(x[i])==10) :
		w.write(str(x[i]))
		w.write('\n')
             
              
                     
                     
                     
                     
      
               
