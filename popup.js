document.getElementById("toggle").addEventListener("click", async () => {
    console.log("toggle button running");
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.scripting.executeScript(
        {
      target: { tabId: tab.id },
      func: toggleDarkMode
 
    })
  });

  function toggleDarkMode(){

    const styleId = "dark-mode-style"
    const existing = document.getElementById(styleId)


    
    if(existing){
        console.log("existing conditional running");
        existing.remove(); 
    } else{//make new element of style id
        //assign it the textContent of the css styling we want
        const style = document.createElement("style"); 
        style.id = styleId; 
        style.textContent = `
        * {
        background-color: rgb(0, 0, 0) !important;
        color: white !important;
        border-color: white !important;
      }
      a:link,
      a:visited,
      a:hover,
      a:active {
        color:  #25edff !important; 
      }`; 
        document.head.appendChild(style); 

    }

    
  }