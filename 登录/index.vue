<!-- 用户登录 -->
<template>
<div></div>
</template>

<script>
import auth from './auth'
export default {
name: 'my-login',
data() {
    // 表单验证
    const CheckRule = (rule, value, callback) => {
        if (/^1[3-9]\d{9}$/.test(value)) {
            callback()
        } else {
            callback(new Error('手机号格式不对'))
        }
    },
return {
    //   登录表单数据对象
    loginForm: {
        username: '',
        password: ''
    },
    // 校验规则对象
    loginRules: {
        username: [
            {required: true, message: '请输入手机号',trigger: 'blur'},
            {validator: CheckRule, trigger: 'blur'}
        ],
        password: [
           {required: true, message: '请输入验证码',trigger: 'blur'},
            { len: 6, message: '验证码6个字符', trigger: 'blur' } 
        ]
    }
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
methods: {
    // 登录函数
    login () {
        this.$refs.loginForm.validator(async valid => {
            if (valid) {
                try {
                    const res = await this.$http.post ('authorizations', this.loginForm)
                   auth.setUser(res.data.data)
                   this.$router.push('/')
                } catch (e) {
                    this.$message.error('手机号或验证码错误')
                }
            }
        })
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>




