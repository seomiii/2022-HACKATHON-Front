imgUrlList=['1.png','2.png','3.png','7.png','8.png'];
//imgUrlList=['1.png','2.png'];


function showImg(){
    for (let i in imgUrlList){
        let img=new Image();
        let tapeimg=new Image();

        img.src=imgUrlList[i];
        tapeimg.src='tape.png';

        let width=img.width;
        let height=img.height;
        let tapewidth=tapeimg.width;
        let tapeheight=tapeimg.height;

        var contents=document.querySelector('.contentsDiv');
        var imgDiv=document.createElement('div');

        contents.appendChild(imgDiv);
        imgDiv.classList.add('imgDiv');

        var imgimg=document.createElement('img');
        var tape=document.createElement('img');
        tape.classList.add('imagetape');
        imgimg.classList.add('imgimg');

        tape.style.left= (tapewidth)+(width/4)+"px";
        tape.style.top="-" + (height-tapeheight) + "px";


        imgimg.src=imgUrlList[i];
        tape.src='tape.png';

        imgDiv.appendChild(tape);
        imgDiv.appendChild(imgimg);
    }
}

showImg();