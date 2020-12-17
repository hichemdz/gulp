const massenger_chat = document.querySelector('#massenger_chat')

const emojy_show = document.querySelector('#emojy_show');

const input_chat = document.querySelector('#input_chat');

const emojy = document.createElement('div')

emojy.id = 'emojy';
emojy.className = 'bg-red-200 w-64 absolute hidden right-0 bottom-4 text-center z-20.py-3'

massenger_chat.append(emojy)



for (let x = 0; x <= 79; x++) {
    let h = `<span class='emojy_item mr-2 cursor-pointer text-lg'> &#${128512 + x}; </span>`
    emojy.innerHTML += h;

}


const emojy_item = document.querySelectorAll('.emojy_item');
var i = 0;


while (emojy_item[i]) {

    emojy_item[i].addEventListener('click', function (e) {

        input_chat.value += e.target.innerText;
        console.log(e.target.innerText)

    })

    i++
}

const show_emojy_container = () => emojy.classList.toggle('hidden')
  

emojy_show.addEventListener('click', show_emojy_container)
