import { Link, useNavigate } from "react-router-dom"
const Login = () => {//命名组件必须大写首字母，不然报错
  const navigate = useNavigate()
  return (
    <div>
      我是login页
      {/**声明式的写法 */}
      <Link to='/article'>跳转到文章页</Link>
      {/**命令式的写法 */}
      <button onClick={() => navigate('/article')}>跳转到文章页</button>
      <button onClick={() => navigate('/article?id=1001&name=jason')}>searchParams传参</button>
      <button onClick={() => navigate('/article/1001/jason')}>Params传参</button>
    </div>
  )
}

export default Login