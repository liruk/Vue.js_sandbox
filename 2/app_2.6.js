var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 1
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0
  }
]

var vm = new Vue({
  el: '#app',
  data:{
    items:items
  }
})
vm.$watch(function(){
  return this.items[0].quantity
},function(quantity){
  console.log(quantity)
})
var MyButton = new Vue({
  el:'#b-button',
  data:{
    loggedInButton:'ログインしてるから買えるよ'
  }
})
var BoolButton = new Vue({
  el:'#bool-button',
  data:{
    canBuy:false
  }
})
