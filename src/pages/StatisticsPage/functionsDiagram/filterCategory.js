export const filterCategory = (tasksCurrentDay) => {
  const toDo = tasksCurrentDay.filter(
    (obj) => obj.category.toUpperCase() === 'TODO',
  );
  const inProgress = tasksCurrentDay.filter(
    (obj) => obj.category.toUpperCase() === 'INPROGRESS',
  );
  const done = tasksCurrentDay.filter(
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
  const toDoByDay = ((toDo.length / allTasks) * 100).toFixed(0);
  const inProgressByDay = ((inProgress.length / allTasks) * 100).toFixed(0);
  const doneByDay = ((done.length / allTasks) * 100).toFixed(0);
  const results = {
    toDoByDay,
    inProgressByDay,
    doneByDay,
  };
  return results;
};
