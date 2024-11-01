"use client";
import { createContext, useState, useContext } from "react";

const initialState = {
  mortgageAmount: 0,
  mortgageTerm: 0,
  intrestRate: 0,
  mortgageType: "",
  results: false,
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
