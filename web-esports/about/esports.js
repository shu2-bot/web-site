/*
 * この画面は JavaScript スクラッチパッドです。
 *
 * JavaScript を入力して、右クリックまたは [実行] メニューを選択してください。
 * 1. 実行: 選択したコードを実行します。(Ctrl+R)
 * 2. 調査: 実行結果をオブジェクトインスペクターで表示します。(Ctrl+I)
 * 3. 表示: 選択したコードの後ろに、実行結果をコメント形式で挿入します。(Ctrl+L)
 */


document.addEventListener('DOMContentLoaded',function(){
var largeImg = document.getElementsByClassName('main');
var subImgs = document.getElementsByClassName('picss');
  for (let i = 0; i < subImgs.length; i++){
  subImgs[i].addEventListener('click',function(){

    if(i%2==0){
      let imgsrc = subImgs.item(i).getAttribute('src');
      largeImg[i/2].setAttribute('src',imgsrc);
    }else{
      let imgsrc = subImgs.item(i).getAttribute('src');
      largeImg.item(Math.floor(i/2)).setAttribute('src',imgsrc);
    }
    });
}
});

function scrollToTop() {
  scrollTo(0, 0);
 }
