import { createContext, useContext, useState } from "react";

const DatingContext = createContext();

export function DatingProvider({ children }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const resetDate = () => {
    setTermsAccepted(false);
    setSelectedDate("");
    setSelectedTime("");
    setSelectedPlace(null);
  };

  return (
    <DatingContext.Provider
      value={{
        termsAccepted,
        setTermsAccepted,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        selectedPlace,
        setSelectedPlace,
        resetDate,
      }}
    >
      {children}
    </DatingContext.Provider>
  );
}

export function useDating() {
  return useContext(DatingContext);
}

