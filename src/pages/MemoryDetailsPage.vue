<template>
    <base-layout
      :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
      page-default-back-link="/memories"
  
    >
      <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
      <memory-overview 
        v-else 
        :title="loadedMemory.title" 
        :image="loadedMemory.image" 
        :description="loadedMemory.description"
      ></memory-overview>
    </base-layout>
  </template>
  
  <script>
  import MemoryOverview from "../component/memories/MemoryOverview.vue";
  
  export default {
    components: {
      MemoryOverview,
    },
    data() {
      return {
        memoryId: this.$route.params.id, 
       
      };
    },
    computed: {
      loadedMemory() {
        return this.$store.getters.memoryById(this.memoryId);
      },
    },
    watch: {
      $route(currentRoute) {
        this.memoryId = currentRoute.params.id;
      },
    },
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