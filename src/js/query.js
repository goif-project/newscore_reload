const $ = require("jquery");

$(function(){
  setInterval(function(){Query()},1000);
});

function Query(){
  $.ajax({
   type: "POST",
   url: "http://mayomayooo.sakura.ne.jp/golf_db/select_score_new.php",
   dataType : "json",
   cache: "false"
 }).done(function(data){
   //  保存成功をアラート表示
   console.log("あごおお");
   console.log(data);
   var num = 0
   var str = "";
   for(var i in data.list){
       str += "<li>";
       str += "<p class='name'>"+data.list[i].user_name+"</p>";
       str += "<p class='total'>"+data.list[i].score+" 点</p>";
       str += "</li>";
   }

   $('#messages').html(str);
 }).fail(function(XMLHttpRequest, textStatus, errorThrown){
   console.log(XMLHttpRequest);
   console.log(textStatus);
   console.log(errorThrown);
 });
};

export {Query}
