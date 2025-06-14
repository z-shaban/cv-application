import { useState } from 'react'
import './App.css'
import { GeneralInfo } from './components/generalInfo.jsx'
import { Education } from './components/education.jsx'
import { ProfessionalExperience } from './components/professionalExperience.jsx'
import { Submit } from './components/submit.jsx'


function App() {
   const [personalInfo, setPersonalInfo] = useState({
    fullName:'',
    email: '',
    phoneNumber: ''
   })

   const [education, setEducation]= useState({
    schoolName: "",
    degree: '',
    startDate: '',
    finishDate: '',
   })

   const [professionalExperience, setProfessionalExperience]= useState({
    jobTitle: '',
    companyName : '',
    startDate: '',
    endDate: '',
   })
  return <>
  <GeneralInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
    <Education education={education} setEducation={setEducation} />
    <ProfessionalExperience professionalExperience = {professionalExperience} setProfessionalExperience={setProfessionalExperience} />
    <Submit personalInfo={personalInfo} education={education} professionalExperience={professionalExperience} />
    </>
}

export default App
