// JavaScript Documen
$(function(){ 
	selectsite();
   });
 function selectsite(){
        $.ajax({
                url:host+"UPM_API/v1.0/selections/sites",
                  method: "get",
                  async: true,
                  dataType: "json",
                  success: function(result, status, xhr) {
                    var json;
                    console.log(json);
                    for(i in result){                     
                      json=result[i];
                      var html="<option value='"+json.id+"'>"+json.text+"</option>"
                      $("#siteId").append(html);
                    }
                    
                  },
                  error: function(XMLHttpRequest, status, jqXHR, textStatus, e) {
                    alert("未连接服务器");
                      console.error("未连接服务器 =" + status);
                  }
            });
      }