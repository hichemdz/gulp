"use strict";

var massenger_chat = document.querySelector('#massenger_chat');
var emojy_show = document.querySelector('#emojy_show');
var input_chat = document.querySelector('#input_chat');
var emojy = document.createElement('div');
emojy.id = 'emojy';
emojy.className = 'bg-red-200 w-64 absolute hidden right-0 bottom-4 text-center z-20.py-3';
massenger_chat.append(emojy);

for (var x = 0; x <= 79; x++) {
  var h = "<span class='emojy_item mr-2 cursor-pointer text-lg'> &#".concat(128512 + x, "; </span>");
  emojy.innerHTML += h;
}

var emojy_item = document.querySelectorAll('.emojy_item');
var i = 0;

while (emojy_item[i]) {
  emojy_item[i].addEventListener('click', function (e) {
    input_chat.value += e.target.innerText;
    console.log(e.target.innerText);
  });
  i++;
}

var show_emojy_container = function show_emojy_container() {
  return emojy.classList.toggle('hidden');
};

emojy_show.addEventListener('click', show_emojy_container);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJtYXNzZW5nZXJfY2hhdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVtb2p5X3Nob3ciLCJpbnB1dF9jaGF0IiwiZW1vankiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJ4IiwiaCIsImlubmVySFRNTCIsImVtb2p5X2l0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJjb25zb2xlIiwibG9nIiwic2hvd19lbW9qeV9jb250YWluZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXZCO0FBRUEsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFFQSxJQUFNRSxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUVBLElBQU1HLEtBQUssR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFFQUQsS0FBSyxDQUFDRSxFQUFOLEdBQVcsT0FBWDtBQUNBRixLQUFLLENBQUNHLFNBQU4sR0FBa0Isd0VBQWxCO0FBRUFSLGNBQWMsQ0FBQ1MsTUFBZixDQUFzQkosS0FBdEI7O0FBSUEsS0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLEVBQXJCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0FBQzFCLE1BQUlDLENBQUMscUVBQThELFNBQVNELENBQXZFLGNBQUw7QUFDQUwsRUFBQUEsS0FBSyxDQUFDTyxTQUFOLElBQW1CRCxDQUFuQjtBQUVIOztBQUdELElBQU1FLFVBQVUsR0FBR1osUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixhQUExQixDQUFuQjtBQUNBLElBQUlDLENBQUMsR0FBRyxDQUFSOztBQUdBLE9BQU9GLFVBQVUsQ0FBQ0UsQ0FBRCxDQUFqQixFQUFzQjtBQUVsQkYsRUFBQUEsVUFBVSxDQUFDRSxDQUFELENBQVYsQ0FBY0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBVUMsQ0FBVixFQUFhO0FBRWpEYixJQUFBQSxVQUFVLENBQUNjLEtBQVgsSUFBb0JELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUE3QjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFNBQXJCO0FBRUgsR0FMRDtBQU9BTCxFQUFBQSxDQUFDO0FBQ0o7O0FBRUQsSUFBTVEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLFNBQU1sQixLQUFLLENBQUNtQixTQUFOLENBQWdCQyxNQUFoQixDQUF1QixRQUF2QixDQUFOO0FBQUEsQ0FBN0I7O0FBR0F0QixVQUFVLENBQUNhLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDTyxvQkFBckMiLCJmaWxlIjoibWFzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFzc2VuZ2VyX2NoYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFzc2VuZ2VyX2NoYXQnKVxuXG5jb25zdCBlbW9qeV9zaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vtb2p5X3Nob3cnKTtcblxuY29uc3QgaW5wdXRfY2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dF9jaGF0Jyk7XG5cbmNvbnN0IGVtb2p5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuZW1vankuaWQgPSAnZW1vanknO1xuZW1vankuY2xhc3NOYW1lID0gJ2JnLXJlZC0yMDAgdy02NCBhYnNvbHV0ZSBoaWRkZW4gcmlnaHQtMCBib3R0b20tNCB0ZXh0LWNlbnRlciB6LTIwLnB5LTMnXG5cbm1hc3Nlbmdlcl9jaGF0LmFwcGVuZChlbW9qeSlcblxuXG5cbmZvciAobGV0IHggPSAwOyB4IDw9IDc5OyB4KyspIHtcbiAgICBsZXQgaCA9IGA8c3BhbiBjbGFzcz0nZW1vanlfaXRlbSBtci0yIGN1cnNvci1wb2ludGVyIHRleHQtbGcnPiAmIyR7MTI4NTEyICsgeH07IDwvc3Bhbj5gXG4gICAgZW1vankuaW5uZXJIVE1MICs9IGg7XG5cbn1cblxuXG5jb25zdCBlbW9qeV9pdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVtb2p5X2l0ZW0nKTtcbnZhciBpID0gMDtcblxuXG53aGlsZSAoZW1vanlfaXRlbVtpXSkge1xuXG4gICAgZW1vanlfaXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgaW5wdXRfY2hhdC52YWx1ZSArPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dClcblxuICAgIH0pXG5cbiAgICBpKytcbn1cblxuY29uc3Qgc2hvd19lbW9qeV9jb250YWluZXIgPSAoKSA9PiBlbW9qeS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICBcblxuZW1vanlfc2hvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dfZW1vanlfY29udGFpbmVyKVxuIl19