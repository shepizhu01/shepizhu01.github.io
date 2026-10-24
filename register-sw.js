if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log("SW注册成功", reg))
    .catch(err => console.warn("SW注册失败", err));
  })
}
