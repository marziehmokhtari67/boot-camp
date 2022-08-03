import React from "react";
import { useState } from "react";
import{motion} from 'framer-motion'
function ContactUs() {
  const [info, setInfo] = useState('');
  const[message,setMessage]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(' کابر گرامی'+' ' + info +' '+ 'پیغام شما با موفقیت ثبت شد')
  };
  return (
    <motion.div className="form-container"
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <form onSubmit={handleSubmit}>
        <lable className="lable">نام و نام خانوادگی</lable>
        <input type="text" onChange={(e)=>setInfo(e.target.value)} ></input>
        <lable className="lable">تلفن تماس</lable>
        <input type="text"></input>
        <lable className="lable">ایمیل</lable>
        <input type="email"></input>
        <lable className="lable">پیغام</lable>
        <textarea></textarea>
        <button type="submit">تایید</button>
      </form>
      <div className="submitMessage">{message}</div>
    </motion.div>
  );
}

export default ContactUs;
