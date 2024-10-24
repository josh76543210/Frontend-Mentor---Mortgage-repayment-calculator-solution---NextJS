function RadioInput() {
  return (
    <div>
      <label
        htmlFor="mortgage-type"
        className="text-slate700 mb-2 inline-block"
      >
        Mortgage Type
      </label>
      <div className="flex items-center mb-4">
        <input
          id="repayment"
          type="radio"
          name="mortgage-type"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label
          htmlFor="repayment"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          Repayment
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="intrest-only"
          type="radio"
          value=""
          name="mortgage-type"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
        />
        <label
          htmlFor="intrest-only"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          Intrest Only
        </label>
      </div>
    </div>
  );
}

export default RadioInput;
