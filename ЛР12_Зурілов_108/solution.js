/*
Завдання №1:
Елементи масиву задавати через Math.random();. 
Довжина масиву – 10 елементів. До значень елементів форм 
звертатись через document.getElementById("#demo").value. 
Результат виводити на сторінку через document.getElementById("demo").innerHTML.

9.	Задано одновимірний масив цілих чисел, підрахувати суму додатніх елементів.
*/

function thisArrayOne()
{
	var arrayFirst = Array(10);
	var min = -5;
	var max = 5;
	var sumPlus = 0;
	var arrOutput;


	for(var i = 0; i < 10; i++) // fill with random numbers
	{
		arrayFirst[i] = Math.floor(Math.random() * (max - min) + min); 
		arrOutput = document.getElementById("arrayOne").innerHTML +=(" " + arrayFirst[i]);
		//alert(+arrayFirst[i]);
	}

	for(var i = 0; i < 10; i++) //sum all (+) numbers
	{
		if(arrayFirst[i] >= 0)
		{
			sumPlus += arrayFirst[i];
		}
	}
	document.getElementById("arrayOneSum").innerHTML += sumPlus;
	//alert(sumPlus);
}


/*
Завдання №2:
9.	Після кожного символу у введеному рядку поставити пробіл
*/


function thisArrayTwo()
{
	var arraySecond = 'masterpiece'; // our string
	var separator = ' ';
	var arrayWithStr = [];

	arrayWithStr = arraySecond.split(""); // split on array of chars (strings)
	document.getElementById("arrayWithString").innerHTML += arrayWithStr;
	
	for(var i = 0; i < arrayWithStr.length; i++)
	{
		arrayWithStr[i] = arrayWithStr[i] + separator; // add a space after each char
	}
	
	document.getElementById("arrayWithStringNew").innerHTML += arrayWithStr;
	//alert(arrayWithStr);	
}