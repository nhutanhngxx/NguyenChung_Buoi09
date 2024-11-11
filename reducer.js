// ReduxToolkits/counterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Tạo async thunk để fetch tất cả người dùng
export const fetchAllUsers = createAsyncThunk(
  'counter/fetchAllUsers',
  async () => {
    const response = await fetch(
      'https://670955e3af1a3998baa13006.mockapi.io/Users'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data; // Trả về danh sách người dùng
  }
);
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    users: [],
    currentUser: null, // Lưu currentUser ở đây
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true; // Bắt đầu loading
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false; // Kết thúc loading
        state.users = action.payload; // Cập nhật danh sách người dùng
        state.currentUser = action.payload[0] || null; // Lưu currentUser
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false; // Kết thúc loading
        state.error = action.error.message; // Lưu lỗi
      })
      
    // ... Xử lý các trường hợp khác cho addTask, editTask, deleteTask
  },
});
export default counterSlice.reducer;