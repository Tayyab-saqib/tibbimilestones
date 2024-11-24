
// get refrence to the form display area


const form= document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayelement = document.getElementById('resume-display') as HTMLDivElement


form.addEventListener('submit', (event: Event) =>{

    event.preventDefault();   //prevent page reload

//collect values


const name = (document.getElementById('name') as HTMLInputElement ).value
const email = (document.getElementById('email') as HTMLInputElement ).value
const Phone = (document.getElementById('Phone') as HTMLInputElement ).value
const education= (document.getElementById('education') as HTMLInputElement ).value
const experience = (document.getElementById('experience') as HTMLInputElement ).value
const skills = (document.getElementById('skills') as HTMLInputElement ).value

// generate the resume or content dynamically

const resumeHTML = `
  <h2><b>Resume</b></h2>
   <h3>Personal Information</h3>
<p><b>Name:</b>${name}<p/>
<p><b>Email:</b>${email}<p/>
<p><b>Phone:</b>${Phone}<p/>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>skills</h3>
<p>${skills}</p>

   `;
 
 
//  display  generated resume



if (resumeDisplayelement){resumeDisplayelement.innerHTML = resumeHTML;

   
}else{console.error('the resume display element is missing ');}




}) 