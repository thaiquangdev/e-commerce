const Input = ({ type, classN, place }) => {
  return (
    <>
      <input
        type={type}
        className={` outline-none rounded-sm ${classN}`}
        placeholder={place}
      />
    </>
  );
};

export default Input;
