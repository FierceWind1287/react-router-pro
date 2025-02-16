import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      我是一级路由layout
      <Link to='/'>面板</Link>
      {/**因为默认显示board，所以二级路由路径要改为‘/’ */}
      <Link to='/about'> 关于</Link>
      {/**配置二级路由出口 */}
      <Outlet />
    </div>
  )
}
export default Layout