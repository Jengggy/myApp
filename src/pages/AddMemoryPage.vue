<template>
    <base-layout  :page-title="'Add a Memory'"
      :page-default-back-link="'/memories'"
      >
      <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>
  </template>
  
  <script>
  import CreateMemoryForm from "../component/memories/CreateMemoryFrom.vue";
  
  export default {
    components: {
      CreateMemoryForm,
    },
    
    methods: {
      saveMemory(memoryData) {
        this.$store.dispatch('addMemory', memoryData);
        this.$router.replace('/memories');
      }
    }
  };
  </script>

<style scoped>
/* ใช้สีพาสเทลเป็นพื้นหลัง */
.memory-form-container {
  background-color: #f8d9e2; /* สีชมพูพาสเทล */
  padding: 20px;
  border-radius: 10px;
}

/* ตั้งค่าสีพื้นหลังและสีข้อความให้เหมาะสมกับธีมพาสเทล */
base-layout {
  --ion-background-color: #f0e0e0; /* สีฟ้าพาสเทลอ่อน */
}

ion-button {
  --background: #ffb6b9; /* สีชมพูพาสเทล */
  --color: #ffffff; /* ตัวอักษรสีขาว */
}

ion-label {
  --color: #ff6f61; /* สีพาสเทลแดง */
}

ion-input {
  --background: #fff2f2; /* สีพาสเทลสำหรับ input */
  --color: #333333; /* ตัวอักษรสีดำ */
}

ion-item {
  --background-hover: #ffddcc; /* สีพาสเทลเมื่อ hover */
}

/* สีของข้อความและปุ่ม */
ion-toolbar {
  --background: #ffafcc; /* สีชมพูอ่อน */
  --color: #ffffff; /* ตัวอักษรสีขาว */
}

/* การเปลี่ยนแปลงปุ่มกลับ */
ion-back-button {
  color: #ffffff !important;
  --color-focused: #ffb6b9;
  --color-hover: #ffb6b9;
}
</style>