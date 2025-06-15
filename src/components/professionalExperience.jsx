export function ProfessionalExperience({professionalExperience, setProfessionalExperience}){
     const handleChange = (e, index)=>{
      const {name,value}= e.target;

      setProfessionalExperience((prevExperience)=>
        prevExperience.map((edu,i)=>
        i===index? {...edu,[name]:value}: edu)
      )
     }

     const addProfessionalExperience =()=>{
      setProfessionalExperience((prevExperience)=>[
        ...prevExperience,
        {
           jobTitle: '',
         companyName : '',
         startDate: '',
         endDate: '',
        }
      ])
     }

     const removeExperience = (indexToRemove)=>{
      setProfessionalExperience((prevExperience)=>
      prevExperience.filter((exp, index)=> index !== indexToRemove))
  }
  
  return(
        <>
       
       <div className="sectionHeader">
         <h2>Professional Experience</h2>
       </div>
        
       {professionalExperience.map((exp,index)=>(
        <div key={index}>
           
            {/* job title*/}
          <div className="">
         <label htmlFor="jobTitle">Job title</label><br />
         <input type="text"
         name="jobTitle"
         id={`jobTitle-${index}`}
         placeholder="Frontend Engineer" 
         value={exp.jobTitle}
         onChange={(e)=> handleChange(e, index)}
         />
       </div>

         {/* company name*/}
        <div className="companyName">
         <label htmlFor="companyName">Company Name</label><br />
         <input type="text"
         name="companyName"
         id={`companyName-${index}`}
         placeholder="Company Name" 
         value={exp.companyName}
          onChange={(e)=> handleChange(e, index)}/>
       </div>

        {/* duration*/}
       <div className="">
        <div className="date">
            {/* start date*/}
             <label htmlFor="degree">Start Date</label><br />
            <input type="date"
             name="startDate"
             id={`startDate-${index}`}
             value={exp.startDate}
         onChange={handleChange}
          /> <br />
          {/*end date*/}
          <label htmlFor="degree">End Date</label><br />
            <input type="date"
             name="endDate"
             id={`endDate-${index}`}
             value={exp.endDate}
          onChange={(e)=> handleChange(e, index)}
          />
        </div>

        
       </div>
        {index > 0 && <button onClick={()=>removeExperience(index)} >Remove Experience</button>}
      </div>
       ))}


        {/*Add Professional Experience*/}
         <button onClick={addProfessionalExperience}>Add Experience</button>
        </>
    )
}


