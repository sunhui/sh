    $(document).ready(function(){
    $("#btn_user_login").click(function () {

    	AV.initialize("km2pbwjnqgjfoy5po5asqxt2wc9y13etx2vpd61vftu996po", "rrnz02ie5fa6ewh1vn5hfejulrkyjho8pjjx8gy7xjani094");
        AV.User.logIn($("#loginUserName").val(),$("#loginPassword").val(),{
		success:function(user)
		{	
			alert("登录成功!!");
			window.parent.location.assign("../index.html");
		},
		error:function(user,error){
			alert("登录失败!");
		}
    });
	});

	$("#user_logout").click(function(){
		AV.initialize("km2pbwjnqgjfoy5po5asqxt2wc9y13etx2vpd61vftu996po", "rrnz02ie5fa6ewh1vn5hfejulrkyjho8pjjx8gy7xjani094");
		AV.User.logOut();
		alert("注销成功")
    		$("#user_register").show();
    		$("#user_login").show();
    		$("#user_count").hide();
    		window.location.assign("./index.html");

	});


    $("#btn_user_register").click(function(){
    AV.initialize("km2pbwjnqgjfoy5po5asqxt2wc9y13etx2vpd61vftu996po", "rrnz02ie5fa6ewh1vn5hfejulrkyjho8pjjx8gy7xjani094");
    alert("正在注册"+$("#inputUserName").val()+"\n"+$("#inputPassword").val()+"\n"+$("#inputEmail").val());
	var user = new AV.User();

	user.set("username",$("#inputUserName").val());
	user.set("password",$("#inputPassword").val());
	user.set("email",$("#inputEmail").val());
	user.set("phone",$("#inputPhone").val());
	
	user.signUp(null, {
  
		success: function(user) {
 			alert("success!!");
   
    		window.location.assign("../html/fram.htm");

    	},
  
		error: function(user, error) {

   		alert("Error: " + error.code + " " + error.message);
 		 }
	});
});
$("#btn_emailrest_submit").click(function(){
	    AV.initialize("km2pbwjnqgjfoy5po5asqxt2wc9y13etx2vpd61vftu996po", "rrnz02ie5fa6ewh1vn5hfejulrkyjho8pjjx8gy7xjani094");
	    alert($("#EmailRest").val());
	    AV.User.requestPasswordReset("253760780@qq.com", {
 		 success: function() {
 		 	alert("已经发送邮件，请查收！");
 		 	window.location.assign("../html/fram.htm");
  		},
  		 error: function(error) {
    	
    	alert("Error: " + error.code + " " + error.message);
  		}
	});
});

$("#btn_user_reset").click(function(){
 var currentUser = AV.User.current();
 if(currentUser)
 {
 
 	currentUser.set("email",$("#UserinfEmail").val());
 	currentUser.set("phone",$("#UserinfPhone").val());
 	currentUser.save(null,{
 		success:function(user)
 		{
 			 	alert("success!!");
 		},
 		error: function(user, error) {

   		alert("Error: " + error.code + " " + error.message);
 		 }
 	});
 };
});



$("#btn_user_cancal_1").click(function(){
	window.location.assign("../html/fram.htm");
});
$("#btn_user_cancal_2").click(function(){
	window.location.assign("../html/fram.htm");
});
$("#btn_emailrest_cancal").click(function(){

	window.location.assign("../html/fram.htm");
});
$("#forgetpassward").click(function(){
	window.location.assign("../html/PasswordRest.html");
});



$("#useraccount").click(function(){
	window.parent.frames[1].location="../html/PasswordRest.html";
});

$("#userinf").click(function(){
		window.parent.frames[1].location="../html/userinf.html";
});

$("#userpasswd").click(function(){
		window.parent.frames[1].location="../html/PasswordRest.html";
});



$("#myindex").click(function(){
   	 document.getElementById("mainIframe").src="./html/fram.htm";
   	 document.getElementById("f1").className="active";
   	 document.getElementById("f2").className="";
   	 document.getElementById("user_login").className="";
	 document.getElementById("user_register").className="";
});
$("#f1").click(function(){
   	 document.getElementById("mainIframe").src="./html/fram.htm";
   	 document.getElementById("f1").className="active";
   	 document.getElementById("f2").className="";
   	 document.getElementById("user_login").className="";
	 document.getElementById("user_register").className="";
});
$("#f2").click(function(){
   	 document.getElementById("mainIframe").src="./html/userfram.html";
   	 document.getElementById("f1").className="";
   	 document.getElementById("f2").className="active";
   	 document.getElementById("user_login").className="";
	 document.getElementById("user_register").className="";
});
$("#f3").click(function(){
   	 document.getElementById("mainIframe").src="./html/userfram.html";
});

$("#user_register").click(function(){
	document.getElementById("mainIframe").src="./html/register.html";
	document.getElementById("f1").className="";
	document.getElementById("f2").className="";
	document.getElementById("user_login").className="";
	document.getElementById("user_register").className="active";
});

$("#user_login").click(function(){
	document.getElementById("mainIframe").src="./html/login.html";
	document.getElementById("f1").className="";
	document.getElementById("f2").className="";
	document.getElementById("user_register").className="";
	document.getElementById("user_login").className="active";
});


$("#user_count").mouseover(function(){
	
});

$("#user_count").mouseout(function(){

});


});

function init()
{
 AV.initialize("km2pbwjnqgjfoy5po5asqxt2wc9y13etx2vpd61vftu996po", "rrnz02ie5fa6ewh1vn5hfejulrkyjho8pjjx8gy7xjani094");
	    var currentUser = AV.User.current();
		if (currentUser) {
			var query = new AV.Query(AV.User);
			query.equalTo("username",currentUser.get('username')); 
			query.find({
  			success: function(results) {
  				if(results.length==1)
  				{
  				var obj=results[0];
  				$("#UserinfName").text(obj.get("username"));
  				$("#UserinfEmail").val(obj.get("email"));
  				$("#UserinfPhone").val(obj.get("phone"));
  				}else{
  					alert("多个用户!\n"+results.length);
  				}
  			}
			});
		} else {
    		alert("未登陆!");
		};
};