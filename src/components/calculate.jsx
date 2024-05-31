import { IconStar } from "./icons";
import React from "react";

export default function Caculate({ feedback }) {
   let total = 0;
   for (let i = 0; i<feedback?.length; i++) 
   {
      total += Number(feedback[i]?.rating)
   }
   const rating = Math.round(total/feedback?.length)
   return (
      <div className="flex">
         <div className="flex">
            { feedback.length === 0 ||
               [...Array(rating)].map(ele => {
                  return <IconStar fill="#FBBC05" />
               })
            }  
         </div>
         <div className="flex">
            { feedback.length === 0 ||
               [...Array(5 - rating)].map(ele => {
               return <IconStar fill="#A9A9A9" />
               })
            }  
         </div>
      </div>
   )
}