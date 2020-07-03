export const normalizeData = (data) =>
  data.reduce((acc, todo) => ({ ...acc, [todo.id]: todo }), {});

export const denormalizeData = (data) => Object.values(data);
