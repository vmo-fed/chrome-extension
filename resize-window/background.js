var maxWidth = window.screen.availWidth;
var maxHeight = window.screen.availHeight;
var halfLeft = {
  left: 0,
  top: 0,
  width: parseInt(maxWidth / 2),
  height:  maxHeight
};

var halfRight = {
  left:  parseInt(maxWidth / 2),
  top: 0,
  width:  parseInt(maxWidth / 2),
  height:  maxHeight
};

var halfTop = {
  top: 0,
  left: 0,
  width: maxWidth,
  height: parseInt(maxHeight / 2)
};

var halfBottom = {
  top: parseInt(maxHeight / 2),
  left: 0,
  width: maxWidth,
  height: parseInt(maxHeight / 2)
}

var fouth1 = {
  top: 0,
  left: 0,
  width:  parseInt(maxWidth / 2),
  height: parseInt(maxHeight / 2)
}

var fouth2 = {
  top: 0,
  left: parseInt(maxHeight / 2),
  width:  parseInt(maxWidth / 2),
  height: parseInt(maxHeight / 2)
}
var fouth3 = {
  top: parseInt(maxHeight / 2),
  left: 0,
  width:  parseInt(maxWidth / 2),
  height: parseInt(maxHeight / 2)
}
var fouth4 = {
  top: parseInt(maxHeight / 2),
  left: parseInt(maxHeight / 2),
  width:  parseInt(maxWidth / 2),
  height: parseInt(maxHeight / 2)
}
document.getElementById('two').addEventListener('click', function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.windows.update(tabs[0].windowId, halfLeft);

      chrome.windows.create({tabId: tabs[0].id}, function(win){
          chrome.windows.update(win.id, halfRight);
      })

  });
})
document.getElementById('up').addEventListener('click', function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.windows.update(tabs[0].windowId, halfTop);

      chrome.windows.create({tabId: tabs[0].id}, function(win){
          chrome.windows.update(win.id, halfBottom);
      })

  });
})
document.getElementById('fouth').addEventListener('click', function(){
  chrome.tabs.query({status: "complete"}, function(tabs){
      chrome.windows.update(tabs[0].windowId, fouth1);
      chrome.windows.create({tabId: tabs[0].id}, function(win){
          chrome.windows.update(win.id, fouth1);
      })
      chrome.windows.create({tabId: tabs[1].id}, function(win){
          chrome.windows.update(win.id, fouth2);
      })
      chrome.windows.create({tabId: tabs[2].id}, function(win){
          chrome.windows.update(win.id, fouth3);
      })
      chrome.windows.create({tabId: tabs[3].id}, function(win){
          chrome.windows.update(win.id, fouth4);
      })
  });
})
chrome.windows.onCreated.addListener(function (win) {
  debugger
  chrome.windows.update(win.id, fouth1);
})
