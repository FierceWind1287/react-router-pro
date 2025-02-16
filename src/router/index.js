import Login from '../page/Login'
import Article from '../page/Article'
import { createBrowserRouterm, createHashRouter } from 'react-router-dom'
import Board from '../page/Board'
import About from '../page/About'
import Layout from '../page/Layout'
import NotFound from '../page/NotFound'
//返回一个router实例
const router = createHashRouter([{
  path: '/',
  element: <Layout />,
  children: [
    //设置为默认二级路由 一级路由访问时，它也能得到渲染
    {
      index: true,
      //定义子路由时可以省略前导斜杠（/）,无论父路由的路径是不是‘/’。
      // 这是因为子路由的路径是相对于其父路由的路径进行解析的。
      element: <Board />
    },
    {
      path: 'about',
      element: <About />
    }]
},
{
  path: '/login',
  element: <Login />
},
{
  path: '/article/:id/:name',
  element: <Article />
},
{
  path: '*',
  element: <NotFound />

}])

export default router