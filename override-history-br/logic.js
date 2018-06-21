let $ = document.getElementById.bind(document);

function constructHistory(historyItems) {
  let template = $('historyTemplate');
  for (let item of historyItems) {
    let pageName = template.content.querySelector(".historyWrap");
    let host = new URL(item.url).host;
    pageName.innerHTML = item.title;
    if (item.title === '') {
      pageName.innerHTML = host;
    }
  }
}

chrome.history.search({
  text: '',
  startTime: (new Date).getTime() - 1000 * 60 * 60 * 24 * 7,
  maxResults: 99
}, constructHistory);
