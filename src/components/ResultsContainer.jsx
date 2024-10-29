function ResultsContainer() {
  return (
    <div className="bg-slate900 text-white py-8 px-5 lg:rounded-bl-xxl lg:p-10">
      <h2 className="font-bold text-xl mb-4">Your results</h2>
      <p className="text-slate300 text-sm mb-5 lg:mb-8">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayments&quot; again.
      </p>
      <div className="bg-slate950 py-4 px-3 rounded-lg border-t-4 border-lime lg:p-7">
        <div className=" border-b border-slate700 mb-4 lg:mb-7">
          <p className="text-slate300 mb-2 lg:mb-4">Your monthly repayments</p>
          <p className="mb-4 text-4xl font-bold text-lime lg:mb-8">$1,797.74</p>
        </div>
        <div>
          <p className="text-slate300 mb-2 lg:mb-4">
            Total you&apos;ll repay over the term
          </p>
          <p className="mb-1 text-2xl font-bold">$539,322.94</p>
        </div>
      </div>
    </div>
  );
}

export default ResultsContainer;
