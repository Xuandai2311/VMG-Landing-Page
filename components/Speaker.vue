<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <div class="text-center">
        <h1 class="text-base font-bold text-xl my-3">DIỄN GIẢ SỰ KIỆN</h1>
        <img class="my-3 mx-auto" src="~assets/img/line.svg?inline" alt slot="svg" />
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-5">
        <div
          class="grid text-center items-start gap-2"
          style="justify-items: center;"
          v-for="speaker in listSpeaker"
          :key="speaker"
        >
          <img :src="getImages(speaker.avt)" :alt="`Diễn giả `+speaker" />
          <p class="text-base font-bold mt-5 uppercase">
            {{speaker.gender}}
            <br />
            {{speaker.name}}
          </p>
          <img class="mx-auto w-12" src="~assets/img/line-mini.svg?inline" alt slot="svg" />
          <p>{{speaker.position}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Speaker',
  data() {
    return {
      listSpeaker: [
        {
          avt: 'speaker1',
          name: 'NGUYỄN TRUNG HIẾU',
          gender: 'ÔNG',
          position:
            'Thành viên HĐQT - P.TGĐ công ty CP Đầu tư SX Bảo Ngọc (BNA)',
        },
        {
          avt: 'speaker2',
          name: 'TRỊNH THỊ VÂN',
          gender: 'BÀ',
          position: 'CMO Công ty Cổ phần Richy Group',
        },
        {
          avt: 'speaker3',
          name: 'bùi trọng đạt',
          gender: 'ÔNG',
          position:
            'CMO công ty DAEASAMG Đức Việt (Thương hiệu xúc xích Đức Việt)',
        },
        {
          avt: 'speaker4',
          name: 'trần quốc toàn',
          gender: 'ÔNG',
          position: 'Phó Chủ Tịch kiêm Phó Tổng Giám Đốc TLC',
        },
        {
          avt: 'speaker5',
          name: 'Đào hằng',
          gender: 'bà',
          position:
            'Chủ tịch công ty CP Tư vấn Tái Cấu Trúc BHM. Phó chủ tịch Công ty Kiểm toán IVMA. Kiểm toán viên (CPA) và Thẩm định viên (Valuer)',
        },
      ],
    }
  },
  methods: {
    getImages(img) {
      let images = require.context('~/assets/img', false, /\.png$/)
      return images('./' + img + '.png')
    },
  },
}
</script>
