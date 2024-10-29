function ResultsContainer() {
  return (
    <div className="bg-slate900 text-white py-8 px-4">
      <h2 className="font-bold text-xl mb-4">Your results</h2>
      <p className="text-slate300 mb-4">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayments&quot; again.
      </p>
      <div className="bg-slate950 py-4 px-3">
        <div className=" border-b border-slate700 mb-4">
          <p className="text-slate300 mb-2">Your monthly repayments</p>
          <p className="mb-4 text-4xl font-bold text-lime">$1,797.74</p>
        </div>
        <div>
          <p className="text-slate300 mb-2">
            Total you&apos;ll repay over the term
          </p>
          <p className="mb-1 text-2xl font-bold">$539,322.94</p>
        </div>
      </div>
    </div>
  );
}

export default ResultsContainer;
