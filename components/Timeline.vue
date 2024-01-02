<template>
  <section id="timeline" class="Event bg-white">
    <div class="container mx-auto px-6 pt-4 pb-12">
      <div class="text-center mb-5">
        <h1 class="text-base font-bold text-xl my-3">AGENDA SỰ KIỆN</h1>
        <img class="my-3 mx-auto" src="~assets/img/line.png?inline" alt slot="svg" />
      </div>
      <div>
        <span class="flex gap-5 lg:gap-10">
          <div style="width: 43px;"></div>
          <div class="hidden lg:flex gap-20">
            <p class="uppercase font-bold">Thời gian</p>
            <p class="uppercase font-bold">Sự kiện</p>
          </div>
          <p class="block lg:hidden uppercase font-bold">Thời gian & sự kiện</p>
        </span>
        <div v-for="(item, index) in timelines" :key="item" class="border-b pt-4 pb-6">
          <span class="flex items-start gap-5 lg:gap-10">
            <img
              v-if="index != timelines.length - 1"
              src="~assets/img/time.png?inline"
              alt
              slot="svg"
            />
            <div v-else style="width: 43px;"></div>
            <div class="flex-row lg:flex gap-4 lg:gap-12">
              <p
                v-if="item.time"
                style="width: 110px;"
                class="uppercase font-bold"
                :class="item.style ? 'text-base':''"
              >{{ item.time }}</p>
              <div v-if="index === timelines.length - 1" style="width: 110px;"></div>
              <div class="text-justify">
                <p
                  v-if="item.title"
                  class="uppercase font-bold"
                  :class="item.style ? 'text-base':''"
                >{{ item.title }}</p>
                <p v-if="item.content">{{ item.content }}</p>
                <p v-if="item.content1">{{ item.content1 }}</p>
                <p v-if="item.content2">{{ item.content2 }}</p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timelines: [
        {
          time: '14H00 - 14H15',
          title: '',
          content: 'Đón khách',
          style: '',
        },
        {
          time: '14h15 - 14h30',
          title: '',
          content:
            'Khai mạc chương trình và trình chiếu video giới thiệu về VMG, BQT và khách mời, chủ đề của hội thảo',
          style: '',
        },
        {
          time: '14h30- 14h45',
          title: '',
          content:
            'Mr.Hiếu - Giới thiệu về VMG và sứ mệnh kết nối và phát triển nguồn nhân lực cao cấp cho ngành Marketing, tặng bằng khen cho các NTT',
          style: '',
        },
        {
          time: '14h45 - 15h00',
          title: '',
          content:
            'Lễ ký kết NDA với Khoa Quản trị Kinh doanh, Học viện Ngân Hàng',
          style: '',
        },
        {
          time: '15h00 - 15h45',
          title:
            'PHIÊN THẢO LUẬN 1: KINH TẾ KHỦNG HOẢNG, VAI TRÒ CỦA MARKETING Ở ĐÂU?',
          content:
            'Kinh tế vĩ mô còn rất khó khăn, nhiều doanh nghiệp phá sản, nhiều người lao động thất nghiệp, thực tế các hoạt động Marketing trong doanh nghiệp đang như thế nào?',
          content1:
            'Khó khăn? Trong Nguy Có Cơ - Nguy cơ hay là cơ hội cho các marketer trong doanh nghiệp',
          content2:
            'Vai trò của những Marketer sáng tạo, case study " Mỳ tôm thanh long"',
          style: 'base',
        },
        {
          time: '15h45 - 16h00',
          title: '',
          content: 'Q&A cùng khách mời và người tham dự',
          style: '',
        },
        {
          time: '16h00 - 16h15',
          title: 'TEA BREAK',
          content: '',
          style: 'base',
        },
        {
          time: '16h15 - 16h35',
          title: 'MỞ ĐẦU PHIÊN THẢO LUẬN 2: DIGITAL GROWTH & TRANSFORMATION',
          content: '',
          style: 'base',
        },
        {
          time: '16h35 - 17H20',
          title:
            'PHIÊN THẢO LUẬN 2: MARKETING TRONG THỜI ĐẠI TRÍ TUỆ NHÂN TẠO (AI)',
          content:
            'Theo cafeF "Trong đại hội VSMCamp 2023 - Ông Hoàng Nam Tiến nói về "tầng lớp vô dụng" mới: Lập trình viên, dân marketing, hàng chục ngàn cô gái xinh đẹp đang ngồi ở quầy ngân hàng được học hành tử tế sẽ mất việc! Mọi người nghĩ sao về quan điểm này?',
          content:
            'AI là công cụ hay là kẻ thù? Bản sắc của MKT trong tương lai!',
          content:
            'Hãy để MKT dẫn dắt AI, dẫn dắt doanh nghiệp chinh phục những đỉnh cao mới.',
          style: 'base',
        },
        {
          time: '17h20 - 17h30',
          title: 'TỔNG KẾT VÀ BẾ MẠC CHƯƠNG TRÌNH',
          content: '',
          style: 'base',
        },
        {
          time: '',
          title: 'PRIVATE NETWORING DINNER',
          content: '',
          style: 'base',
        },
      ],
    }
  },
}
</script>

<style>
</style>