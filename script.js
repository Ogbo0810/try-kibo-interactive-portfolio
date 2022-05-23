var hireButton = document.getElementById('hire-btn');

hireButton.addEventListener('click', function(){
hireButton.classList.remove("hire-btn");
hireButton.classList.add("afterClick");
hireButton.textContent = "Hired";
hireButton.disabled=true;

alert("Wow! Thank you for hiring me");
}
);