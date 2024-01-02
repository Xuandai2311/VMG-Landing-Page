<template>
  <section id="VMG" class="bg-white">
    <div class="container mx-auto text-justify px-6 pt-4 pb-12">
      <img class="w-full" src="~assets/img/vmg.png" alt="Giới thiệu về VMG" />
      <div class="text-center my-10">
        <h1 class="uppercase text-base font-bold text-2xl my-3">GIỚI THIỆU VỀ VMG</h1>
        <img class="mx-auto my-3" src="~assets/img/line.png?inline" alt slot="svg" />
      </div>
      <div class="grid lg:grid-cols-2 gap-24 lg:gap-20 mt-24">
        <div class="rounded-2xl shadow-normal p-10 pt-20 flex justify-center relative">
          <img
            class="my-3 absolute text-center"
            style="top: -20%;"
            src="@/assets/img/vector1.png"
            alt
          />
          <p>Việt Nam Marketing là một hiệp hội trải qua hơn 10 năm hình thành và phát triển trong ngành Marketing với nhiều sự kiện, hội thảo chia sẻ những Case study thực tế của các doanh nghiêp lớn, các dự án được thực hiện cùng doanh nghiệp, tổ chức đi đầu trong ngành Marketing.</p>
        </div>
        <div class="rounded-2xl shadow-normal p-10 pt-20 flex justify-center relative">
          <img
            class="my-3 absolute text-center"
            style="top: -20%;"
            src="@/assets/img/vector2.png"
            alt
            slot="svg"
          />
          <vector2 />
          <p>Bước sang giai đoạn phát triển mới, VMG mong muốn thực hiện sứ mệnh chia sẻ những định hướng mới trong ngành Marketing, đồng thời đào tạo nguồn nhân lực chất lượng cao nhằm mục tiêu phát triển toàn diện cho ngành Marketing. Là nơi kết nối các tổ chức, doanh nghiệp và các trường đào tạo, học sinh, sinh viên trong ngành.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
</style>