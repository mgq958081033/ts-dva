import React, { PropTypes } from 'react';
import { Router, Route } from 'dva/router';

// 加载布局

import MainLayout from './components/Layout/MainLayout1';

// 加载程序页面

import IndexPage from './routes/IndexPage.js';

// 导出路由配置

export default ({ history }) => {
  return (
    <Router history={history}>
      <Route component={MainLayout}>
        <Route path="/" component={IndexPage} />
      </Route>
    </Router>
  );
};
