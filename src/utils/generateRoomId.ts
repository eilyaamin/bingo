const generateId = (length: number = 5): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join('');
};

export default generateId;
