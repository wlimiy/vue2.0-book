<!--<template>-->
    <!--<div>-->
      <!--计数器：<button @click="minus">-</button><br/>-->
      <!--当前：{{$store.state.count}}<br/>-->
      <!--计数器：<button @click="add">+</button><br/>-->
      <!--{{$store.getters.val}}-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import * as Types from '../store/mutations-types'-->
    <!--export default{-->
        <!--data(){-->
            <!--return {}-->
        <!--},-->
        <!--methods: {-->
            <!--add(){-->
                <!--this.$store.commit(Types.INCREMENT,1)-->
            <!--},-->
          <!--minus(){-->
              <!--this.$store.commit(Types.DECREMENT,1)-->
            <!--}-->
        <!--},-->
        <!--computed: {},-->
        <!--components: {}-->
    <!--}-->
<!--</script>-->
<!--<style scoped>-->

<!--</style>-->
<template>
  <div>
    计数器：<button @click="minus">-</button><br/>
    当前：{{$store.state.count}}<br/>
    计数器：<button @click="add">+</button><br/>
    {{$store.getters.val}}
  </div>
</template>
<script>
  import * as Types from '../store/mutations-types'
  export default{
    data(){
      return {}
    },
    methods: {
      add(){
        this.$store.commit(Types.INCREMENT,1)
      },
      minus(){
        this.$store.commit(Types.DECREMENT,2)
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped>

</style>
