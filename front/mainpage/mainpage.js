imgUrlList=['3.png','2.png','1.png','7.png','8.png'];

function showImg(){
    for (let i in imgUrlList){
        // 이미지 사이즈 구하기
        let img=new Image();
        let tapeimg=new Image();

        img.src=imgUrlList[i];
        tapeimg.src='tape.png';

        let width=img.width;
        let height=img.height;
        let tapewidth=tapeimg.width;
        let tapeheight=tapeimg.height;

        // 이미지 랜덤 rotate값 , 홀 수번째 이미지일때 - 붙게        
        var randomRotate=Math.floor((Math.random()*(10-1)+1)+3);
        if(i%2){
          randomRotate= -1 * randomRotate;
        }
        console.log(randomRotate);

        var contents=document.querySelector('.contentsDiv');
        var imgDiv=document.createElement('div');

        contents.appendChild(imgDiv);
        imgDiv.classList.add('imgDiv');

        var imgimg=document.createElement('img');
        var tape=document.createElement('img');
        tape.classList.add('imagetape');
        imgimg.classList.add('imgimg');

        tape.style.left= (width/3)+"px";
        tape.style.top= "-" + (height + (tapeheight/2)) + "px";
        //console.log(tape.style.top,height,tapeheight, (tapeheight/2));

        imgimg.style.rotate= randomRotate + "deg";
        tape.style.rotate=-1 * randomRotate+ "deg";

        imgimg.src=imgUrlList[i];
        tape.src='tape.png';

        imgDiv.appendChild(imgimg);
        imgDiv.appendChild(tape);
        
    }
}

showImg();