function RadioInput({ title, id }) {
  return (
    <div className="relative flex items-center mb-2 px-4 py-3">
      <input
        id={id}
        type="radio"
        name="mortgage-type"
        className="peer z-20 flex items-center justify-center w-4 h-4 accent-lime appearance-none border-2 border-slate700 checked:border-lime rounded-full focus:outline-none before:h-2 before:w-2 before:bg-lime before:content-[''] before:rounded before:hidden checked:before:block"
      />
      <label htmlFor={id} className="z-20 ms-2 text-sm font-bold text-slate900">
        {title}
      </label>
      <span className="after:content-[''] after:block after:w-full after:absolute after:h-full after:bg-limeT after:left-0 after:top-0 after:z-10 hidden peer-checked:block after:border after:border-lime after:rounded-md"></span>
      <span className="after:content-[''] after:block after:w-full after:absolute after:h-full after:left-0 after:top-0 after:z-10 block peer-checked:hidden after:border after:border-slate900 after:rounded-md"></span>
    </div>
  );
}

export default RadioInput;
