import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    allLists: [
      {
        id: 1,
        title: "To Do",
        canCreate: true,
        color: "mercor-purple",
        list: "todoList"
      },
      {
        id: 2,
        title: "On Progress",
        canCreate: false,
        color: "mercor-yellow",
        list: "progressList"
      },
      {
        id: 3,
        title: "Completed",
        canCreate: false,
        color: "mercor-green",
        list: "completedList"
      },
    ],
    todoList: [
      {
        id: 1,
        title: "Brainstorming",
        priority: 0,
        content:
          "Brainstorming brings team members' diverse experience into play.",
        team: ["./images/users/user4.png", "./images/users/user5.png", "./images/users/user2.png"],
        comments: 12,
        files: 0,
        completed: false,
      },
      {
        id: 2,
        title: "Research",
        priority: 1,
        content:
          "User research helps you to create an optimal product for users.",
        team: ["./images/users/user2.png", "./images/users/user3.png"],
        comments: 10,
        files: 3,
        completed: false,
      },
      {
        id: 3,
        title: "Wireframes",
        priority: 1,
        content:
          "Low fidelity wireframes include the most basic content and visuals.",
        team: ["./images/users/user1.png", "./images/users/user2.png", "./images/users/user3.png"],
        comments: 10,
        files: 3,
        completed: false,
      },
    ],
    progressList: [
      {
        id: 4,
        title: "Onboarding Illustrations",
        priority: 0,
        content: "img:./images/banners/banner1.jpg",
        team: ["./images/users/user1.png", "./images/users/user2.png", "./images/users/user3.png"],
        comments: 14,
        files: 15,
        completed: false,
      },
      {
        id: 5,
        title: "Moodboard",
        priority: 0,
        content: ["img:./images/banners/banner2.jpg", "img:./images/banners/banner3.jpg"],
        team: ["./images/users/user4.png"],
        comments: 9,
        files: 10,
        completed: false,
      },
    ],
    completedList: [
      {
        id: 6,
        title: "Mobile App Design",
        priority: 0,
        content: "img:./images/banners/banner4.png",
        team: ["./images/users/user3.png", "./images/users/user5.png"],
        comments: 12,
        files: 15,
        completed: true,
      },
      {
        id: 7,
        title: "Design System",
        priority: 0,
        content: "It just needs to adapt the UI from what you did before",
        team: ["./images/users/user1.png", "./images/users/user2.png", "./images/users/user3.png"],
        comments: 12,
        files: 15,
        completed: true,
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.todoList.push = action.payload;
    },
    updateList: (state, action) => {
      switch (action.payload.task) {
        case 'single':
          state[action.payload.list] = action.payload.data;
          break;
        case 'multiple':
          state[action.payload.src.list] = action.payload.src.data;
          state[action.payload.dest.list] = action.payload.dest.data;
          break;
        default:
          return;
      }
    }
  },
});

export const { addCard, updateList } = listSlice.actions;
export default listSlice.reducer;
