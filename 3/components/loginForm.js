var Vue = require('vue')

module.exports('user-login',{
  template:'#login-template',
  data:function(){
    return{
      userid:'',
      password:''
    }
  },
  methods:{
    login:function(){
      return auth.login(this.userid,this.password)
    }
  }
})
var auth={
  login:function(id,pass){
    return({user:id,password:pass})
  }
}
