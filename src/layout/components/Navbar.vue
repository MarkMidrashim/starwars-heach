<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="false" class="hamburger-container"  />
    <breadcrumb style="margin-left: 20px;" id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  data() {
	  return {
		  activeClient: ''
	  }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
	.active-client-logo {
		max-width: 85px;
		max-height: 42px !important;
		padding: 4px;
	}
    .right-menu-item {
		display: inline-block;
		padding: 0 8px;
		height: 100%;
		font-size: 18px;
		color: #5a5e66;
		vertical-align: text-bottom;
		&.hover-effect {
			cursor: pointer;
			transition: background .3s;
			&:hover {
			background: rgba(0, 0, 0, .025)
			}
		}
	}
	#header-search {
		margin-right: 30px;
	}
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 8px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 28px;
          height: 28px;
          border-radius: 50px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -16px;
          top: 12px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
