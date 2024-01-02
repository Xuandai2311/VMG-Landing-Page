<template>
  <section id="Event" class="Event bg-white py-8">
    <div class="container grid lg:grid-cols-2 lg:gap-10 mx-auto px-4">
      <div>
        <div class="border-b">
          <div class="relative w-3/4 lg:w-1/2">
            <h1
              class="text-white uppercase font-bold text-2xl bg-base py-3 px-10 rounded-lg z-10 relative"
            >
              Thông tin
              <br />chương trình
            </h1>
            <img
              class="item-decor my-3 mx-auto absolute z-0"
              style="left: 195px; top: 25px;"
              src="~assets/img/decor.png?inline"
              alt
              slot="svg"
            />
          </div>
          <div class="ml-5 my-10 grid gap-5">
            <span class="flex gap-3 items-center">
              <i class="el-icon-date text-base"></i>
              <div>
                <p>Thời gian hội thảo:</p>
                <b>14h-18h, Ngày 20/1/2024</b>
              </div>
            </span>
            <span class="flex gap-3 items-center">
              <i class="el-icon-date text-base"></i>
              <div>
                <p>Thời gian private networking dinner:</p>
                <b>18h - 21h, Ngày 20/1/2024</b>
              </div>
            </span>
            <span class="flex gap-3 items-center">
              <i class="el-icon-location-outline text-base"></i>
              <div>
                <p>Địa điểm tổ chức hội thảo:</p>
                <b>Học viện Ngân Hàng</b>
              </div>
            </span>
            <span class="flex gap-3 items-center">
              <i class="el-icon-location-outline text-base"></i>
              <div>
                <p>Địa điểm Private Networking Dinner:</p>
                <b>Nhà hàng</b>
              </div>
            </span>
          </div>
        </div>
        <div class="my-10">
          <h2 class="text-base uppercase font-bold text-xl">lựa chọn loại vé</h2>
          <div>
            <div>
              <h3 class="font-bold mt-4">Vé tham dự hội thảo</h3>
              <div
                class="flex justify-between border rounded-lg py-5 px-5 lg:px-10 my-4"
                :class="ticket ? 'border-base' : ''"
              >
                <el-radio v-model="ticket" label="Có">Vé tham dự hội thảo</el-radio>
                <p>Miễn phí</p>
              </div>
            </div>
            <div>
              <h3 class="font-bold mt-4">Vé Private Networking Dinner</h3>
              <div
                class="flex justify-between border rounded-lg py-5 px-5 lg:px-10 my-4"
                :class="ticketPrivate ==='Early bird' ? 'border-base' : ''"
              >
                <div>
                  <el-radio v-model="ticketPrivate" label="Early bird">Early bird</el-radio>
                  <p class="text-xs ml-5">(đóng trước 1 tuần tham gia sự kiện)</p>
                </div>
                <p>
                  500.000 VND
                  <br />/người
                </p>
              </div>
              <div
                class="flex justify-between border rounded-lg py-5 px-5 lg:px-10 my-4"
                :class="ticketPrivate === 'Early bird Nhóm 3 người' ? 'border-base' : ''"
              >
                <el-radio v-model="ticketPrivate" label="Early bird Nhóm 3 người"></el-radio>
                <p>
                  450.000 VND
                  <br />/người
                </p>
              </div>
              <div
                class="flex justify-between border rounded-lg py-5 px-5 lg:px-10 my-4"
                :class="ticketPrivate === 'Normal' ? 'border-base' : ''"
              >
                <el-radio v-model="ticketPrivate" label="Normal"></el-radio>
                <p>
                  700.000 VND
                  <br />/người
                </p>
              </div>
              <div
                class="flex justify-between border rounded-lg py-5 px-5 lg:px-10 my-4"
                :class="ticketPrivate === 'Normal Nhóm 3 người' ? 'border-base' : ''"
              >
                <el-radio v-model="ticketPrivate" label="Normal Nhóm 3 người"></el-radio>
                <p>
                  630.000 VND
                  <br />/người
                </p>
              </div>
            </div>

            <h2 class="text-base font-bold uppercase text-2xl border-b-2 border-base pb-3 mt-5">
              VMG
              <br />Hiệp hội Marketing Việt Nam
            </h2>
            <span class="flex gap-3 items-center mt-6 border-b pb-10">
              <i class="el-icon-phone text-base"></i>
              <p>Hotline</p>
              <p class="ml-12">039 803 6816</p>
            </span>
          </div>
        </div>
      </div>
      <div class="register-form relative">
        <img src="~/assets/img/bg-register-form.png" class="absolute z-0 h-full lg:h-auto w-full" />
        <div class="relative z-10 p-8 lg:p-20">
          <h2 class="uppercase text-white font-bold text-3xl text-center lg:mt-10">
            Đăng ký
            <br />Tham gia sự kiện
          </h2>
          <el-form :model="formData" :rules="rules" ref="formData">
            <el-form-item label="Họ và tên" prop="ho_ten">
              <el-input v-model="formData.ho_ten" placeholder="Nhập họ và tên"></el-input>
            </el-form-item>
            <el-form-item label="Số điện thoại" prop="sdt">
              <el-input v-model="formData.sdt" placeholder="Nhập số điện thoại"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="formData.email" placeholder="Nhập email"></el-input>
            </el-form-item>
            <el-form-item label="Vị trí" prop="vi_tri">
              <el-input v-model="formData.vi_tri" placeholder="Nhập vị trí"></el-input>
            </el-form-item>
            <el-form-item label="Tên doanh nghiệp" prop="ten_doanh_nghiep">
              <el-input v-model="formData.ten_doanh_nghiep" placeholder="Nhập tên doanh nghiệp"></el-input>
            </el-form-item>
            <el-form-item label="Số lượng vé" prop="so_ve">
              <el-input v-model="formData.so_ve" placeholder="Nhập số lượng vé"></el-input>
            </el-form-item>
          </el-form>
          <span class="flex justify-between items-center text-white text-lg">
            <p>Thành tiền</p>
            <b>{{ getTicketPrice() }} VNĐ</b>
          </span>
          <div class="flex justify-center">
            <button
              class="bg-white rounded-lg px-12 py-3 text-center font-bold mt-6"
              v-loading="isLoading"
              @click="submitClick()"
            >Đăng ký ngay</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      ticket: null,
      ticketPrivate: null,
      formData: {
        ho_ten: '',
        sdt: '',
        email: '',
        vi_tri: '',
        ten_doanh_nghiep: '',
        so_ve: '',
      },
      rules: {
        ho_ten: [
          {
            required: true,
            message: 'Bạn chưa nhập họ tên',
          },
        ],
        sdt: [
          {
            required: true,
            message: 'Bạn chưa nhập số điện thoại',
          },
        ],
        email: [
          {
            required: true,
            message: 'Bạn chưa nhập email',
          },
          {
            type: 'email',
            message: 'Email không đúng định dạng',
            trigger: ['blur', 'change'],
          },
        ],
        vi_tri: [
          {
            required: true,
            message: 'Bạn chưa nhập vị trí',
          },
        ],
        ten_doanh_nghiep: [
          {
            required: true,
            message: 'Bạn chưa nhập tên doanh nghiệp',
          },
        ],
        so_ve: [
          {
            required: true,
            message: 'Bạn chưa nhập số vé',
          },
        ],
      },
    }
  },
  methods: {
    submitClick() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          this.isLoading = true
          this.formData.ve_tham_du_hoi_thao = this.ticket
          this.formData.ve_private_dinner = this.ticketPrivate
          this.$axios
            .post(
              'https://sheet.best/api/sheets/7bf879c3-3950-4c89-93df-f5b0ede03842',
              this.formData
            )
            .then((response) => {
              this.$message.success('Bạn đã đăng ký thành công')
              this.$refs.formData.resetFields()
              this.ticket = null
              this.ticketPrivate = null
              this.isLoading = false
              console.log(response)
            })
            .catch((error) => {
              this.$message.success('Đăng ký thất bại, vui lòng đăng ký lại')
              this.isLoading = false
              console.log(error)
            })
        }
      })
    },
    getTicketPrice() {
      let price = 0
      const ticket = this.formData.so_ve ? this.formData.so_ve : 1
      if (this.ticketPrivate) {
        if (this.ticketPrivate === 'Early bird') {
          price = 500000 * ticket
        } else if (this.ticketPrivate === 'Early bird Nhóm 3 người') {
          price = 450000 * ticket
        } else if (this.ticketPrivate === 'Normal') {
          price = 700000 * ticket
        } else if (this.ticketPrivate === 'Normal Nhóm 3 người') {
          price = 630000 * ticket
        }
      }
      return this.formatCurrency(price)
    },
    formatCurrency(amount) {
      var strAmount = amount.toString()
      var parts = strAmount.split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      var formattedAmount = parts.join('.')
      return formattedAmount
    },
  },
}
</script>

<style lang="scss">
.el-form-item__label {
  color: #fff;
  font-weight: 600;
}
.el-loading-spinner {
  display: flex;
  justify-content: center;
}
@media (max-width: 768px) {
  .Event {
    .item-decor {
      left: 122px !important;
    }
  }
}
</style>