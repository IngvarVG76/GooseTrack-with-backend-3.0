import { Notify } from 'notiflix';

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  if (payload.includes('have no any task')) {
    state.tasks = [];
  }
  state.error = payload;
};

export const handleMonthFulfilled = (state, { payload }) => {
  state.tasks = payload.data;

  if (payload.data.length === 0)
    Notify.info('There are no tasks for this month.', {
      timeout: 3000,
    });
  state.isLoading = false;
  state.error = null;
};
