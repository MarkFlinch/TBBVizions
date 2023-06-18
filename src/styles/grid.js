side1=0,side2=0

$(".galery").children().each(function(index, element) {
	if (index % 2 === 0) //odd children (starts with 0 )
	{
$(this).css("top",side1+"px") 
side1+=parseInt($(this).css("height"))
	}
else //even children
	{
$(this).css("top",side2+"px")
$(this).css("left","50%") 
side2+=parseInt($(this).css("height"))
	}	
});