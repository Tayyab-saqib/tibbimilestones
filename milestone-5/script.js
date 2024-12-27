document.getElementById("generateResume").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());
    const experience = document.getElementById("experience").value;
  
    const resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Summary</h3>
      <p>${summary}</p>
      <h3>Skills</h3>
      <ul>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
      <h3>Experience</h3>
      <p>${experience}</p>
    `;
  });
  
  document.getElementById("downloadResume").addEventListener("click", () => {
    const resumeContent = document.getElementById("resumeOutput").innerHTML;
    const blob = new Blob([resumeContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.html";
    link.click();
  });
  
  document.getElementById("shareResume").addEventListener("click", () => {
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      summary: document.getElementById("summary").value,
      skills: document.getElementById("skills").value,
      experience: document.getElementById("experience").value,
    };
    const query = new URLSearchParams(formData).toString();
    const shareLink = `${window.location.origin}${window.location.pathname}?${query}`;
    navigator.clipboard.writeText(shareLink).then(() => {
      alert("Shareable link copied to clipboard!");
    });
  });
  
  // On page load, check for query parameters
  window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("name")) {
      document.getElementById("name").value = params.get("name");
      document.getElementById("email").value = params.get("email");
      document.getElementById("phone").value = params.get("phone");
      document.getElementById("summary").value = params.get("summary");
      document.getElementById("skills").value = params.get("skills");
      document.getElementById("experience").value = params.get("experience");
      document.getElementById("generateResume").click();
    }
  };
  