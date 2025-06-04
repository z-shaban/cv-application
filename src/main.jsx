import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GeneralInfo } from './components/generalInfo.jsx'
import { Education } from './components/education.jsx'
import { ProfessionalExperience } from './components/professionalExperience.jsx'
import { Submit } from './components/submit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GeneralInfo/>
  <Education/>
  <ProfessionalExperience/>
  <Submit/>
  </StrictMode>,
)
