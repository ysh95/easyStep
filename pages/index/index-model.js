import Base from '../../static/js/base'
class Index extends Base {
	constructor() {
		super();
	}
	// 登录
	login(data,callBack) {
		console.log('===============')
		console.log(data)
		console.log(callBack)
		var that = this;
		var params = {
		  url: 'auth/login',
		  method:'POST',
		  data:data,
		  sCallBack: function (res) {
			callBack && callBack(res.data);
		  }
		};
		that.request(params);
	};
	// 获取用户信息
	getUserInfo(data,callBack) {
		console.log('===============')
		console.log(data)
		console.log(callBack)
		var that = this;
		var params = {
		  url: 'auth/me',
		  method:'POST',
		  data:data,
		  sCallBack: function (res) {
			callBack && callBack(res.data);
		  }
		};
		that.request(params);
	};
}

export default Index