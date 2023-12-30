<template>
  <nav class="fixed w-full z-30 top-0 bg-white">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <logo />
      </div>
      <div class="block lg:hidden pr-4">
        <button class="flex items-center p-1 text-gray-900" @click.prevent.stop="onToggleClick">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-end w-full h-full lg:block lg:w-auto lg:h-auto">
        <div
          :class="show ? 'block' : 'hidden'"
          class="h-screen px-6 pt-2 pb-4 lg:flex lg:items-center lg:p-0 lg:h-auto"
        >
          <el-menu
            :default-active="activeIndex"
            text-color="#000"
            class="el-menu-demo font-bold"
            :mode="show ? 'vertical' : 'horizontal'"
          >
            <el-menu-item index="home">
              <a href="#">Trang chủ</a>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">Về VMG</template>
              <el-menu-item index="2-1">Ban điều hành</el-menu-item>
              <el-menu-item index="2-2">
                <a href="#VMG">VMG Profile</a>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <a href="#timeline">Sự kiện</a>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">Liên hệ</template>
              <el-menu-item index="4-1">Hợp tác & tài trợ sự kiện</el-menu-item>
              <el-menu-item index="4-2">Đề nghị hỗ trợ truyền thông</el-menu-item>
              <el-menu-item index="4-3">Yêu cầu hỗ trợ</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
      <a href="#Event">
        <button class="bg-base hidden lg:block text-white rounded-lg py-1 px-16">
          <strong>Đăng ký</strong>
          <br />
          <span class="text-xxs">Thành viên hiệp hội</span>
        </button>
      </a>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 'home',
    }
  },

  methods: {
    onToggleClick() {
      const show = !this.show
      this.$emit('update:show', show)
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style lang="css" scoped>
.el-menu.el-menu--horizontal {
  border: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border: none;
}
</style>
