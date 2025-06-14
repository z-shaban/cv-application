
export function Submit({personalInfo, education, professionalExperience}){
    return (
    
            <>
             <h1>Your CV</h1>
            <div className="personalInfo">
           <p>{personalInfo.fullName}</p>
           <p>{personalInfo.email}</p>
           <p>{personalInfo.phoneNumber}</p>
            </div>
           
           <div className="education">
           <h1>EDUCATION</h1>
           <p>{education.schoolName} </p>
           <p>{education.degree} </p>
           <p>{education.startDate}</p>
           <p>{education.endDate}</p>
           </div>

           <div className="professional Experience">
           <h1>PROFESSIONAL EXPERIENCE</h1>
           <p>{professionalExperience.jobTitle} </p>
           <p>{professionalExperience.companyName}</p>
           <p>{professionalExperience.startDate}</p>
           <p>{professionalExperience.endDate}</p>
           </div>
           
   
            </>
        )}
        
    
