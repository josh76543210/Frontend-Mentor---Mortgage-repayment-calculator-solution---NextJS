"use client";
import numberWithCommas from "@/utils/numberWithCommas";
import { useFormData } from "../contexts/FormContext";
import EmptyIllustration from "../images/illustration-empty.svg";
import Image from "next/image";

function ResultsContainer() {
  const { formState } = useFormData();

  // calculate monthly payments
  const loanPrinciple = Number(formState.mortgageAmount);
  const months = Number(formState.mortgageTerm) * 12;
  const intrest = Number(formState.intrestRate) / 100 / 12;

  let monthlyPayments;
  if (formState.mortgageType == "repayment") {
    monthlyPayments =
      (loanPrinciple * (intrest * (1 + intrest) ** months)) /
      ((1 + intrest) ** months - 1);
  }
  if (formState.mortgageType == "intrest-only") {
    monthlyPayments = intrest * loanPrinciple;
  }

  return (
    <div className="bg-slate900 text-white py-8 px-5 lg:rounded-bl-xxl lg:p-10 lg:flex flex-col justify-center">
      {formState.results ? (
        <>
          <h2 className="font-bold text-xl mb-4">Your results</h2>
          <p className="text-slate300 text-sm mb-5 lg:mb-8">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click &quot;calculate
            repayments&quot; again.
          </p>
          <div className="bg-slate950 py-4 px-3 rounded-lg border-t-4 border-lime lg:p-7">
            <div className=" border-b border-slate700 mb-4 lg:mb-7">
              <p className="text-slate300 mb-2 lg:mb-4">
                Your monthly repayments
              </p>
              <p className="mb-4 text-4xl font-bold text-lime lg:mb-8">
                ${numberWithCommas(monthlyPayments.toFixed(2))}
              </p>
            </div>
            <div>
              <p className="text-slate300 mb-2 lg:mb-4">
                Total you&apos;ll repay over the term
              </p>
              <p className="mb-1 text-2xl font-bold">
                ${numberWithCommas((monthlyPayments * months).toFixed(2))}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <Image
            src={EmptyIllustration}
            alt=""
            className="w-1/2 max-w-44 mb-4 mx-auto"
          />
          <h2 className="font-bold text-xl mb-4 text-center">
            Results shown here
          </h2>
          <p className="text-slate300 text-sm mb-5 lg:mb-8 text-center">
            Complete the form and click &quot;calculate repayments&quot; to see
            what your monthly repayments would be.
          </p>
        </>
      )}
    </div>
  );
}

export default ResultsContainer;
