<template>
  <div>
    Filter Todos:
    <select @change="limitTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="5">5</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Filter-Todos",
  methods:{
    limitTodos(e){
        // Get Selected Number 
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        this.$store.dispatch('filterTodos', limit)
    }

  }
};
</script>
<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>


