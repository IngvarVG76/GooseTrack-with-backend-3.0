export const filterTasksByMonth = (tasksCurrentMonth) => {
  const toDo = tasksCurrentMonth.filter(
    (obj) => obj.category.toUpperCase() === 'TODO',
  );
  const inProgress = tasksCurrentMonth.filter(
    (obj) => obj.category.toUpperCase() === 'INPROGRESS',
  );
  const done = tasksCurrentMonth.filter(
    (obj) => obj.category.toUpperCase() === 'DONE',
  );

  const allTasks = toDo.length + inProgress.length + done.length;
  if (allTasks <= 0) {
    return {
      toDoByMonth: 0,
      inProgressByMonth: 0,
      doneByMonth: 0,
    };
  }
  const toDoByMonth = ((toDo.length / allTasks) * 100).toFixed(0);
  const inProgressByMonth = ((inProgress.length / allTasks) * 100).toFixed(0);
  const doneByMonth = ((done.length / allTasks) * 100).toFixed(0);
  const results = {
    toDoByMonth,
    inProgressByMonth,
    doneByMonth,
  };
  return results;
};
