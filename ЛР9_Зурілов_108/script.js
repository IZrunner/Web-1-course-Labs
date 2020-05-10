/*
Варіанти № 6-10
Напишіть програму розрахунку об’єму – V циліндра.
Об’єм V циліндра радіусом r=2*N та висотою h=N+4, 
розраховується за формулою V=πr2h
*/


function volumeCounter()
{
	var pi = 3.14;
	var N = document.getElementById("N").value; 
	var V = pi*(2*N)*2*(1*N+1*4);
	
	alert("Your volume is " + V);
}



/*function someMessage()
{
	alert("Thank you)");
}*/
