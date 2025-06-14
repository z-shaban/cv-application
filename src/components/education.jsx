export function Education({education, setEducation}){
  const handleChange= (e)=>{
   const {name, value} = e.target;
  
   setEducation((prevData)=>({
    ...prevData,
    [name] : value
   }))

  }

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
         placeholder="University Name" 
         value={education.schoolName}
         onChange={handleChange}
         />
         
       </div>
       
        {/* degree*/}
       <div className="">
         <label htmlFor="degree">Degree</label><br />
         <input type="text"
         name="degree"
         id="degree"
         placeholder="Bachelor of Science"
          value={education.degree}
         onChange={handleChange} />

       </div>
       
        {/* duration*/}
       <div className="">
        <div className="date">
            {/* start date*/}
             <label htmlFor="degree">Start Date</label><br />
            <input type="date"
             name="startDate"
             id="startDate"
              value={education.startDate}
         onChange={handleChange}
          /> <br />
          {/*end date*/}
          <label htmlFor="degree">End Date</label><br />
            <input type="date"
             name="endDate"
             id="endDate"
              value={education.endDate}
         onChange={handleChange}
          />
        </div>

         {/*Add Education*/}
         <button>Add Education</button>
       </div>

        </>
    )
}