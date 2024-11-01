function TextInput({
  id,
  title,
  value,
  unit,
  onChange = () => {},
  unitReverse = false,
  labelClass = "",
  inputClass = "",
  spanClass = "",
}) {
  return (
    <div>
      <label htmlFor={id} className="text-slate700 mb-2 inline-block">
        {title}
      </label>
      <div className="flex border rounded-md border-slate900 mb-4 overflow-hidden">
        {unitReverse || (
          <span className="bg-slate100 px-4 flex justify-center items-center text-lg text-slate700">
            {unit}
          </span>
        )}
        <input
          type="text"
          className="px-4 py-2 w-full font-bold"
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
    </div>
  );
}

export default TextInput;
