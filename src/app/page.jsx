import ResultsContainer from "../components/ResultsContainer";
import CalculatorContainer from "../components/CalculatorContainer";
import Footer from "../components/Footer";
import { FormProvider } from "../contexts/FormContext";

export default function Home() {
  return (
    <FormProvider>
      <div className="font-PlusJakartaSans text-slate900 bg-slate100 h-full min-h-screen flex justify-center items-center flex-col 2sm:pt-8">
        <div className="bg-white rounded-b-xl 2sm:rounded-3xl overflow-hidden max-w-xl lg:flex lg:max-w-4xl mx-auto shrink-0 mt-0 2sm:mt-auto">
          <CalculatorContainer />
          <ResultsContainer />
        </div>
        <Footer />
      </div>
    </FormProvider>
  );
}
