document.getElementById('downloadBtn').addEventListener('click', function() {
    // Ask the content script to scrape the data
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: {tabId: activeTab.id},
        function: scrapeData
      }, (result) => {
        // Send the scraped data to background for PDF generation
        chrome.runtime.sendMessage({action: "generatePDF", data: result[0].result});
      });
    });
  });
  
  function scrapeData() {
    // This function will be serialized and cannot use variables from outside its scope
    let conversation = [];
    let chatElements = document.querySelectorAll('.chat-element-class'); // Update this class based on the website's structure.
    chatElements.forEach(element => {
      conversation.push(element.innerText);
    });
    return conversation;
  }
  