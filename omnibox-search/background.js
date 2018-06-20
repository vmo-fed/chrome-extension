chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.tabs.update({
     url: "https://www.baidu.com/s?ie=UTF-8&wd=" + text;
    });
  });
