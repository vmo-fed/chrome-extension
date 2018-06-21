//chrome.windows.getCurrent(function(wind) {
//    alert(wind.id);
//    var maxWidth = window.screen.availWidth;
//    var maxHeight = window.screen.availHeight;
//    var updateInfo = {
//        left: 0,
//        top: 0,
//        width: 300,
//        height: 300
//    };
//    chrome.windows.update(wind.id, updateInfo);});
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

chrome.tabs.query({active: true}, function(tabs){
    //chrome.tabs.move(tabs[0].id, {index: -1, windowId: 2}, function(){
    //
    //})

    console.log(tabs)
    chrome.windows.update(tabs[0].windowId, halfLeft);

    chrome.windows.create({tabId: tabs[0].id}, function(win){
        chrome.windows.update(win.id, halfRight);
    })

});

//chrome.tabs.getCurrent(function(tab){
//    console.log(tab)
//})

//chrome.tabs.create({windowId: 2})