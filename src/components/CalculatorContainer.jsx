"use client";
import { useFormData } from "../contexts/FormContext";

import RadioInput from "./RadioInput";
import TextIntput from "./TextInput";

import caculatorIcon from "../images/icon-calculator.svg";
import Image from "next/image";

function CalculatorContainer() {
  const { setFormState } = useFormData();

  function handleSubmit(e) {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, results: !prev.results }));
  }

  return (
    <div className="px-5 py-7 font-semibold flex-shrink-0 lg:max-w-md lg:p-10">
      <form onSubmit={handleSubmit}>
        <div className="3sm:flex items-baseline justify-between">
          <h1 className="font-bold text-2xl mb-2 lg:mb-8">
            Mortgage Calculator
          </h1>
          <button
            type="reset"
            className="underline underline-offset-3 decoration-1/2 text-slate700 mb-6"
          >
            Clear All
          </button>
        </div>
        <TextIntput
          title="Mortgage Amount"
          id="mortgage-amount"
          value="300,000"
          unit="$"
        />
        <div className="3sm:flex 3sm:gap-5">
          <TextIntput
            title="Mortgage Term"
            id="mortgage-term"
            value="25"
            unit="years"
            unitReverse
          />
          <TextIntput
            title="Intrest Rate"
            id="intrest-rate"
            value="5.25"
            unit="%"
            unitReverse
          />
        </div>
        <div className="mb-4 lg:mb-8">
          <label
            htmlFor="mortgage-type"
            className="text-slate700 mb-2 inline-block"
          >
            Mortgage Type
          </label>
          <RadioInput title="Repayment" id="repayment" />
          <RadioInput title="Intrest Only" id="intrest-only" />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center bg-lime w-full rounded-full p-3 font-extrabold lg:w-auto lg:px-7"
        >
          <Image src={caculatorIcon} alt="" className="inline-block mr-3" />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}

export default CalculatorContainer;
