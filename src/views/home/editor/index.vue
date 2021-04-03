<template>
  <div class="dashboard-editor-container">
    <div class=" clearfix">
      <div class="info-container">
        <span class="display_name">{{ name }}</span>
        <span style="font-size:20px;">Editor's Dashboard</span>
      </div>
      <img :src="emptyGif" class="emptyGif">
    </div>
  </div>
</template>

<script>
export default {
	name: 'DashboardEditor',
	data() {
		return {
			emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3',
			name: "Editor"
		}
	}
}
</script>

<style lang="scss" scoped>
  .emptyGif {
    display: inline;
    width: 50%;
    margin: 0 0 0 350px;
	background-color: transparent !important;
  }
  .dashboard-editor-container {
    background-color: #e3e3e3;
    min-height: 87vh;
    padding: 50px 60px 0px;
    .info-container {
      position: relative;
      margin-left: 50px;
      height: 10px;
      line-height: 200px;
      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }
</style>
