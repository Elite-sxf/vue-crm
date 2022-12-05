<template>
    <div class="con">

        <section class="login">
            <Tabs :value="loginTab">
                <TabPane label="密码登录" name="tab1">
                    <div class="form-item">
                        <div class="item">
                            <label class="">账号</label>
                            <Input />
                        </div>
                        <div class="item">
                            <label class="">密码</label>
                            <Input :type="showEye?'text': 'password'"/>

                            <div class="eyebtn">
                                <Icon v-show="showEye" @click="showEye=!showEye" size="20" type="ios-eye" />
                                <Icon v-show="!showEye" @click="(showEye=!showEye)" size="20" type="ios-eye-off" />
                                <a href="javascript:;">忘记密码？</a>
                            </div>
                            
                        </div>
                    </div>
                    <a class="regTxt" href="javascript:;" @click="goReg">注册账号</a>
                    <Button class="confirm" type="primary">登陆</Button>
                </TabPane>
                <TabPane label="扫码登陆" name="tab2">
                    <canvas id="canvas" width="200" height="200"></canvas>
                </TabPane>
            </Tabs>
        </section>
    </div>
</template>

<script>
export default {
    mounted() {
        // console.log(this.$route);
        // {HTMLCanvasElement}
        // var can = document.getElementById("canvas");
        var can = document.getElementsByTagName("canvas")[0]
        var c = can.getContext("2d");

        c.strokeStyle = "red"
        c.rect(50,20, 100, 100)
        c.font = '24px STheiti, SimHei';
        c.fillText("🦄",88,72)
        c.stroke()
    },
    data() {
        return {
            loginTab: "tab1",
            showEye: false,
        }
    },
    methods: {
        goReg() {
            this.$router.push("/register")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/common.scss";
    .con {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .login {
            width: 500px;
            height: 300px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    }
    /deep/.ivu-tabs-bar{
        border-bottom: none;
    }
    
    /deep/.ivu-tabs-nav{
        width: 100%;
        height: 50px;
        line-height: 36px;
        position: relative;
        font-size: 16px;

        .ivu-tabs-tab:nth-child(1){
            color: aqua;
            font-size: 30px;
        }
       
    }
    /deep/.ivu-tabs-nav::before{
        width: 1px;
        height: 20px;
        position: absolute;
        left: 48%;
        top: 16px;
        background: gray;
    }
    /deep/ .ivu-tabs-ink-bar-animated{
        width: 0 !important;
    }

    .form-item {
        @include form-item;
        margin: 10px 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        text-align: left;

        .item {
            position: relative;
            label {
                text-align: left;
                margin-left: 20px;
                width: 40px;
            }

            .ivu-input-wrapper{
                width: auto;
            }
            /deep/input {
                border: none;
                outline: none;
                box-shadow: inset 0 0 0 20px #fff;
                padding: 0;
                vertical-align: super;
                height: auto;
            }
            /deep/input:focus {
                outline: none !important;
                border: none;

            }
            .eyebtn {
                position: absolute;
                top: 0;
                right: 20px;
                cursor: pointer;
            }
        }
        .item:nth-child(1){
            border-bottom: 1px solid #ccc;
        }
        
    }
    .regTxt {
        float: left;
        margin-left: 20px;
        margin-top: 26px;
    }
    .confirm {
        width: 140px;
        float: right;
        margin-right: 30px;
        margin-top: 20px;
    }
</style>