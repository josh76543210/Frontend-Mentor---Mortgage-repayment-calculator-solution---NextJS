"use client";
import { useFormData } from "../contexts/FormContext";

function RadioInput({ title, id }) {
  const { formState, setFormState } = useFormData();

  function setMortgageType(mortgageType) {
    setFormState((prev) => ({
      ...prev,
      mortgageType: mortgageType,
      results: false,
    }));
  }

  return (
    <div
      className="group relative flex items-center mb-2 px-4 py-3 cursor-pointer"
      onClick={(e) => {
        setMortgageType(e.target.closest("div").querySelector("input").id);
      }}
    >
      <input
        id={id}
        type="radio"
        name="mortgage-type"
        className="peer z-20 flex items-center justify-center w-4 h-4 accent-lime appearance-none border-2 border-slate700 checked:border-lime rounded-full focus:outline-none before:h-2 before:w-2 before:bg-lime before:content-[''] before:rounded before:hidden checked:before:block pointer-events-none"
        onChange={(e) => {
          setMortgageType(e.target.id);
        }}
        checked={formState.mortgageType === id}
      />
      <label
        htmlFor={id}
        className="z-20 ms-2 text-sm font-bold text-slate900 pointer-events-none"
      >
        {title}
      </label>
      <span className="after:content-[''] after:block after:w-full after:absolute after:h-full after:bg-limeT after:left-0 after:top-0 after:z-10 hidden peer-checked:block after:border after:border-lime after:rounded-md"></span>
      <span className="after:content-[''] after:block after:w-full after:absolute after:h-full after:left-0 after:top-0 after:z-10 block peer-checked:hidden after:border after:border-slate900 after:rounded-md hover:after:border-lime"></span>
    </div>
  );
}

export default RadioInput;
