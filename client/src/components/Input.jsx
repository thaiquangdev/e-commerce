const Input = ({ type, classN, place, onCh, onBl, val, name }) => {
  return (
    <>
      <input
        type={type}
        className={` outline-none rounded-sm ${classN}`}
        placeholder={place}
        name={name}
        onChange={onCh}
        onBlur={onBl}
        value={val}
      />
    </>
  );
};

export default Input;
