export function ProfessionalExperience(){
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
         placeholder="Frontend Engineer" />
       </div>
       
        {/* company name*/}
       <div className="companyName">
         <label htmlFor="companyName">Company Name</label><br />
         <input type="text"
         name="companyName"
         id="companyName"
         placeholder="Company Name" />
       </div>
       
        {/* duration*/}
       <div className="">
        <div className="date">
            {/* start date*/}
             <label htmlFor="degree">Start Date</label><br />
            <input type="date"
             name="startDate"
             id="startDate"
          /> <br />
          {/*end date*/}
          <label htmlFor="degree">End Date</label><br />
            <input type="date"
             name="endDate"
             id="endDate"
          />
        </div>

         {/*Add Professional Experience*/}
         <button>Add Experience</button>
       </div>

        </>
    )
}