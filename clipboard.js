function copyToClipboard(text) {
    //Create temporary elements
    var tempEl = document.createElement('textarea');
    //Set its contents to the received text
    tempEl.value = text;
    //Add it to the DOM
    document.body.appendChild(tempEl);
    //Give it focus
    tempEl.focus();
    //Choose its text
    tempEl.select();
    //Trigger a copy command of the selected text
    document.execCommand("copy");
    //Remove the element from the DOM
    tempEl.parentNode.removeChild(tempEl);
}
