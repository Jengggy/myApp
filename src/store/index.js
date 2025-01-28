import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
            id: "m1",
            image: "https://s.isanook.com/tr/0/ui/284/1422617/2-3-768x511_1597639155.jpg",
            title: "การท่องเที่ยว",
            description: "การท่องเที่ยวเชียงใหม่",
        },
        {
            id: "m2",
            image: "https://media.istockphoto.com/id/517715470/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%A1%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%87.jpg?s=612x612&w=0&k=20&c=5xoYRE05GWe9b8te0XWJHeC1IftjNH-2L848h0J5qFg=",
            title: "การออกกำลังกาย",
            description: "เล่นกล้าม",
        },
        {
            id: "m3",
            image: "https://media.istockphoto.com/id/1467069635/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%9C%E0%B8%A5-3-%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%81%E0%B8%AA%E0%B8%99%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%82%E0%B8%84%E0%B8%A1%E0%B9%84%E0%B8%9F-%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B8%B4%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%86%E0%B8%9B%E0%B8%B8%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%A5%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=ppPwhKQcgHjrJy-YhL7ndHhVmcNIZ4Qs5DvJm1MMECk=",
            title: "การนอน",
            description: "นอนไม่เกินตี 5",
        },
        {
            id: "m4",
            image: "https://media.istockphoto.com/id/1290797670/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%AB%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%8D%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%81%E0%B8%96%E0%B8%A7%E0%B8%AA%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%98%E0%B8%99%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99.jpg?s=612x612&w=0&k=20&c=TroNA0e1chRarrggruK6fKqGAdnDwdhPDwKQ4HEY2C4=",
            title: "การใช้จ่ายเงิน",
            description: "ใช้ไม่เกินเดือนละ 1,000,000",
        }
      ] 
    } // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      // Persist the updated memories list to localStorage
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;