function qqLogIn(ab,cd)
{
    alert(ab+"\n"+cd);
    AV.initialize("km2pbwjnqgjfoy5po5asqxt2wc9y13etx2vpd61vftu996po", "rrnz02ie5fa6ewh1vn5hfejulrkyjho8pjjx8gy7xjani094");
    AV.User.logIn(ab,cd,{
        success:function(user)
        {   
            alert("登录成功!!");
        },
        error:function(user,error){
            alert("error:"+error.code+"\n message:"+error.message);

        }
    });
    return true;
};

$(document).ready(function(){
     AV.initialize("km2pbwjnqgjfoy5po5asqxt2wc9y13etx2vpd61vftu996po", "rrnz02ie5fa6ewh1vn5hfejulrkyjho8pjjx8gy7xjani094");
    $("#btn2").click(function(){
   
    AV.User.logIn($("#loginUserName").val(),$("#loginPassword").val(),{
        success:function(user)
        {   
            alert("登录成功!!");
        },
        error:function(user,error){
            alert("error:"+error.code+"\n message:"+error.message);

        }
    });
    });
});