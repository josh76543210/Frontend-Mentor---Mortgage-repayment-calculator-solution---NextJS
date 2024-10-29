import ResultsContainer from "../components/ResultsContainer";
import CalculatorContainer from "../components/CalculatorContainer";

export default function Home() {
  return (
    <div className="font-PlusJakartaSans text-slate900 bg-slate100 h-full 3sm:flex justify-center items-center">
      <div className="bg-white rounded-b-xl 3sm:rounded-3xl overflow-hidden max-w-lg lg:flex lg:max-w-4xl">
        <CalculatorContainer />
        <ResultsContainer />
      </div>
    </div>
  );
}
