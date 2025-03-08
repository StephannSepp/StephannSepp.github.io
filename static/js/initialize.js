const splashTexts = [
  '晚安世界！',
  '喵！',
  '喵喵！',
  '貓在　　　　鍵盤上0000000000',
  'Nothing worth noting.',
  '閃爍標語！',
  '也試試《Minecraft》吧！',
  '星空下微光閃爍！',
  'splash.textContent = randomText;',
  'oyasumi.me',
  'hololive!',
  'VSPO!',
  'KAMITSUBAKI!',
  '獨自一人的東京',
  '藍色星球',
  'Distortion it’s Motion!',
  'F和弦！',
  '向著星星宣洩一切吧！',
];

document.querySelectorAll('[data-dialog-toggle]').forEach((el) => {
  el.addEventListener('click', (ev) => {
    const target = document.getElementById(
      ev.currentTarget.dataset['dialogToggle']
    );
    if (target !== null && target.tagName === 'DIALOG') {
      if (target.open) {
        target.close();
      } else {
        target.showModal();
      }
    }
  });
});

(() => {
  const strLen = (str) => {
    let count = 0;
    for (var i = 0, len = str.length; i < len; i++) {
      count += str.charCodeAt(i) < 256 ? 1 : 2;
    }
    return count;
  };

  const randomText =
    splashTexts[Math.floor(Math.random() * splashTexts.length)];
  let fontSize = 32;
  if (strLen(randomText) > 12) {
    fontSize = Math.max(32 - (strLen(randomText) - 12), 16);
  }
  document.getElementById('splash').style.fontSize = fontSize + 'px';
  document.getElementById('splash').textContent = randomText;
})();
