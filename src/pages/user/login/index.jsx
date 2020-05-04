import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox, Space } from 'antd';
import React, { useState } from 'react';
import { Link, connect } from 'umi';
import styles from './style.less';
import LoginFrom from './components/Login';

const { Tab, UserName, Password, Submit } = LoginFrom;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  const { userAndlogin = {}, submitting } = props;
  const response = userAndlogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState('account');

  const handleSubmit = (values) => {
    const { dispatch } = props;
    values.autoLogin = autoLogin;
    dispatch({
      type: 'userAndlogin/login',
      payload: { ...values, type },
    });
  };

  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="账户密码登录">
          {response.success !== undefined && response.success === false && (
            <LoginMessage content={response.msg} />
          )}

          <UserName
            name="userName"
            placeholder="用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </Tab>

        <div>
          <Checkbox
            name={'autoLogin'}
            checked={autoLogin}
            onChange={(e) => setAutoLogin(e.target.checked)}
          >
            自动登录
          </Checkbox>
          <Link
            to="/user/register"
            style={{
              float: 'right',
            }}
          >
            注册账户
          </Link>
        </div>
        <Submit loading={submitting}>登录</Submit>
        <Link to="/user/register">注册账户</Link>
      </LoginFrom>
    </div>
  );
};

export default connect(({ userAndlogin, loading }) => ({
  userAndlogin,
  submitting: loading.effects['userAndlogin/login'],
}))(Login);
