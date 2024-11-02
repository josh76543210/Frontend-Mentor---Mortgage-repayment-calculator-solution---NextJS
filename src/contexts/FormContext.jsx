"use client";
import { createContext, useState, useContext } from "react";

const initialState = {
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
};

const FormContext = createContext(undefined);

function FormProvider({ children }) {
  const [formState, setFormState] = useState(initialState);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
}

function useFormData() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("FormContext was used outside of the FormDataProvider");
  return context;
}

export { FormProvider, useFormData };
