/**
 * 
 *///check()関数を定義
function check(){
	//IDが未入力でないかチェック
	if(document.login.id.value==""){
		window.alert("IDが未入力です");
		return false;
	//パスワードが未入力でないかチェック
	}else if(document.login.pass.value==""){
		window.alert("パスワードが未入力です");
		return false;
	}else if(document.login.id.value=="ID" ||document.login.id.value=="mail" && document.login.pass.value=="PS"){
		return true; //IDパスワードベタ打ち
	}
	window.alert("IDもしくはPWが正しくありません");
	return false;
}