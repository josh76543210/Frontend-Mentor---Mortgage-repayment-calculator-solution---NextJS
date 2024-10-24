import RadioInput from "./RadioInput";
import TextIntput from "./TextInput";

import caculatorIcon from "../images/icon-calculator.svg";
import Image from "next/image";

function CalculatorContainer() {
  return (
    <div className="px-5 py-7 font-semibold">
      <h1 className="font-bold text-2xl mb-2">Mortgage Calculator</h1>
      <form action="">
        <button
          type="reset"
          className="underline underline-offset-3 decoration-1/2 text-slate700 mb-6"
        >
          Clear All
        </button>
        <TextIntput
          title="Mortgage Amount"
          id="mortgage-amount"
          value="300,000"
          unit="$"
        />
        <div>
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
        <RadioInput />
        <button
          type="submit"
          className="flex items-center justify-center bg-lime w-full rounded-full p-3 font-extrabold"
        >
          <Image src={caculatorIcon} alt="" className="inline-block mr-3" />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}

export default CalculatorContainer;