import { defineConfig } from '@umijs/max';
import zh_CN from 'antd/lib/locale/zh_CN';
import { resolve } from 'path';
import proxy from './proxy';
import routes from './routes';
import theme from './theme';

const { APP_ENV = 'dev' } = process.env;

export default defineConfig({
  alias: {
    config: resolve(__dirname, '../config'),
    tools: resolve(__dirname, '../src/utils/tools'),
    pages: resolve(__dirname, '../src/pages'),
    services: resolve(__dirname, '../src/services'),
    components: resolve(__dirname, '../src/components'),
  },
  antd: {
    configProvider: {
      locale: zh_CN,
      space: 16,
    },
    import: false,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes,
  theme,
  // @ts-ignore
  proxy: proxy[APP_ENV],
  npmClient: 'yarn',
});
