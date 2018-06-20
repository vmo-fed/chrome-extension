chrome.history.search({
    startTime: (new Date()).getTime() - 1000 * 60 * 60 * 24 * 7,
    text: 'chrome'
}, function(res){
    var historyTemplate = document.querySelector('#history-template').innerHTML;
    Mustache.parse(historyTemplate);
    var rendered = Mustache.render(historyTemplate, {historyList: res});
    document.querySelector('#history').innerHTML = rendered;
})