(function($, owner) {
	var BASE_URL='http://192.168.25.175/wuyuan-prevetion/';
	//var BASE_URL='http://192.168.3.34/wuyuan-prevetion/';
	owner.project_url = BASE_URL;
	//owner.project_url = '';
	owner.tokencheck_url=BASE_URL+'server/tokenpass.php';
	owner.login_url=BASE_URL+'server/gettoken.php';
	owner.getfarmers_url=BASE_URL+'server/getfarmers.php';
	owner.delfarmers_url=BASE_URL+'deleteFarmerInfo.do';
	owner.getfarmerinfo_url=BASE_URL+'server/getfarmerinfo.php';
	owner.savefarmerinfo_url=BASE_URL+'saveOrUpdateFarmerInfo.do';
	owner.getreply_url=BASE_URL+'server/getpreventionreply.php';
	owner.getreplyinfo_url=BASE_URL+'server/getpreventionreplyinfo.php';
	owner.savereplyinfo_url=BASE_URL+'updateAntiAndAnimal.do';
	owner.changePwd_url=BASE_URL+'updateWorkerInfo.do';
	owner.avatarupload_url=BASE_URL+'addAvatar.do';
	owner.avatar_url=BASE_URL+'getAvatarajax.do';
	owner.farmerupload_url=BASE_URL+'fileUploadajax.do';
	owner.replyupload_url=BASE_URL+'fileUploadajax.do';
	owner.filedownload_url=BASE_URL+'fileDownloadajax.do';
	
	/**
	 * 本地验证登录信息
	 **/
	owner.validateLogin = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		/* 这里开始检查用户名密码  */
		if (loginInfo.account.length == 0) {
			return callback(errorCode.EMPTY_USERNAME);
		}
		if (loginInfo.password.length == 0) {
			return callback(errorCode.EMPTY_PASSWORD);
		}
		return callback("");
	};
	
	owner.getAttributeValue = function(id, attribute){
		return document.getElementById(id).getAttribute(attribute);
	};
	
	owner.getValue = function(id){
		return document.getElementById(id).value;
	};
	
	owner.setAttributeValue = function(id, attribute, value){
		document.getElementById(id).setAttribute(attribute,value);
	};
	
	owner.setValue = function(id, value){
		document.getElementById(id).value=value;
	};
	
	owner.getValueByText = function(data, text){
		for (var i=0;i<data.length;i++) {
			if(data[i].text===text)
				return data[i].value;
		}
		return "";
	};
	
	owner.getTextByValue = function(data, value){
		for (var i=0;i<data.length;i++) {
			if(data[i].value===value)
				return data[i].text;
		}
		return "";
	};
	
	owner.webQuery = function(func_url, params, onSuccess, onError, retry){
	    var onSuccess = arguments[2]?arguments[2]:function(){};
	    var onError = arguments[3]?arguments[3]:function(){};
	    var retry = arguments[4]?arguments[4]:3;
	    var request= $.ajax(func_url, {
	        data:params,
	        dataType:'json',
	        type:'post',
	        timeout:3000,
	        success:function(data){
	            if(data.err === 'ok'){
	                onSuccess(data);
	            }
	            else{
	                onError(data.code);
	            }
	        },
	        error:function(xhr,type,errorThrown){
	            retry--;
	            if(retry > 0) return owner.webQuery(func_url, params, onSuccess, onError, retry);
	            onError('FAILED_NETWORK');
	        }
	    });
	    return request;
	};
	
	$.ready(function() {
		$('body').on('click', 'a', function(e) {
			e.preventDefault();
		});
	});

}(mui, window.app = {}));