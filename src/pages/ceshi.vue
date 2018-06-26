<template>
	<div>
		<p>{{count}}
		    <button @click="inc">+</button>
		    <button @click="dec">-</button>
	  	</p>
	</div>
</template>

<script>

import store from '@/store'

export default {
  name: 'Ceshi',
  data () {
    return {
      // count: 2
    }
  },
  computed: {
    count () {       //计算属性不能在data里定义
        return this.$store.state.count  //直接调用vue对象的方法
        return store.state.count      //这种写法也可以，先引进来再调用
    }
  },
  created(){

  },
  mounted(){

  },
  methods: {
    inc () {
      this.$store.commit('add')
    },
    dec () {
        this.$store.commit('reduce')
    }
  }
}
</script>
<style scoped>

</style>