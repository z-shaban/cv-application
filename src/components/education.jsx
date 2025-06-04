export function Education(){
    return(
        <>
       <div className="sectionHeader">
         <h2>Education</h2>
       </div>
        
         {/* school name*/}
       <div className="">
         <label htmlFor="schoolName">School/University</label><br />
         <input type="text"
         name="schoolName"
         id="schoolName"
         placeholder="University Name" />
       </div>
       
        {/* degree*/}
       <div className="">
         <label htmlFor="degree">Degree</label><br />
         <input type="text"
         name="degree"
         id="degree"
         placeholder="Bachelor of Science" />
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

         {/*Add Education*/}
         <button>Add Education</button>
       </div>

        </>
    )
}