// Listen for the message from the popup to start scraping
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "scrapeData") {
      let conversation = []; // Collect data here
      // Scrape the conversation. This will require understanding the DOM structure of chat.openai.com
      // and adjusting the code accordingly. This is just a placeholder.
      let chatElements = document.querySelectorAll('.chat-element-class'); // This class needs to be updated based on the actual website's structure.
      chatElements.forEach(element => {
        conversation.push(element.innerText);
      });
      sendResponse({data: conversation});
    }
  });
  