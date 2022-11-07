window.onload = function() {		
	for (let node of document.querySelectorAll("td"))
	{
		node.onclick = function()
		{
			if(node.className == "")
			{
				node.className = "selected"
			}
			else 
			{
				node.className = ""
			}
		}
		if(node.textContent !="") continue;
		let charCode = Math.round(65 + Math.random() * 25)
		node.textContent = String.fromCharCode(charCode)
	}
}