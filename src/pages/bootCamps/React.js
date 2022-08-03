import React from "react";
import{motion} from 'framer-motion'

function REact() {
  return (
    <motion.div className="react"
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className="description">
        <h2>(ReactJS)زبان برنامه نویسی ری‌اکت</h2>
      <p>تقریباً همه شما می‌دانید که یادگیری زبان جاوا اسکریپت برای ساخت<br></br>
      ReactJSصفحات وب لازم است اما ممکن است در آگهی‌های استخدام به جز این سه زبان، اسم<br></br>
       زبان برنامه‌نویسیReactJS را دیده باشید و احتمالاً این سؤال برایتان مطرح شده که آیا
    است؟ در ایی جا شما را با این زبان برنامه نویسی آشنا خواهیم کرد
      </p>
      </div>
        <img ></img>
    </motion.div>
  );
}

export default REact;
