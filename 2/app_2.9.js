var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0
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
  },
  filters:{
    numberWithDelimiter:function(value){
      if(!value){
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
    }
  },
  computed:{
    totalPrice:function(){
      return this.items.reduce(function(sum,item){
        return sum + (item.price * item.quantity)
      },0)
    },
    totalPriceWithTax:function () {
      return Math.floor(this.totalPrice*1.10)
    },
    someFunc:function(){
      return this.items
    },
    canBuy:function(){
      return this.totalPrice>=1000
    },
    errorMessageClass:function (){
      return {
        error: !this.canBuy
      }
    },
    errorMessageStyle:function(){
        return {
          color: this.canBuy ? '' : 'red',
          border: this.canBuy ? '' : '1px solid red'
       }
    }
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
