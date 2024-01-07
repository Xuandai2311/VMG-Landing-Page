<template>
  <section class="Speaker bg-gray-100 py-8">
    <div class="container mx-auto px-6 pt-4 pb-12 text-gray-800">
      <div class="text-center">
        <h1 class="text-base font-bold text-2xl my-3">DIỄN GIẢ SỰ KIỆN</h1>
        <img class="my-3 mx-auto" src="~assets/img/line.png?inline" alt slot="svg" />
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-14 items-start mt-12">
        <div
          class="grid text-center gap-2 h-full"
          style="justify-items: center;"
          v-for="(speaker,index) in listSpeaker1"
          :key="index"
        >
          <div class="grid text-center gap-2 items-start" style="justify-items: center;">
            <img :src="getImages(speaker.avt)" :alt="`Diễn giả `+speaker.name" />
            <p class="text-base font-bold mt-5 uppercase">
              {{speaker.gender}}
              <br />
              {{speaker.name}}
            </p>
            <img class="mx-auto w-12" src="~assets/img/line-mini.png?inline" alt slot="svg" />
            <ul class="position1 list-disc text-left">
              <li v-for="(item, index) in speaker.position" :key="index">{{ item }}</li>
            </ul>
          </div>
          <img :src="getImages(speaker.company)" />
        </div>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-8 items-start mt-12">
        <div
          class="grid text-center gap-2 h-full"
          style="justify-items: center;"
          v-for="(speaker,index) in listSpeaker2"
          :key="index"
        >
          <div class="grid text-center gap-2 items-start" style="justify-items: center;">
            <img :src="getImages(speaker.avt)" :alt="`Diễn giả `+speaker.name" />
            <p class="text-base font-bold mt-5 uppercase">
              {{speaker.gender}}
              <br />
              {{speaker.name}}
            </p>
            <img class="mx-auto w-12" src="~assets/img/line-mini.png?inline" alt slot="svg" />
            <ul class="position2 list-disc text-left">
              <li v-for="(item, index) in speaker.position" :key="index">{{ item }}</li>
            </ul>
          </div>
          <img :src="getImages(speaker.company)" />
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
      listSpeaker1: [
        {
          avt: 'speaker1',
          name: 'Cao Thế Anh',
          gender: 'ÔNG',
          position: [
            'Chủ tịch HĐQT kiêm Tổng giám đốc Alo Media',
            '20 năm kinh nghiệm trong lĩnh vực Truyền thông, báo chí, truyền hình',
            'Tổng đạo diễn chương trình truyền hình thực tế về việc làm đầu tiên tại Việt Nam "Cơ Hội Cho Ai"',
            'Tiến sỹ danh dự World Records University (England)',
            'Phó Chủ tịch Hội Doanh nghiệp trẻ Hà Nội (HANOIBA)',
          ],
          company: 'logo-company1',
        },
        {
          avt: 'speaker2',
          name: 'Nguyễn Trung Dũng',
          gender: 'ông',
          position: [
            'Tổng giám đốc Công ty cổ phần DH Food',
            'Nhân vật truyền cảm hứng với câu chuyện "Khởi nghiệp tuổi 50"',
            'Đóng vai trò một trong sáu "Sếp" ngồi ghế nóng trong chương trình truyền hình thực tế về tuyển dụng lớn nhất tại Việt Nam mang tên "Cơ Hội Cho Ai".',
          ],
          company: 'logo-company2',
        },
        {
          avt: 'speaker3',
          name: 'NGUYỄN TRUNG HIẾU',
          gender: 'ÔNG',
          position: [
            'Chủ tịch, nhà sáng lập VMG Co Founder TWS Media',
            '2017 - 2021: Thành viên HĐQT - Giám đốc Marketing Công ty Cổ phần Đầu tư SX Bảo Ngọc',
            '2022 - nay: Thành viên HĐQT - Phó Tổng giám đốc Công ty CP Đầu tư Sản xuất Bảo Ngọc',
            'Là một trong các vị sếp quyền lực của chương trình truyền hình thực tế "Cơ hội cho ai"',
          ],
          company: 'logo-company3',
        },
        {
          avt: 'speaker4',
          name: 'Nguyễn Thị Ngọc Lan',
          gender: 'bà',
          position: [
            'Chủ tịch HĐQT Tập đoàn giáo dục quốc tế Atlantic Group',
            'Nhà sáng lập Atlantic Five-Star English',
            'Sếp nữ quyền lực duy nhất ngồi ghế nóng tại chương trình truyền hình thực tế về tuyển dụng lớn nhất tại Việt Nam "Cơ hội cho ai"',
          ],
          company: 'logo-company4',
        },
        {
          avt: 'speaker5',
          name: 'Nguyễn Lê Vũ Linh',
          gender: 'ông',
          position: [
            'Tổng giám đốc Công ty cổ phần Dự Kim thương hiệu IVYmoda',
            'Tốt nghiệp ngành Quản trị Thời trang (Fashion Business Management) của Đại học Fashion Institute of Technology (FIT) tại New York, Mỹ.',
            'Đóng vai trò một trong sáu "Sếp" ngồi ghế nóng trong chương trình truyền hình thực tế về tuyển dụng lớn nhất tại Việt Nam mang tên "Cơ Hội Cho Ai".',
          ],
          company: 'logo-company5',
        },
      ],
      listSpeaker2: [
        {
          avt: 'speaker6',
          name: 'TRẦN QUỐC TOÀN',
          gender: 'ÔNG',
          position: [
            'Phó chủ tịch thường trực VMG',
            'Phó chủ tịch kiêm Phó tổng TLC Việt Nam',
            'CEO công ty cổ phần đầu tư Tân Phát Đạt',
            'Founder công ty TNHH sản xuất Thiên Lộc',
          ],
          company: 'logo-company6',
        },
        {
          avt: 'speaker7',
          name: 'TRỊNH THỊ VÂN',
          gender: 'bà',
          position: [
            'Thành viên ban quản trị VMG',
            '2014- 2019: PP Marketing – Phụ trách truyền thông thương hiệu Tập đoàn Sunhouse',
            '2019 – nay: Giám đốc Marketing, Giám đốc kênh TMĐT, Giám đốc kênh B2B Công ty cổ phần Richy Group.',
          ],
          company: 'logo-company7',
        },
        {
          avt: 'speaker8',
          name: 'BÙI TRỌNG ĐẠT',
          gender: 'ÔNG',
          position: [
            'Thành viên ban quản trị VMG',
            '2006- 2016: Công ty CP Thực phẩm Đức Việt',
            '2016 - Nay: Giám đốc Marketing Công ty CP Daesang Đức Việt',
            'GĐ Điều hành dự án mới Daesang Đưc Việt',
          ],
          company: 'logo-company8',
        },
        {
          avt: 'speaker9',
          name: 'ĐÀO HẰNG',
          gender: 'bà',
          position: [
            'Chủ tịch Công ty CP Tư vấn Tái Cấu Trúc BHM. Phó chủ tịch công ty Kiểm toán IVMA. Kiểm toán viên (CPA) và thẩm định viên (Valuer)',
            '18 năm chuyên sâu trong lĩnh vực Quản trị DN, tư vấn tái cấu trúc DN, M&A mua bán sáp nhập, tài chính ngân hàng, tài chính doanh nghiệp.',
            'Chuyên gia tài chính cá nhân, quản lý tài sản & gia sản.',
          ],
          company: 'logo-company9',
        },
        {
          avt: 'speaker10',
          name: 'Selena Phạm',
          gender: 'bà',
          position: [
            'Chức vụ: CEO của tập đoàn công nghệ Braxis tại Singapore',
            'CEO công ty TNHH VMG Myanmar tại Myanmar',
            'Thành viên ban truyền thông - Hiệp hội truyền thông số Việt Nam',
          ],
          company: 'logo-company10',
        },
        {
          avt: 'speaker11',
          name: 'Nguyễn Hà',
          gender: 'bà',
          position: [
            'Co-Founder & CEO Công ty CP Bất Động Sản Lee Homes',
            'Founder & CEO Công ty Tảo xoắn Okasan',
            'Nguyên Giám đốc CN Trung tâm Anh ngữ SLink',
            'Đạt học bổng toàn phần trường BUV và học bổng toàn phần cho chương trình thạc sĩ tại trường Fulbright.',
            'Nghiên cứu sinh QTKD Đại học Ngoại thương',
          ],
          company: 'logo-company11',
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
<style lang="scss">
@media (min-width: 768px) {
  .Speaker {
    .position1 {
      height: 280px;
    }
    .position2 {
      height: 300px;
    }
  }
}
@media (max-width: 768px) {
  .Speaker {
    .position1 {
      height: 360px;
    }
    .position2 {
      height: 360px;
    }
  }
}
</style>