var maxWidth = window.screen.availWidth;
var maxHeight = window.screen.availHeight;
var halfLeft = {
    left: 0,
    top: 0,
    width: maxWidth / 2,
    height:  maxHeight
};

var halfRight = {
    left: maxWidth / 2,
    top: 0,
    width: maxWidth / 2,
    height:  maxHeight
};

document.getElementById('two').addEventListener('click', function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.windows.update(tabs[0].windowId, halfLeft);

      chrome.windows.create({tabId: tabs[0].id}, function(win){
          chrome.windows.update(win.id, halfRight);
      })

  });
})
chrome.windows.onCreated.addListener(function (win) {
  chrome.windows.update(win.id, halfRight);
})
