import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useNoteStore = defineStore("notes", () => {
  const notes = ref([
    {
      id: 1,
      title: "title1",
      content: "1111111111",
    },
    {
      id: 2,
      title: "title2",
      content: "2222222222",
    },
    {
      id: 3,
      title: "title3",
      content: "3333333333",
    },
    {
      id: 4,
      title: "title4",
      content: "4444444444",
    },
    {
      id: 5,
      title: "title5",
      content: "5555555555",
    },
  ]);

  const searchTerm = ref("");

  const searchedNotes = computed(() => {
    if (searchTerm.value === "") {
      return notes.value;
    } else {
      return notes.value.filter((note) => {
        return note.title.includes(searchTerm.value);
      });
    }
  });

  const userStore = useUserStore();

  function addNote(title, content) {
    if (userStore.isLoggedIn()) {
      setTimeout(() => {
        notes.value.push({
          id: notes.value.length + 1,
          title,
          content,
        });
      }, 2000);
    }

    searchTerm.value = "";
  }

  return {
    notes,
    addNote,
    searchTerm,
    searchedNotes,
  };
});
