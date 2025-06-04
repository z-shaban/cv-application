export function GeneralInfo(){
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
        placeholder="Enter your full Name"
         />
    </div>
     
      {/* Email*/}
     <div className="">
        <label htmlFor="Email">E-mail</label><br />
        <input type="email" 
        id="email"
        name="email"
        placeholder="youremail@example.com"
         />
    </div>
    
     {/*phone number*/}
    <div className="">
        <label htmlFor="phoneNumber">Phone Number</label><br />
        <input type="tel" 
        id="phoneNumber"
        name="phoneNumber"
        placeholder="+233 xxx xxxx xx "
         />
    </div>
   </>
   )
}