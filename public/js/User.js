
function Initialize()
{
	AV.initialize("km2pbwjnqgjfoy5po5asqxt2wc9y13etx2vpd61vftu996po", "rrnz02ie5fa6ewh1vn5hfejulrkyjho8pjjx8gy7xjani094");

	    var currentUser=AV.User.current();
    	if(currentUser){
    		$("#user_register").hide();
    		$("#user_login").hide();
    		$("#user_count").show();
    	}else{
    		$("#user_count").hide();
    		$("#user_register").show();
    		$("#user_login").show();
    		
    	};

};

