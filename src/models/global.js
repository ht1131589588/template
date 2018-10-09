export default {
  namespace: 'global',
  state: {
    login: localStorage.login || false, //登录状态
    menus: localStorage.menus?JSON.parse(localStorage.menus):[], //菜单
    userInfo: localStorage.userInfo?JSON.parse(localStorage.userInfo):null, //用户信息
  },
  reducers: {
    // 登录保存个人信息
    signin(state,data) {
      localStorage.setItem('login',data.login || false);
      localStorage.setItem('menus',data.menus ? JSON.stringify(data.menus):[]);
      localStorage.setItem('userInfo',data.userInfo ? JSON.stringify(data.userInfo):null);
      return {...state,...data}
    },
    // 登出移除个人信息
    signout(state) {
      localStorage.clear();
      return {
        ...state,
        login: false,
        menus: [],
        userInfo: null
      }
    }
  }
};