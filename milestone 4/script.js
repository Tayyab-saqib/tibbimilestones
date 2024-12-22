function updateResume() {
    // Get user input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;

    // Update the resume display with input values
    document.getElementById("resume-name").children[1].innerText = name;
    document.getElementById("resume-email").children[1].innerText = email;
    document.getElementById("resume-phone").children[1].innerText = phone;
    document.getElementById("resume-address").children[1].innerText = address;
    document.getElementById("resume-education").children[1].innerText = education;
    document.getElementById("resume-skills").children[1].innerText = skills;
    document.getElementById("resume-experience").children[1].innerText = experience;
}
