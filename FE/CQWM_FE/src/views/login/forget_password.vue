<template>
	<!-- 忘记密码 -->
  <el-button @click="open_fg_dio">
    Click to open the Dialog
  </el-button>
  <el-button @click="open_cg_dio">
    Click to open the Dialog
  </el-button>

  <el-dialog  v-model="dialog_state.forget_Password" title="忘记密码" width="400px">
<!--		<el-form class="login-form" :rules="rules" >-->
      <el-form class="login-form" >

      <el-form-item label="输入您的注册账号" prop="account" >
				<el-input v-model="inform.account" placeholder="输入您的注册账号" />
			</el-form-item>
			<el-form-item label="输入您的个人邮箱" prop="email">
				<el-input v-model="inform.email" placeholder="输入您的个人邮箱" />
			</el-form-item>
		</el-form>
		<!-- 底部内容 -->
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="close_fg_dio">取消</el-button>
				<el-button type="primary">
					下一步
				</el-button>
			</span>
		</template>
	</el-dialog>
	<!-- 修改密码 -->
	<el-dialog v-model="dialog_state.change_Password" title="修改密码" width="400px">
		<el-form class="login-form"  >
			<el-form-item label="输入您的新密码">
				<el-input placeholder="输入您的新密码" show-password/>
			</el-form-item>
			<el-form-item label="再次确认您的新密码" >
				<el-input placeholder="再次确认您的新密码" show-password/>
			</el-form-item>
		</el-form>
		<!-- 底部内容 -->
<!--    dialog组件内部封装了footer 插槽，下列为这个插槽内插入内容-->
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="close_cg_dio">取消</el-button>
				<el-button type="primary">
					确定
				</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
//import section
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { verify, reset } from '@/api/login.js'

//interface section
  interface inform_data{
    account : string|null;
    email : string|null;
    password ?:string|null;
    nextPassword? : string|null;
  }

  //variable section
  const dialog_state=reactive({
    forget_Password:false,
    change_Password:false,
  })
const inform:inform_data = reactive({
  account:'1234',
  email:'1234',
})
const rules = reactive({
  account: [
    { required: true, message: '请输入您的注册账号', trigger: 'blur' },
  ],
  email: [
    { required: true, message:'请输入正确的邮箱形式', trigger: 'change'}
  ],
  password: [
    { required: true, message: '请输入您想修改的密码', trigger: 'blur' },
  ],
  nextPassword: [
    { required: true, message: '请再次确认您的新密码', trigger: 'blur' },
  ],
})

//自定义校验规则函数
// const validatorUserName = (rule: any, value: any, callback: any) => {
//   //rule:即为校验规则对象
//   //value:即为表单元素文本内容
//   //函数:如果符合条件callBack放行通过即为
//   //如果不符合条件callBack方法,注入错误提示信息
//   if (value.length >= 5) {
//     callback();
//   } else {
//     callback(new Error('账号长度至少五位'));
//   }
// }

//function section
  function test(){
    dialog_state.forget_Password=true
  }
  function test1(){
    dialog_state.change_Password=true
  }


  const open_fg_dio=()=>{
    dialog_state.forget_Password=true

  }
  const open_cg_dio=()=>{
    dialog_state.change_Password=true

  }
  const close_fg_dio=()=>{
    dialog_state.forget_Password=false

  }
  const close_cg_dio=()=>{
    dialog_state.change_Password=false

  }

// // 打开验证邮箱和账号的弹窗
// const verifyAccount = async () => {
//   const res = await verify(inform)
//   if(res.status == 0){
//     ElMessage({
//       message: '验证成功',
//       type: 'success',
//     })
//     // localStorage.setItem 存放到浏览器的本地存储空间
//     // sessionStorage.setItem 存放到浏览器的会话存储空间
//     // localStorage.setItem('id',res.id)
//     dialog_state.forget_Password = false
//     dialog_state.change_Password = true
//   }else{
//     ElMessage.error('验证失败')
//   }
// }
//
// const resetPassword = async() =>{
//   if(inform.password==inform.nextPassword){
//     const newPassword = inform.nextPassword
//     // localStorage/sessionStorage.getItem获取我们存储在浏览器的数据
//     // 调用接口
//     await reset(localStorage.getItem('id'),newPassword)
//     ElMessage({
//       message: '修改成功',
//       type: 'success',
//     })
//   }else{
//     ElMessage.error('修改失败,请检查密码是否一致')
//   }
// }
  //expose section
  defineExpose({
    open_fg_dio
  })

</script>

<style lang="scss" scoped>

</style>