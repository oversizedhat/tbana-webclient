<template>
  <div class="flex-container">
    <div class="green">
      {{ green }}
    </div>
    <div class="orange">
      {{ orange }}
    </div>
    <div class="red">
      {{ red }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpBar',
  props: {

  },
  data: () => ({
    green: ">5min",
    orange: "<5min",
    red: "<2min"
  }),
  methods: {
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content:space-evenly;
}
div {
  margin-bottom: 2px;
  width: 100%;
}
.green {
  background-color: green;
}
.orange {
  background-color: orange;
}
.red {
  background-color: red;
}
</style>
