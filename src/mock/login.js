import {param2Obj} from '@/utils'

const userMap = {
    admin: {
      role: ['admin'],
      token: 'admin',
      introduction: '我是超级管理员',
      avatar: 'tx.png',
      name: 'Super Admin'
    },
    editor: {
      role: ['editor'],
      token: 'editor',
      introduction: '我是编辑',
      avatar: 'tx.png',
      name: 'Normal Editor'
    },
    developer: {
      role: ['develop'],
      token: 'develop',
      introduction: '我是开发',
      avatar: 'tx.png',
      name: '工程师小王'
    }
  }

  export default {
    loginByUsername: config => {
      const { username } = JSON.parse(config.body)
      return userMap[username]
    },
    getUserInfo: config => {
      const { token } = param2Obj(config.url)
      if (userMap[token]) {
        return userMap[token]
      } else {
        return false
      }
    },
    logout: () => 'success'
  }