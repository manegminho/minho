function fnAllOutputgoogoodan(num)
{
	var ndigit = num;
	var result;
	
	for(var j=1;j<10;j++)
	{
		result = ndigit * j;
		document.write( "<br>" + ndigit +" X " + j + "=" + result);
	}
	document.write("<hr>" );
}