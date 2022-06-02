/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは [実行] メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Ctrl+R)
 * 2. 調査: 実行結果をオブジェクトインスペクターで表示します。(Ctrl+I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Ctrl+L)
 */


//12月6日の学習と宿題
//18T2068A 佐竹柊路
//
/*
console.log('こんにちは、スクラッチパッド');
*/

/*
var yourname = 'しゅうじ';
console.log('こんにちは、' +yourname +'さん');
*/

/*
//ex2.1
var yourname ='しゅうじ';
window.alert('こんにちは、'+yourname+'さん！
             ');
*/  

/*
function greeting(name){console.log('こんにちは、
'+name+'さん！')}
greeting('柊路');
greeting('佐竹');
*/

//ex2.2
/*
function multiply(a,b) {console.log(a*b);};
multiply(2,3);
*/

//ex2.3
/*
for (let i=0; i<10; i++){
console.log(i**2);
}
*/

//ex2.4
/*
for (let i=6; i<=31; i+=7){
console.log(i);
}
*/

/*
for (let i=0; i<10; i++){
  if (i%2==0){
    console.log(i+'は偶数です');
  }else{
    console.log(i+'は奇数です')
  }
}
*/

/*
document.getElementById('mainPhoto');
console.log(document.getElementById('mainPhoto'));
var largeImg = document.getElementById('mainPhoto');
console.log(largeImg);
*/

//ex3.5
/*
document.getElementById('thumbnails');
console.log(document.getElementById('thumbnails'));
*/

//ex3.6
/*
document.getElementsByTagName('img');
console.log(document.getElementsByTagName('img'));
*/

/*
var largeImg=document.getElementById('mainPhoto');
console.log(largeImg.getAttribute('src'));
*/

//ex3.7
/*
var largeImg = document.getElementById('mainPhoto');
console.log(largeImg.getAttribute('alt'));
*/

/*
var largeImg=document.getElementById('mainPhoto');
console.log(largeImg.getAttribute('src'));
largeImg.setAttribute('scr','images/summer.jpg');
console.log(largeImg.getAttribute('scr'));
*/

//ex3.8
/*
largeImg.setAttribute('scr','images/winter.jpg');
console.log(largeImg.getAttribute('scr'));
*/

//ex3.9
/*
largeImg.setAttribute('alt','冬の運動場');
console.log(largeImg.getAttribute('alt'));
*/

/*
var largeImg = document.getElementById('mainPhoto');
console.log(document.getElementById('thumbnails').children);
var thumbImgs = document.getElementById('thumbnails').children;
console.log(thumbImgs.item(0));
console.log(thumbImgs.item(3));
console.log(thumbImgs[0]);
console.log(thumbImgs[3]);
*/

//ex3.10
/*
var thumbImgs = document.getElementById('thumbnails').children;
console.log(thumbImgs[1]);
console.log(thumbImgs[2]);
*/

//ex3.11
/*
var thumbImgs = document.getElementById('thumbnails').children;
console.log(thumbImgs[3].getAttribute('src'));
console.log(thumbImgs[3].getAttribute('alt'));
*/

//ex3.12
/*
var thumbImgs = document.getElementById('thumbnails').children;
for (let i=0;i<4;i++){
  console.log(thumbImgs[i].getAttribute('alt'));
}
*/

//ex3.13
/*
var thumbImgs = document.getElementById('thumbnails').children;
var largeImg = document.getElementById('mainPhoto');
largeImg.setAttribute('src','images/winter.jpg');
console.log(largeImg.getAttribute('src'));
*/



//Web制作ゼミ　12/13の宿題
// 18T2068A  佐竹柊路

/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
thumbImgs.item(1).addEventListener('click',function(){
  console.log('夏のサムネール写真がクリックされました！');
});
*/

//ex4.14
/*
largeImg.addEventListener('click',function(){
  console.log('メイン画像がクリックされました！');
});
*/

/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(){
    console.log(i+'番目のサムネール写真がクリックされました！');
  });
}
*/

/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(){
    console.log(thumbImgs.item(i));
  });
}
*/

/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(){
    console.log(thumbImgs.item(i).getAttribute('src'));
  });
}
*/
//ex5.15
/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(){
    console.log(thumbImgs.item(i).getAttribute('alt'));
  });
}
*/

/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(ev){
    let imgSrc = thumbImgs.item(i).getAttribute('src');
    largeImg.setAttribute('src',imgSrc);
  });
}
*/

//ex5.16
/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(ev){
    let imgAlt = thumbImgs.item(i).getAttribute('alt');
    largeImg.setAttribute('alt',imgAlt);
  });
}
*/

/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(ev){
    let imgSrc = thumbImgs.item(i).getAttribute('src');
    let imgAlt = thumbImgs.item(i).getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
  });
}
*/

