function justdoit(){
	if($("body").hasClass("blue"))
	{
		$("body").removeClass("blue");
		$("body").addClass("red");
	}
        else
	{
		if($("body").hasClass("red"))
        	{
                	$("body").removeClass("red");
                	$("body").addClass("blue");
        	}
	}
	setTimeout(justdoit, 1000);
}

$( document ).ready(function() {
	setTimeout(justdoit, 1000);
});
