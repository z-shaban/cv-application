
export function GeneralInfo({personalInfo, setPersonalInfo}){
  

   const handleChange = (e)=>{
      const {name, value} = e.target;
      setPersonalInfo((prevData)=>({
        ...prevData,
        [name]: value,
      }))
   }

   return (
    <>
    <div className="sectionHeader">
        <h2>Personal Information</h2>
    </div>
    
     {/* full Name*/}
    <div className="">
        <label htmlFor="fullName">Full Name</label><br />
        <input type="text" 
        id="fullName"
        name="fullName"
        value={personalInfo.fullName}
        placeholder="Enter your full Name"
         onChange={handleChange}
         />
    </div>
     
      {/* Email*/}
     <div className="">
        <label htmlFor="Email">E-mail</label><br />
        <input type="email" 
        id="email"
        name="email"
        value={personalInfo.email}
        placeholder="youremail@example.com"
        onChange={handleChange}
         />
    </div>
    
     {/*phone number*/}
    <div className="">
        <label htmlFor="phoneNumber">Phone Number</label><br />
        <input type="tel" 
        id="phoneNumber"
        name="phoneNumber"
        value={personalInfo.phoneNumber}
        placeholder="+233 xxx xxxx xx "
        onChange={handleChange}
         />
    </div>
   </>
   )
}