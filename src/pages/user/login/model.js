import { history } from 'umi';
import { message } from 'antd';
import { fakeAccountLogin } from './service';
import { getPageQuery, setAuthority } from './utils/utils';
import cookie from 'react-cookies';

const Model = {
  namespace: 'userAndlogin',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      let accountType = cookie.load('accountType');
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully

      if (response.success) {
        message.success('登录成功！');
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;

        if (redirect) {
          const redirectUrlParams = new URL(redirect);

          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);

            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }

        history.replace(redirect || '/');
      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.data.accountType);
      return { ...state, ...payload };
    },
  },
};
export default Model;
