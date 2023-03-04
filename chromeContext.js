const contextMenuItem = {
  id: 'convertGrossToNet',
  title: 'Convertir %s en net',
  contexts: ['selection'],
};

chrome.contextMenus.create(contextMenuItem, () => chrome.runtime.lastError);
chrome.contextMenus.onClicked.addListener(getWord);

function getWord(info, tab) {
  console.log(info);
  console.log(tab);
}
