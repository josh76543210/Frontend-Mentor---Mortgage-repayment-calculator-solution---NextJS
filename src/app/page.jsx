import ResultsContainer from "../components/ResultsContainer";
import CalculatorContainer from "../components/CalculatorContainer";

export default function Home() {
  return (
    <div className="font-PlusJakartaSans text-slate900 bg-slate100 h-full flex justify-center items-center">
      <div className="bg-white rounded-xl">
        <CalculatorContainer />
        <ResultsContainer />
      </div>
    </div>
  );
}
