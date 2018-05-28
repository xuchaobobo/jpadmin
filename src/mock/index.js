import Mock from 'mockjs'
import LoginAPI from './login'



Mock.setup({
    timeout:'350-600'
})

//登录
Mock.mock(/\login\/login/,'post',LoginAPI.loginByUsername)

export default Mock