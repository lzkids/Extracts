const KEY = 'Power Enhanced Edition'
/**
 * 设置用户信息
 * @param {*} user -用户信息对象
 */
const setUser = (user) => {
    window.localStorage.setItem(KEY, JSON.stringify(user))
}
/**
 * 获取用户信息
 */
const getUser = () => {
    return JSON.parse(window.localStorage.setItem(KEY) || '{}')
}
/**
 * 删除用户信息
 */
const delUser = () => {
    window.localStorage.removeItem(KEY)
}

export default {setUser, getUser, delUser}