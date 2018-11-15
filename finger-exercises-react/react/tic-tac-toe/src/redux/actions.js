export const jumpTo = step => ({
  type: 'JUMP_TO',
  payload: step
});

export const handleClick = i => ({
  type: 'HANDLE_CLICK',
  payload: i
});
