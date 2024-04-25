const keys = document.querySelectorAll(".key");
const output = document.querySelector('.output');
const caps = document.querySelector('.caps')
let capsPressed = false;
let currentText = '';


keys.forEach((key)=>{
  key.addEventListener('click',()=>{
      const keyContent = key.innerHTML;
      if(keyContent === 'Delete'){
        if(currentText.length > 0){
            currentText = currentText.slice(0,-1);
            updateOutput(currentText);
        }
      }
      else if(keyContent === "caps lock"){
        caps.classList.toggle('caps-color');
        capsPressed = !capsPressed;
      }
      else if(keyContent === "Space"){
        currentText += " ";
        updateOutput(currentText);
      }
      
      else{
        const char = capsPressed? keyContent.toUpperCase() : keyContent.toLowerCase();
          currentText += char;
          updateOutput(currentText);
      }
    })
});



function updateOutput(text){
    output.textContent = text;
}