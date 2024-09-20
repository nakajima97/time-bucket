import { useNavigate } from "@remix-run/react";
import { Question } from "../Question";
import { useState } from "react";

export const QuestionContainer = () => {
  const [age, setAge] = useState<number | undefined>(undefined);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/task");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value === "") {
      setAge(undefined);
      return;
    }

    setAge(Number(value));
  };

  return <Question onClick={handleClick} age={age} onChange={handleChange} />;
};
