/*
Завдання №1:
Розробити програму табулювання функції трьома видами циклів. 
Знак ‘^’ означає ‘у ступеню’. Інтервал та крок вводяться користувачем. 
Табулювання виконувати по натисканню кнопки.

9. y = - e^ (2x^2) tg  (|2x|); інтервал : відрізок [0,0.6], крок 0.1.
*/


function thisMathLoopFor()
{
	var y;
	var x = 9;
	var i;
	var sequence;
	var thisTan = (Math.tan(Math.abs(2*x)))*180 / Math.PI;

	thisLoop:
	for(i = 0; i < 7; i++)
	{
		//y += ((Math.exp((2*x) * (2*x))) * (-1)) * ((Math.tan(Math.abs(2*x)))*180 / Math.PI);
		//y += Number.parseFloat((-Math.exp(Math.pow((2*x),2))) * Math.tan(Math.abs(2*x)));
		y = Math.floor((Math.exp((2*x) * (2*x)) * (-1)) * thisTan);
		x += 0.1;
		alert(y);

		sequence = confirm("Do you want to stay in the loop ?");
		if(sequence == true)
			{
				continue thisLoop;
			}
		else {break;}
	}
}

function thisMathLoopWhile()
{
	var y;
	var x = 9;
	var i = 0;
	var sequence;
	var thisTan = (Math.tan(Math.abs(2*x)))*180 / Math.PI;

	thisLoop:
	while(i < 7)
	{
		y = Math.floor((Math.exp((2*x) * (2*x)) * (-1)) * thisTan);
		x += 0.1;
		alert(y);

		sequence = confirm("Do you want to stay in the loop ?");
		if(sequence == true)
			{
				i++;
				continue thisLoop;
			}
		else {break;}
	}
}

function thisMathLoopDoWhile()
{
	var y;
	var x = 9;
	var i = 0;
	var sequence;
	var thisTan = (Math.tan(Math.abs(2*x)))*180 / Math.PI;

	thisLoop:
	do
	{
		y = Math.floor((Math.exp((2*x) * (2*x)) * (-1)) * thisTan);
		x += 0.1;
		alert(y);

		sequence = confirm("Do you want to stay in the loop ?");
		if(sequence == true)
			{
				i++;
				continue thisLoop;
			}
		else {break;}
	}
	while(i < 6);
}


/*
Завдання №2:
9.	Визначити кількість років і днів між кінцем Другої 
світової війни та вашим днем народження.
*/

function thisDate() 
{
	var WWTwo = new Date(1945, 6, 2);
	var myBDay = new Date(2000, 2, 1);
	var clearYearsDiff = myBDay.getFullYear() - (WWTwo.getFullYear()+1);
	var clearMonDiff = (11 - WWTwo.getMonth() -1) + (0 + myBDay.getMonth());
	var daysDiff = (30 - WWTwo.getDate()) + (0 + myBDay.getDate());
	alert("Years : " + clearYearsDiff +  ", days : " + daysDiff);
}