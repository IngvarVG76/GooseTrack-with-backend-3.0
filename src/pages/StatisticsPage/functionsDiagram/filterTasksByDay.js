export const filterTasksByDay = (tasksCurrentMonth, staticticDate) => {
  const currentDayTasks = tasksCurrentMonth.filter(
    (task) => task.date === staticticDate,
  );
  return currentDayTasks;
};
