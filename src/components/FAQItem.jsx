import { useEffect, useState } from "react";

const FAQItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (index == 0) {
      setIsShow(true);
    }
  });
  const handleClick = () => {
    setIsShow((isShow) => !isShow);
  };
  return (
    <div className="faq-box">
      <div key={index} className="question" onClick={handleClick}>
        <button className={isShow ? "arrow" : ""}>></button>
        <div>{faq.question}</div>
      </div>
      {isShow && <div className="answer">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
