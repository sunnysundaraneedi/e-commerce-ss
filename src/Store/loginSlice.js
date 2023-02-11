import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    users: [],
    isAuthenticated: false,
    showModal: false,
    currentUser: {},
  },
  reducers: {
    logUserIn: (state, action) => {
      const { loginEmail, loginPassword } = action.payload;
      console.log(loginEmail);
      const result = state.users.find((user) => user.data.email === loginEmail);
      console.log(result);
      if (result) {
        if (result.data.password === loginPassword) {
          console.log("Correct Password");
          state.isAuthenticated = true;
          state.currentUser = result.data;
        } else {
          alert("Incorrect Password");
        }
      } else {
        alert("No email found");
      }
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    showHideModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
