import React, { createContext, useContext } from "react";
import { insertInquiryData } from "../utils/api";

const InsertContext = createContext();

export const useInsertContext = () => useContext(InsertContext);

export const InsertProvider = ({ children }) => {
  const insertInquiry = async (formData) => {
    try {
      const response = await insertInquiryData(formData);
      // Response handle
      console.log("Insert inquiry response:", response);
    } catch (error) {
      console.error("Error inserting inquiry:", error);
    }
  };

  return (
    <InsertContext.Provider value={insertInquiry}>
      {children}
    </InsertContext.Provider>
  );
};

export { InsertContext };
