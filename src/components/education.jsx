export function Education({education, setEducation}){
  const handleChange= (index,e)=>{
   const {name, value} = e.target;
  
   setEducation((prevEducation)=>
     prevEducation.map((edu,i)=>
    i === index?{...edu, [name]:value}: edu
    )
   )

  }

  const addEducation = ()=>{
    setEducation((prevEducation)=>[
      ...prevEducation,
      {
         schoolName: "",
         degree: '',
         startDate: '',
         endDate: '',
      }
    ])
  }

  const removeEducation = (indexToRemove)=>{
      setEducation((prevEducation)=>
      prevEducation.filter((edu, index)=> index !== indexToRemove))
  }

    return(
        <>
        <div className="sectionHeader">
         <h2>Education</h2>
       </div>

       {education.map((edu,index)=>(
        <div key={index}>
          

          {/* school name*/}
         <div className="">
         <label htmlFor="schoolName">School/University</label><br />
         <input type="text"
         name="schoolName"
         id={`schoolName-${index}`}
         placeholder="University Name" 
         value={edu.schoolName}
         onChange={(e) => handleChange(index, e)}
         /> 
       </div>

       {/* degree*/}
       <div className="">
         <label htmlFor="degree">Degree</label><br />
         <input type="text"
         name="degree"
         id={`degree-${index}`}
         placeholder="Bachelor of Science"
          value={edu.degree}
        onChange={(e) => handleChange(index, e)}  />
       </div>

        {/* duration*/}
       <div className="">

        <div className="date">

            {/* start date*/}
             <label htmlFor="degree">Start Date</label><br />
            <input type="date"
             name="startDate"
              id={`startDate-${index}`}
              value={edu.startDate}
            onChange={(e) => handleChange(index, e)}
          /> <br />

          {/*end date*/}
          <label htmlFor="degree">End Date</label><br />
            <input type="date"
             name="endDate"
              id={`endDate-${index}`}
              value={edu.endDate}
            onChange={(e) => handleChange(index, e)}
          />
        </div>
        </div>
        {index > 0 && <button onClick={()=>removeEducation(index)} >Remove Education</button>}
        </div>
       ))}

       
         {/*Add Education*/}
         <button onClick={addEducation} >Add Education</button>

        
        </>
    )
}


 
        
        
       
        
       
       
     
