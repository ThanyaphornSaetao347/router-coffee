<template>
    <div>
      <h1>Review</h1>
      <div class="mb-3">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="reviewContent"></textarea>
      </div>
      <button type="button" class="btn btn-outline-dark float-right" @click="submitReview">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviewContent: '', // สร้างตัวแปร reviewContent เพื่อเก็บเนื้อหารีวิว
      };
    },
    methods: {
      submitReview() {
        // ดำเนินการเมื่อปุ่ม "Submit" ถูกคลิก
        if (this.reviewContent) {
          // ตรวจสอบว่ามีเนื้อหารีวิวหรือไม่
          // ทำอะไรสั่งสร้างรีวิวหรือส่งไปยัง API ตามที่คุณต้องการ
          console.log('รีวิวที่ส่ง:', this.reviewContent);
          // เคลียร์เนื้อหารีวิวหลังจากส่ง
          this.reviewContent = '';
        }
      },
    },
  };
  </script>
  