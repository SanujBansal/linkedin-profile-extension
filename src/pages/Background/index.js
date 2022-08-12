chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { text: 'toggleMain' });
  console.log('Sending message!');
});
