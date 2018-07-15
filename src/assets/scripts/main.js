var sections = ["section-about", "section-root"];

function showSection(section){
	for(i = 0; i < sections.length; i++){
		if (section == sections[i]) document.getElementById(sections[i]).style.display = "block";
		else document.getElementById(sections[i]).style.display = "none";
	}
}

