<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto px-8">
      <div class="w-full grid lg:grid-cols-2 gap-10 lg:gap-0 py-6">
        <logo />

        <div class="grid gap-6">
          <h2 class="font-bold text-2xl">Liên hệ</h2>
          <p>Mrs. Nguyễn Minh Ngọc - Trưởng Ban Thư Ký</p>
          <span class="flex items-center">
            <img class="mr-2" src="~assets/img/phone.png?inline" alt slot="svg" />
            <p>0398036816</p>
          </span>
          <span class="flex items-center">
            <img class="mr-2" src="~assets/img/facebook.png?inline" alt slot="svg" />
            <p>Fanpage: VMG - Vietnam Marketing Group</p>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/LogoFooter'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo,
  },
}
</script>
