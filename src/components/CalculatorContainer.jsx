"use client";
import { useFormData } from "../contexts/FormContext";

import RadioInput from "./RadioInput";
import TextIntput from "./TextInput";

import caculatorIcon from "../images/icon-calculator.svg";
import Image from "next/image";
import { useEffect } from "react";
import numberWithCommas from "@/utils/numberWithCommas";

function CalculatorContainer() {
  const { formState, setFormState } = useFormData();

  useEffect(() => {
    if (
      formState.errors.amount ||
      formState.errors.term ||
      formState.errors.rate ||
      formState.errors.type
    )
      formState.showResults = false;
  }, [formState]);

  function checkInputErrors() {
    // check for valid mortgage amount
    if (formState.mortgageAmount === "" || formState.mortgageAmount === "0")
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, amount: true },
      }));
    else
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, amount: false },
      }));
    // check for valid mortgage term
    if (formState.mortgageTerm === "" || formState.mortgageTerm === "0")
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, term: true },
      }));
    else
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, term: false },
      }));
    // check for valid intrest rate
    if (formState.intrestRate === "" || formState.intrestRate === "0")
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, rate: true },
      }));
    else
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, rate: false },
      }));
    // check for valid mortgage type
    if (formState.mortgageType === "")
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, type: true },
      }));
    else
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, type: false },
      }));
  }

  function showResults() {
    // show results if there are no errors
    setFormState((prev) =>
      !prev.errors.amount &&
      !prev.errors.term &&
      !prev.errors.rate &&
      !prev.errors.type
        ? { ...prev, results: true }
        : { ...prev, results: false }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkInputErrors();
    showResults();
  }

  function handleReset(e) {
    e.preventDefault();
    setFormState({
      mortgageAmount: "",
      mortgageTerm: "",
      intrestRate: "",
      mortgageType: "",
      results: false,
      errors: {
        amount: false,
        term: false,
        rate: false,
        type: false,
      },
    });
  }

  function getDecimalPlaces(num) {
    const str = num.toString();
    const decimalPart = str.split(".")[1];
    return decimalPart ? decimalPart.length : 0;
  }

  function handleAmountInput(e) {
    const newNum = e.target.value.trim().replace(/,/g, "");
    if (!isNaN(newNum) && getDecimalPlaces(newNum) < 3) {
      setFormState((prev) => ({
        ...prev,
        mortgageAmount: newNum,
        results: false,
      }));
    }
  }

  function handleTermInput(e) {
    const newNum = e.target.value.trim();
    if (!isNaN(newNum) && getDecimalPlaces(newNum) < 1) {
      setFormState((prev) => ({
        ...prev,
        mortgageTerm: newNum.replace(".", ""),
        results: false,
      }));
    }
  }

  function handleRateInput(e) {
    const newNum = e.target.value.trim();
    if (!isNaN(newNum) && newNum <= 100) {
      setFormState((prev) => ({
        ...prev,
        intrestRate: newNum,
        results: false,
      }));
    }
  }

  return (
    <div className="px-5 py-7 font-semibold flex-shrink-0 lg:max-w-md lg:p-10">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="3sm:flex items-baseline justify-between">
          <h1 className="font-bold text-2xl mb-2 lg:mb-8">
            Mortgage Calculator
          </h1>
          <button
            type="reset"
            className="underline underline-offset-3 decoration-1/2 text-slate700 mb-6 hover:text-slate900"
          >
            Clear All
          </button>
        </div>
        <TextIntput
          title="Mortgage Amount"
          id="mortgage-amount"
          value={numberWithCommas(formState.mortgageAmount)}
          unit="$"
          onChange={handleAmountInput}
          showError={formState.errors.amount}
        />
        <div className="3sm:flex 3sm:gap-5">
          <TextIntput
            title="Mortgage Term"
            id="mortgage-term"
            value={formState.mortgageTerm}
            unit="years"
            unitReverse
            onChange={handleTermInput}
            showError={formState.errors.term}
          />
          <TextIntput
            title="Intrest Rate"
            id="intrest-rate"
            value={formState.intrestRate}
            unit="%"
            unitReverse
            onChange={handleRateInput}
            showError={formState.errors.rate}
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
          {formState.errors.type && (
            <p className="text-red text-xs mb-4">This field is required</p>
          )}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center bg-lime w-full rounded-full p-3 font-extrabold lg:w-auto lg:px-7 hover:bg-limeH"
        >
          <Image src={caculatorIcon} alt="" className="inline-block mr-3" />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}

export default CalculatorContainer;
