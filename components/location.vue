<template>
  <section class="bg-white">
    <div class="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-0 px-6 pt-4 pb-12">
      <div>
        <div class="mb-5">
          <h1 class="uppercase text-base font-bold text-2xl my-3">địa điểm tổ chức</h1>
          <img class="my-3" src="~assets/img/line.svg?inline" alt slot="svg" />
        </div>
        <div class="grid gap-5">
          <span class="flex gap-5 items-center">
            <i class="el-icon-location text-base"></i>
            <p style="width: 75px;">Địa điểm</p>
            <p>
              Học viện Ngân Hàng
              <br />12 P. Chùa Bộc, Quang Trung, Đống Đa, Hà Nội
            </p>
          </span>
          <span class="flex gap-5 items-center">
            <i class="el-icon-phone text-base"></i>
            <p style="width: 60px;">Hotline</p>
            <p>1900 54 54 54</p>
          </span>
          <span class="flex gap-5 items-center">
            <i class="el-icon-message text-base"></i>
            <p style="width: 60px;">Email</p>
            <p>vmg@gmail.com</p>
          </span>
        </div>
        <a href="#Event">
          <button
            class="bg-base text-white font-bold text-xl rounded-lg px-10 py-3 mt-10"
          >Đăng ký ngay</button>
        </a>
      </div>
      <img src="~assets/img/location.png" alt="Địa điểm tổ chức: Học viện Ngân Hàng" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>