const texts =document.querySelector('.texts');
window.SpeechRecognition =window.SpeechRecognition|| window.webkitSpeechRecognition;


const recognition=new window.SpeechRecognition();

recognition.interimResult=true;

let p=document.createElement('p');
recognition.addEventListener('result',(e)=>{
    const text=Array.from(e.results)
    .map(result=>result[0])
    .map(result=>result.transcript)

    .join('');
    p.innerText=text;
    texts.appendChild(p);
    if(e.results[0].isFinal){
        if(text.includes('What is your name')||text.includes("what's your name")){
            p=document.createElement('p');
            p.classList.add('replay')
            p.innerText='my name is Durgesh Nandan,yours?';
            texts.appendChild(p);

        }

        if(text.includes('open my youtube Channel')){
            p=document.createElement('p');
            p.classList.add('replay')
            p.innerText='Openig  your channel';
            texts.appendChild(p);
            window.open('http://youtube.com')
        }
        
        if(text.includes('open my github account')){
            p=document.createElement('p');
            p.classList.add('replay')
            p.innerText='Openig your github account';
            texts.appendChild(p);
            window.open('http://youhttps://github.com/durgeshkumarrajtube.com')
        }

        if(text.includes('open my linkedin  account')){
            p=document.createElement('p');
            p.classList.add('replay')
            p.innerText='Openig my linkedin account';
            texts.appendChild(p);
            window.open('http://youhttps://github.com/durgeshkumarrajtube.com')
        }


    

        p=document.createElement('p')
    }
    
    console.log(e);
});
recognition.addEventListener('end',()=>{
    recognition.start();
})

recognition.start();

