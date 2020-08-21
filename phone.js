
/*

what this?
this script select phone number from facebook comments

how? 
# copy this code and paste it on console 
from your browser !


copyright osama salah 2017 

https://www.facebook.com/profile.php?id=100003962919140



*/



commentle = document.getElementsByClassName("UFICommentBody").length
number ="";
list=["0","1","2","3","4","5","6","7","8","9"]
var myWindow = window.open();
for(i=0 ; i< commentle ; i++){
	comment = document.getElementsByClassName("UFICommentBody")[i].innerText;
	for(j=0 ; j< comment.length ; j++){
		for(a=0 ; a< list.length ; a++){
			if(comment[j] == list[a] ){;
		
				number = number + comment[j];

			}

		}

	}


			if( !number == "" ){
				 
					myWindow.document.write(number);
					myWindow.document.write("<br>");			
					number = "";
				
	}


}
