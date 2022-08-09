export default {
  dev: {
    '/api': {
      target: 'https://dev.com',
      pathRewrite: { '/api': '' },
      changeOrigin: true,
    },
  },
  test: {
    '/api': {
      target: 'https://test.com',
      pathRewrite: { '/api': '' },
      changeOrigin: true,
    },
  },
};
