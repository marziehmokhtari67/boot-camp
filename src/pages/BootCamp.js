import React from "react";
import{useNavigate} from 'react-router-dom'
import{motion} from 'framer-motion'
function BootCamp() {
  const navigate=useNavigate()
  return (
    <>
      <motion.div className="wrapper"
      intial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
        <div className="text">
          <h2>بوت کمپ‌های آموزشی</h2>
          <p>
            دوره‌های آموزشی-استخدامی به شکل دو روز در هفته طی چهار الی پنج ماه و
            به صورت کارگاهی و عملیاتی برگزار می‌شوند. فارغ‌التحصیلان این دوره‌ها
            پس از کسب مهارت‌های فنی و شغلی به تدریج وارد بازار کار خواهند شد.
            برای حضور در این دوره‌ها الزامی به تحصیل در رشته‌های دانشگاهی مرتبط
            با کامپیوتر نیست، اما داشتن استعداد، پشتکار فراوان و همچنین آشنایی
            اولیه با مبانی مرتبط ضروری است 
          </p>
        </div>
        <div className="bootcamps-wrapper">
          <div>
            <button onClick={()=>navigate('/bootCamp/java')}>JAVA</button>
          </div>
          <div>
            <button onClick={()=>navigate('/bootCamp/php')}>PHP</button>
          </div>
          <div>
            <button onClick={()=>navigate('/bootCamp/python')}>Python</button>
          </div>
          <div>
            <button onClick={()=>navigate('/bootCamp/react')}>React.JS</button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default BootCamp;
