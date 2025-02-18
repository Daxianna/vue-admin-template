import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/rbac/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/rbac/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/rbac/user/logout',
    method: 'post'
  })
}