/*
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
var photoTitle = document.getElementById('mainPhotoTitle');
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(ev){
    let imgSrc = thumbImgs.item(i).getAttribute('src');
    let imgAlt = thumbImgs.item(i).getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
    photoTitle.innerHTML = imgAlt
  });
}
*/

/*
document.addEventListener('DOMContentLoaded',function(){
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
var photoTitle = document.getElementById('mainPhotoTitle');
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(){
    let imgSrc = thumbImgs.item(i).getAttribute('src');
    let imgAlt = thumbImgs.item(i).getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
    photoTitle.innerHTML = imgAlt;
  });
}       
});
*/

//ex6.17
/*
document.addEventListener('DOMContentLoaded',function(){
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
var photoTitle = document.getElementById('mainPhotoTitle');
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(){
    let imgSrc = thumbImgs.item(i).getAttribute('src');
    let imgAlt = thumbImgs.item(i).getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
    photoTitle.innerHTML = imgAlt;
  });
}       
});
console.log('ロードされました');
*/

//ex6.18
/*
document.addEventListener('DOMContentLoaded',function(){
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
var photoTitle = document.getElementById('mainPhotoTitle');
for (let i=0;i<thumbImgs.length;i++){
  thumbImgs.item(i).addEventListener('click',function(){
    let imgSrc = thumbImgs.item(i).getAttribute('src');
    let imgAlt = thumbImgs.item(i).getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
    photoTitle.innerHTML = imgAlt;
  });
}console.log(thumbImgs[1].getAttribute('src'))
 console.log(thumbImgs[1].getAttribute('alt')) 
});
*/

/*
document.addEventListener('DOMContentLoaded',function(){
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
var photoTitle = document.getElementById('mainPhotoTitle');
function showImg(img){
   let imgSrc = img.getAttribute('src');
    let imgAlt = img.getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
    photoTitle.innerHTML = imgAlt;
};
  for (let i = 0; i < thumbImgs.length; i++){
    thumbImgs.item(i).addEventListener('click',function(){
      showImg(thumbImgs.item(i));
    });
  }
});
*/

//ex6.19
/*
document.addEventListener('DOMContentLoaded',function(){
var largeImg = document.getElementById('mainPhoto');
var thumbImgs = document.getElementById('thumbnails').children;
var photoTitle = document.getElementById('mainPhotoTitle');
function showImg(img){
   let imgSrc = img.getAttribute('src');
    let imgAlt = img.getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
    photoTitle.innerHTML = imgAlt;
};
  for (let i = 0; i < thumbImgs.length; i++){
    thumbImgs.item(i).addEventListener('mouseover',function(){
      showImg(thumbImgs.item(i));
    });
  }
});
*/

/*
document.addEventListener('DOMContetLoaded',function (event){
  var largeImg = document.getElementById('mainPhoto');
  var thumbImgs = document.getElementById('thumbnails').children;
  var photoTitle = document.getElementById('mainPhotoTitle');
  var n = thumbImgs.length;
  function showImgs(img) {
    let imgSrc = img.getAttribute('src');
    let imgAlt = img.getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
    photoTitle.innerHTML = imgAlt;
  };
  for (let i = 0; i < n; i++){
    thmbImgs.item(i).addEventListener('click',function(){
      showImg(thumbImgs.item(i));
    });
  }
  function changeImg(){
    var largeImgSrc = largeImg.getAttribute('src');
    for (let i = 0; i < n; i++){
      if (thumbImgs.item(i).getAttribute('src') === largeImgSrc){
        showImg(thumbImgs.item((i+1)%n));
      }
    }
  };
  largeImg.addEventListener('click',changeImg);
});
*/

/*
document.addEventListener('DOMContetLoaded',function (event){
  var largeImg = document.getElementById('mainPhoto');
  var thumbImgs = document.getElementById('thumbnails').children;
  var photoTitle = document.getElementById('mainPhotoTitle');
  var n = thumbImgs.length;
  function showImgs(img) {
    let imgSrc = img.getAttribute('src');
    let imgAlt = img.getAttribute('alt');
    largeImg.setAttribute('src',imgSrc);
    largeImg.setAttribute('alt',imgAlt);
    photoTitle.innerHTML = imgAlt;
  };
  for (let i = 0; i < n; i++){
    thmbImgs.item(i).addEventListener('click',function(){
      showImg(thumbImgs.item(i));
    });
  }
  function changeImg(){
    var largeImgSrc = largeImg.getAttribute('src');
    for (let i = 0; i < n; i++){
      if (thumbImgs.item(i).getAttribute('src') === largeImgSrc){
        showImg(thumbImgs.item((i+1)%n));
      }
    }
  };
  largeImg.addEventListener('click',changeImg);
  
  var slideShow;
  function startSlideShow(){
    slideShow = setInterval(changeImg,1000);
  };
  largeImg.addEventListener('mouseover',startSlideShow);
  largeImg.addEventListener('mouseout',stopSlideShow);
});
*/




