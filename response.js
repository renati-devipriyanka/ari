document.querySelector('form').addEventListener('submit', function(e) {
   
    e.preventDefault();
    const urlInput = document.getElementById('url');
    const urlValue = urlInput.value;
  if(urlInput =="" && urlValue){
    alert("fill the form correctly");
    return
  }
  else{
    alert("successfully submited")
    return;
  }
   });
