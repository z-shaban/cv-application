
export function Submit({personalInfo, education, professionalExperience}){
    return (
    
            <div className="finalCV">
             <h1>Your CV</h1>
            <div className="personalInfo">
           <p>{personalInfo.fullName || 'John Doe'} </p>
           <p>{personalInfo.email || 'johndoe@email.com'}</p>
           <p>{personalInfo.phoneNumber || '089 2345 8765'}</p>
            </div>
           
           <div className="education">
          <h1>EDUCATION</h1>

          {education.map((edu, index) =>( 
           
            <div key={index}>
            <p>{edu.schoolName || 'KNUST'} </p>
           <p>{edu.degree || 'Bachelor of Science'} </p>
           <p>{edu.startDate || " 2020"} - {education.endDate || '2024'}</p>
            </div>
            
          
           
         ) )}
           </div>

           <div className="professional Experience">
           <h1>PROFESSIONAL EXPERIENCE</h1>
           {professionalExperience.map((exp, index)=>(
            <div key={index}>
            <p>{exp.jobTitle || 'FrontEnd Engineer'} </p>
           <p>{exp.companyName || 'Amazon'}</p>
           <p>{exp.startDate || "2025"} - {professionalExperience.endDate || 'present'}</p>
            </div>
           ))}
         </div>
           
   
            </div>
        )}
        
    
 
           