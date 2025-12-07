let count = 0;
export const Message = () => {
  console.log(count);
  count += 1;
  return <div>{count}</div>;
};
