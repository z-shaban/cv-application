export function ProfessionalExperience({professionalExperience, setProfessionalExperience}){
     const handleChange = (e)=>{
      const {name,value}= e.target;

      setProfessionalExperience((prevData)=>({
        ...prevData,
        [name]: value,
      }))
     }
  
  return(
        <>
       <div className="sectionHeader">
         <h2>Professional Experience</h2>
       </div>
        
         {/* job title*/}
       <div className="">
         <label htmlFor="jobTitle">Job title</label><br />
         <input type="text"
         name="jobTitle"
         id="jobTitle"
         placeholder="Frontend Engineer" 
         value={professionalExperience.jobTitle}
         onChange={handleChange}
         />
       </div>
       
        {/* company name*/}
       <div className="companyName">
         <label htmlFor="companyName">Company Name</label><br />
         <input type="text"
         name="companyName"
         id="companyName"
         placeholder="Company Name" 
         value={professionalExperience.companyName}
         onChange={handleChange}/>
       </div>
       
        {/* duration*/}
       <div className="">
        <div className="date">
            {/* start date*/}
             <label htmlFor="degree">Start Date</label><br />
            <input type="date"
             name="startDate"
             id="startDate"
             value={professionalExperience.startDate}
         onChange={handleChange}
          /> <br />
          {/*end date*/}
          <label htmlFor="degree">End Date</label><br />
            <input type="date"
             name="endDate"
             id="endDate"
             value={professionalExperience.endDate}
         onChange={handleChange}
          />
        </div>

         {/*Add Professional Experience*/}
         <button>Add Experience</button>
       </div>

        </>
    )
}