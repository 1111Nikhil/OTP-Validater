import { useState, useRef, useEffect } from "react";
import "./styles.css";

const OTP_length = 5;
export default function App() {
  const [otp, setOtp] = useState(new Array(OTP_length).fill(""));
  const refarr = useRef([]);
  useEffect(() => {
    refarr.current[0].focus();
  }, []);
  const HandleChange = (value, index) => {
    if (isNaN(value)) return;
    const Newarray = [...otp];
    Newarray[index] = value.slice(-1);
    setOtp(Newarray);
    if (value != "" && index < OTP_length - 1) {
      refarr.current[index + 1].focus();
    }
  };
  const HandleBackspace = (e, index) => {
    console.log(index);
    if (index < 0) return;
    if (!e.target.value && e.key === "Backspace") {
      refarr.current[index - 1]?.focus();
    }
  };
  return (
    <div className="App">
      <h1>OTP Validater</h1>
      {otp?.map((input, index) => (
        <input
          key={index}
          className="OTPBOX"
          type="text"
          value={otp[index]}
          ref={(input) => (refarr.current[index] = input)}
          onChange={(e) => HandleChange(e.target.value, index)}
          onKeyDown={(e) => HandleBackspace(e, index)}
        />
      ))}
    </div>
  );
}
