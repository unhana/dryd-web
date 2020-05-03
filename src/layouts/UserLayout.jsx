import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useIntl, connect } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import SelectLang from '@/components/SelectLang';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';

const UserLayout = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>多人运动</span>
              </Link>
            </div>
            <div className={styles.desc}>多人运动,时间管理,你的健身好助手</div>
          </div>
          {children}
        </div>
        <DefaultFooter
          copyright="罗志祥时间管理股份有限公司"
          links={[
            {
              key: 'web',
              title: [<GithubOutlined />, '前端'],
              href: 'https://github.com/wangzhaoya/dryd-web',
              blankTarget: true,
            },
            {
              key: 'server',
              title: [<GithubOutlined />, '后端'],
              href: 'https://github.com/wangzhaoya/dryd',
              blankTarget: true,
            },
          ]}
        />
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
