<template>
  <div class="relative flex justify-center">
    <img
      class="w-full hidden lg:block"
      src="@/assets/img/banner-hero.png"
      alt="Marketing vượt gió rẽ sóng trong thời kì khủng hoảng"
    />
    <img
      class="w-full block lg:hidden"
      src="@/assets/img/banner-hero_mobile.png"
      alt="Marketing vượt gió rẽ sóng trong thời kì khủng hoảng"
    />
    <a href="#Event" class="absolute mx-auto top-1/2">
      <button class="rounded-lg bg-white px-6 py-4 font-bold">Đăng ký thành viên</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>
