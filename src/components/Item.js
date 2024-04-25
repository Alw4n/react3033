import React, { useState } from "react";

import ItemAddForm from "./ItemAdd";

const Item = () => {
  const [itemArray, setItemArray] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);

  const handleFormSubmit = (formData) => {
    setItemArray([...itemArray, formData]);
  };

  const handleOptionChange = (itemId, option) => {
    setUserAnswers({ ...userAnswers, [itemId]: option });
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  const pageContent = itemArray.map((item, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = showAnswers && userAnswer === item.correct;

    return (
      <div key={index}>
        <h3>{item.description}</h3>

        <div className="options">
          <div>
            <input
              id={`option-1-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option1}
              onChange={() => handleOptionChange(index, item.option1)}
              disabled={showAnswers}
            />
            <label htmlFor={`option-1-${index}`}>{item.option1}</label>
          </div>

          <div>
            <input
              id={`option-2-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option2}
              onChange={() => handleOptionChange(index, item.option2)}
              disabled={showAnswers}
            />
            <label htmlFor={`option-2-${index}`}>{item.option2}</label>
          </div>

          <div>
            <input
              id={`option-3-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option3}
              onChange={() => handleOptionChange(index, item.option3)}
              disabled={showAnswers}
            />
            <label htmlFor={`option-3-${index}`}>{item.option3}</label>
          </div>

          <div>
            <input
              id={`option-4-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option4}
              onChange={() => handleOptionChange(index, item.option4)}
              disabled={showAnswers}
            />
            <label htmlFor={`option-4-${index}`}>{item.option4}</label>
          </div>
        </div>
        {showAnswers && (
          <p className={isCorrect ? "correct" : "incorrect"}>
            {isCorrect
              ? "Правильно!"
              : `Неправильно. Думать надо головой, ответ: ${item.correct}`}
          </p>
        )}
      </div>
    );
  });

  return (
    <>
      <ItemAddForm onFormSubmit={handleFormSubmit} />

      <button className="button" onClick={handleShowAnswers} disabled={showAnswers}>
        Узнать ответы
      </button>
      {pageContent}
    </>
  );
};

export default Item;