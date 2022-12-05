<template>
    <div>
        <section class="box">
            <Form ref="formValidate" :model="formItem" :label-width="80" :rules="rules">
                <FormItem label="账号" prop="name">
                    <Input v-model="formItem.name" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input type="password" v-model="formItem.password" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="确认密码" prop="confirmPassword">
                    <Input type="password" v-model="formItem.confirmPassword" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="手机号" prop="phone">
                    <Input v-model="formItem.phone" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                </FormItem>
            </Form>
        </section>




        <Button @click="back">返回</Button>
    </div>
</template>

<script>
export default {

    data() {
        const validator = (rule, value, callback, source, options)=> {
            
            if(value !== this.formItem.password){
                console.log('nono');
                
                return callback(new Error('两次输入密码不一致'));
            }else {
                callback()
            }
        }
        return {
            formItem: {
                name: '',
                password: '',
                confirmPassword:"",
                phone: '',
            },
            rules: {
                name: [{ required: true, message: 'The name cannot be empty', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                confirmPassword: [{ required: true, message: '两次输入密码不一致', trigger: 'blur',validator }],
            }
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },


        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(this.formItem);
                    
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
    }
}
</script>

<style lang="scss" socped>

.box {
    margin: 0 auto;
    min-height: 100px;
    width: 600px;
    margin-top: 50px;
    padding: 20px 30px 0 0;
    border: 1px solid #c2c2c2;
    box-shadow: 0 0 4px 2px rgb(230, 218, 218);
    border-radius: 10px;
}

</style>