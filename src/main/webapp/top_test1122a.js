/**
 * hello関数
 */
function check(){
			//IDが未入力ではないかチェック
		if(document.login.id.value == ""){
			window.alert("IDが未入力です。");
			return false;
			//パスワードが未入力ではないかチェック
		}else if(document.login.pass.value == ""){
			window.alert("パスワードが未入力です。");
			return false;
		}
		return ture;
	}
