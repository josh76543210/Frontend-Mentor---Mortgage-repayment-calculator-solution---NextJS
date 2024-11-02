function TextInput({
  id,
  title,
  value,
  unit,
  onChange = () => {},
  unitReverse = false,
  showError = false,
  labelClass = "",
  inputClass = "",
  spanClass = "",
}) {
  return (
    <div>
      <label htmlFor={id} className="text-slate700 mb-2 inline-block">
        {title}
      </label>
      <div
        className={`flex border rounded-md border-slate700 overflow-hidden ${
          showError
            ? "mb-2 border-red [&>span]:bg-red [&>span]:text-white"
            : "mb-4 hover:border-slate900 focus-within:border-lime hover:focus-within:border-lime [&>span]:focus-within:bg-lime [&>span]:focus-within:text-slate900"
        } `}
      >
        {unitReverse || (
          <span className="bg-slate100 px-4 flex justify-center items-center text-lg text-slate700">
            {unit}
          </span>
        )}
        <input
          type="text"
          className="px-4 py-2 w-full font-bold focus-visible:outline-none"
          id={id}
          value={value}
          onChange={onChange}
        />
        {unitReverse && (
          <span className="bg-slate100 px-4 flex justify-center items-center text-lg text-slate700">
            {unit}
          </span>
        )}
      </div>
      {showError && (
        <p className="text-red text-xs mb-4">This field is required</p>
      )}
    </div>
  );
}

export default TextInput;
