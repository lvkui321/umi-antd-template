declare interface RouteConfig {
  path?: string;
  name?: string;
  component?: string;
  icon?: string;
  redirect?: string;
  target?: '_parent' | '_blank' | '_self' | '_top';
  headerRender?: false;
  footerRender?: false;
  menuRender?: false;
  menuHeaderRender?: false;
  hideInMenu?: false;
  // 隐藏子菜单
  hideChildrenInMenu?: false;
  hideInBreadcrumb?: false;
  // 子项往上提
  flatMenu?: false;
  access?: string;
}
