import { createSlice } from '@reduxjs/toolkit';

const initialTextState = {
  text: '',
  status: 'pending',
};

const textSlice = createSlice({
  name: 'text',
  initialState: initialTextState,
  reducers: {
    updateText(state, action) {
      state.text = action.payload.text;
      state.status = 'pending';
    },
    upperCase(state, action) {
      state.text = state.text.toUpperCase();
      state.status = 'success';
    },
    lowerCase(state, action) {
      state.text = state.text.toLowerCase();
      state.status = 'success';
    },
    clear(state, action) {
      state.text = '';
      state.status = 'success';
    },
    removeWhiteSpace(state, action) {
      let result = '';

      for (let i = 0; i < state.text.length - 1; i++) {
        if (state.text[i] === ' ' && state.text[i + 1] === ' ') continue;
        else result += state.text[i];
      }
      if (state.text[state.text.length - 1] !== ' ')
        result += state.text[state.text.length - 1];

      state.text = result;
      state.status = 'success';
    },
  }
});

export default textSlice.reducer;
export const textActions = textSlice.actions;
