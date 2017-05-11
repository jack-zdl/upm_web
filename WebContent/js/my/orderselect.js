$(function(){
	
	selectUserRole();
	selecArchId();
	selecscale();
	dataDirDeviceType();
	backupDirDeviceType();
   });

 function selectUserRole(){
	 var serviceid=$("#serviceNameId").val();
        $.ajax({
                url:host+"UPM_API/v1.0/selections/primary-roles?definitionServId="+serviceid,
                  method: "get",
                  async: true,
                  dataType: "json",
                  success: function(result, status, xhr) {
                    debugger;
                    alert("ssss");
                    var json;
                    console.log(json);
                    for(i in result){                     
                      json=result[i];
                      var html="<option value='"+json.id+"'>"+json.text+"</option>"
                      $("#definitionUserRoleId").append(html);
                    }
                    
                  },
                  error: function(XMLHttpRequest, status, jqXHR, textStatus, e) {
                    alert("未连接服务器");
                      console.error("未连接服务器 =" + status);
                  }
            });
      }
 function selecArchId(){
	 var serviceid=$("#serviceNameId").val();
        $.ajax({
                url:host+"UPM_API/v1.0/selections/primary-archs?definitionServId="+serviceid,
                  method: "get",
                  async: true,
                  dataType: "json",
                  success: function(result, status, xhr) {
                	
                    var json;
                    console.log(json);
                    for(i in result){                     
                      json=result[i];
                      var html="<option value='"+json.id+"'>"+json.text+"</option>"
                      $("#definitionSubServArchId").append(html);
                    }
                    
                  },
                  error: function(XMLHttpRequest, status, jqXHR, textStatus, e) {
                    alert("未连接服务器");
                      console.error("未连接服务器 =" + status);
                  }
            });
      }
 function selecscale(){
	 var serviceid=$("#serviceNameId").val();
	 
        $.ajax({
                url:host+"UPM_API/v1.0/selections/primary-scales?definitionServId="+serviceid,
                  method: "get",
                  async: true,
                  dataType: "json",
                  success: function(result, status, xhr) {
                    var json;
                    console.log(json);
                    for(i in result){                     
                      json=result[i];
                      var html="<option value='"+json.id+"'>"+json.text+"</option>"
                      $("#definitionSubServUnitScaleId").append(html);
                    }
                    
                  },
                  error: function(XMLHttpRequest, status, jqXHR, textStatus, e) {
                    alert("未连接服务器");
                      console.error("未连接服务器 =" + status);
                  }
            });
      }
 function selecSoftwareImageId(siteId){
	 var serviceid=$("#serviceNameId").val();
        $.ajax({
                url:host+"UPM_API/v1.0/selections/softwares/primary-image-versions?definitionServId="+serviceid+"&siteId="+siteId,
                  method: "get",
                  async: true,
                  dataType: "json",
                  success: function(result, status, xhr) {
                    var json;
                    console.log(json);
                    for(i in result){                     
                      json=result[i];
                      var html="<option value='"+json.id+"'>"+json.text+"</option>"
                      $("#subServSoftwareImageId").append(html);
                    }
                    
                  },
                  error: function(XMLHttpRequest, status, jqXHR, textStatus, e) {
                    alert("未连接服务器");
                      console.error("未连接服务器 =" + status);
                  }
            });
      }
 function dataDirDeviceType(){
	 var serviceid=$("#serviceNameId").val();
	 
        $.ajax({
                url:host+"UPM_API/v1.0/selections/data-dir-types",
                  method: "get",
                  async: true,
                  dataType: "json",
                  success: function(result, status, xhr) {
                    var json;
                    console.log(json);
                    for(i in result){                     
                      json=result[i];
                      var html="<option value='"+json.id+"'>"+json.text+"</option>"
                      $("#dataDirDeviceType").append(html);
                    }
                    
                  },
                  error: function(XMLHttpRequest, status, jqXHR, textStatus, e) {
                    alert("未连接服务器");
                      console.error("未连接服务器 =" + status);
                  }
            });
      }
 function backupDirDeviceType(){
	 var serviceid=$("#serviceNameId").val();
	 
        $.ajax({
                url:host+"UPM_API/v1.0/selections/backup-dir-types",
                  method: "get",
                  async: true,
                  dataType: "json",
                  success: function(result, status, xhr) {
                    var json;
                    console.log(json);
                    for(i in result){                     
                      json=result[i];
                      var html="<option value='"+json.id+"'>"+json.text+"</option>"
                      $("#backupDirDeviceType").append(html);
                    }
                    
                  },
                  error: function(XMLHttpRequest, status, jqXHR, textStatus, e) {
                    alert("未连接服务器");
                      console.error("未连接服务器 =" + status);
                  }
            });
      }