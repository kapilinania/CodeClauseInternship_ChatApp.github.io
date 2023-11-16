   
// File operations
document.addEventListener('DOMContentLoaded', function () {
    const newFileItem = document.getElementById('newFileItem');
    const openFileItem = document.getElementById('openFileItem');
    const saveFileItem = document.getElementById('saveFileItem');
    const notepadContent = document.querySelector('.text-area');
  
    newFileItem.addEventListener('click', openNewFile);
    openFileItem.addEventListener('click', openFile);
    saveFileItem.addEventListener('click', saveFile);
  
    function openNewFile() {
      window.open('index.html', '_blank');
    }
  
    function openFile() {
      const fileInput = createFileInput();
      fileInput.addEventListener('change', function () {
        readFile(fileInput);
      });
      fileInput.click();
    }
  
    function saveFile() {
      const content = notepadContent.innerText;
      const blob = new Blob([content], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'file.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  
    function createFileInput() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'text/*';
      return fileInput;
    }
  
    function readFile(fileInput) {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          notepadContent.innerHTML = e.target.result;
        };
        reader.readAsText(file);
      }
    }
  });
  
  // Cut, copy, paste operations
  document.addEventListener('DOMContentLoaded', function () {
    const cutItem = document.getElementById('cutItem');
    const copyItem = document.getElementById('copyItem');
    const pasteItem = document.getElementById('pasteItem');
    const selectAllItem = document.getElementById('selectAllItem');
    const notepadContent = document.querySelector('.text-area');
  
    cutItem.addEventListener('click', function () {
      document.execCommand('cut');
    });
  
    copyItem.addEventListener('click', function () {
      document.execCommand('copy');
    });
  
    pasteItem.addEventListener('click', pasteText);
  
    selectAllItem.addEventListener('click', function () {
      selectAllText(notepadContent);
    });
  
    function pasteText() {
      navigator.clipboard.readText()
        .then(text => {
          notepadContent.innerHTML += text;
        })
        .catch(err => {
          console.error('Error reading clipboard content:', err);
        });
    }
  
    function selectAllText(element) {
      const range = document.createRange();
      range.selectNodeContents(element);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
  
  // Zoom and status bar
  document.addEventListener('DOMContentLoaded', function () {
    const textArea = document.querySelector('.text-area');
    const zoomInBtn = document.querySelector('#zoomInBtn');
    const zoomOutBtn = document.querySelector('#zoomOutBtn');
    const statusBarBtn = document.querySelector('#statusBarBtn');
  
    zoomInBtn.addEventListener('click', function () {
      changeFontSize('increase', textArea);
    });
  
    zoomOutBtn.addEventListener('click', function () {
      changeFontSize('decrease', textArea);
    });
  
    statusBarBtn.addEventListener('click', function () {
      toggleStatusBar();
    });
  
    function changeFontSize(action, element) {
      let fontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
  
      if (action === 'increase') {
        fontSize += 2;
      } else if (action === 'decrease') {
        fontSize = Math.max(4, fontSize - 2);
      }
  
      element.style.fontSize = fontSize + 'px';
    }
  
    function toggleStatusBar() {
      const statusBar = document.querySelector('.footer');
      statusBar.classList.toggle('hidden');
    }
  });
  
  // Cursor updated code
  document.addEventListener('DOMContentLoaded', function () {

  
    // Example: Cursor focus
    const textArea = document.querySelector('.text-area');
    textArea.focus();
  
    // Example: Update cursor position
    textArea.addEventListener('input', function () {
      updateCursorPosition(textArea);
    });
  });
  
  function updateCursorPosition(textArea) {
    const cursorPositionDiv = document.getElementById('cursorPosition');
    const text = textArea.textContent || textArea.innerText;
    const caret = window.getSelection().getRangeAt(0).startOffset;
    const lines = text.substr(0, caret).split('\n');
    const currentLine = lines.length;
    const currentCol = lines[lines.length - 1].length + 1;
  
    cursorPositionDiv.textContent = `Ln ${currentLine}, Col ${currentCol}`;
  }

  //top menu user when click then updated
  document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.nav-item a');

    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        // Remove 'active' class from all menu items
        menuItems.forEach(item => {
          item.classList.remove('active');
        });

        // Add 'active' class to the clicked menu item
        this.classList.add('active');

        
      });
    });
  });

 




  
   // Function to change font size of the contenteditable div
   function changeFontSize(action) {
    const textArea = document.querySelector('.text-area');
    const currentSize = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
    let newSize;

    if (action === 'increase') {
        newSize = parseInt(currentSize) + 2;
    } else if (action === 'decrease') {
        newSize = Math.max(8, parseInt(currentSize) - 2); // Ensure the font size doesn't go below 8px
    }

    textArea.style.fontSize = newSize + 'px';
}


// Function to set text alignment for the contenteditable div
function setAlignment(alignment) {
    document.querySelector('.text-area').style.textAlign = alignment;
}

function getCursorPosition(element) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(element);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const start = preSelectionRange.toString().length;

    return {
        start: start,
        end: start + range.toString().length
    };
}

//dark and ligh mode code is here
let isDarkMode = false;

function toggleLightDarkMode() {
    const modeBtn = document.getElementById('modeBtn');
    const modeIcon = document.getElementById('modeIcon');

    isDarkMode = !isDarkMode;

    modeIcon.className = isDarkMode ? 'bi bi-moon' : 'bi bi-sun';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }

    // Additional logic for applying styles based on the mode
}


//bold iilaiuc underline uppercase lower case and unerline code is here

  function updateCursorPosition(element) {
    // You can add any additional functionality here if needed
  }

  function formatText(command) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    
    if (selectedText) {
      let modifiedText;
      switch (command) {
        case 'bold':
        case 'italic':
        case 'underline':
          document.execCommand(command, false, null);
          break;
        case 'uppercase':
          modifiedText = selectedText.toUpperCase();
          document.execCommand('insertText', false, modifiedText);
          break;
        case 'lowercase':
          modifiedText = selectedText.toLowerCase();
          document.execCommand('insertText', false, modifiedText);
          break;
        case 'capitalize':
          modifiedText = selectedText.charAt(0).toUpperCase() + selectedText.slice(1);
          document.execCommand('insertText', false, modifiedText);
          break;
        default:
          break;
      }
    }
  }


  function updateCursorPosition(textArea) {
    // Get the text content
    var text = textArea.innerText;

    // Get the selection range
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);

    // Calculate the current line and column
    var beforeSelection = text.substring(0, range.startOffset);
    var lines = beforeSelection.split('\n');
    var line = lines.length;
    var column = lines[lines.length - 1].length + 1;

    // Update the cursor position display
    document.getElementById('cursorPosition').innerText = 'Ln ' + line + ', Col ' + column;
  }


 function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('open');
    }


  

  