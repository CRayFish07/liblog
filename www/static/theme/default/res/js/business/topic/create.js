var editor=new wangEditor("editor");editor.config.menus=["bold","underline","italic","fontsize","strikethrough","unorderlist","orderlist","img","link","forecolor","bgcolor","location","table","emotion","insertcode","eraser","fullscreen"],editor.config.uploadParams={__CSRF__:G_csrf},editor.config.emotions={"default":{title:"默认",data:"/static/theme/default/res/emotions.data"}},editor.config.uploadImgFileName="img",editor.config.uploadImgUrl="/topic/create/uploadeditor",console.log(G_csrf),editor.create(),$("#savetopic").click(function(){var t=editor.$txt.html(),e=$.trim(t),a=editor.$txt.text();if(""===$.trim(a))return $(".reply-error").remove(),$("#savetopic").after('<span class="reply-error">回复内容不能为空！</span>'),!1;var o={title:$("#topicTitle").val(),text:a,content:e,item:$("#tab-value").val(),author:$("#uname").val(),createtime:new Date,updateauthor:$("#uname").val(),updatetime:new Date,updatepic:$("#upic").val(),__CSRF__:G_csrf};$.ajax({url:"/topic/create/doadd",data:o,type:"POST",success:function(t){0===t.errno?window.location.href="/topic.html":alert(t.errmsg)}})}),$("#updatetopic").click(function(){var t=editor.$txt.html(),e=$.trim(t),a={id:$("#tid").val(),title:$("#topicTitle").val(),content:e,item:$("#tab-value").val(),author:$("#uname").val(),createtime:new Date,updateauthor:$("#uname").val(),updatetime:new Date,updatepic:$("#upic").val(),__CSRF__:G_csrf};$.ajax({url:"/topic/create/doadd",data:a,type:"POST",success:function(t){0===t.errno?window.location.href="/topic.html":alert(t.errmsg)}})});