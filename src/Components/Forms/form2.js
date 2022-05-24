import React from "react";
import "./form.css";
import heroPic from "./111.png";
const form2 = () => {
 return (
   <div className="form-container m-5 p-5">
     <div className="row h-100">
       <div className="col-5 flex-col">
         <div className="imgBg-Circle"></div>
         <div className="img-container">
           <img src={heroPic} className="img-fluid" />
         </div>
       </div>
       <div className="col-7">
         <div className="form-content flex-col">
           <h2 className="mb-5">Term Life Insurance</h2>
           <div className="tags-container flex mb-2">
             <span className="tags-items me-3">No Medical Test Required</span>
             <span className="tags-items">Covid-19 Covered</span>
           </div>
           <div className="gender-container"></div>
           <div className="form-group mb-2">
             <label>Full Name</label>
             <input
               className="form-control form-control-lg"
               placeholder="Enetr your full name "
               required
             />
           </div>
           <div className="form-group mb-2">
             <label>Date of Birth</label>
             <input
               className="form-control form-control-lg"
               placeholder="DD/MM/YY "
               required
             />
           </div>
           <div className="form-group mb-2">
             <label>Mobile Number</label>
             <div class="input-group input-group-lg">
               <span class="input-group-text" id="input-group-lg-example">
                 India
               </span>
               <input
                 type="text"
                 class="form-control"
                 aria-label="Large input group"
                 aria-describedby="input-group-lg"
               />
             </div>
           </div>
           <div className="privacy-conainer">
             <p>By clicking you agree to Terms & Conditions</p>
           </div>
           <div className="form-group mb-4">
             <button className="submitBtn w-100" type="submit">
               Get Free Qoutes
             </button>
           </div>
           <div className="secured-msg form-group">
             <p>Your personal information is secured with us</p>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};
 
export default form2;
