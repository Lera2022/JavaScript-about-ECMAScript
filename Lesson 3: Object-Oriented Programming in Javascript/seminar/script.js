console.log(_.ceil(4.006));
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

const moveTo = new MoveTo({
  // tolerance: 0,
  duration: 2000,
  // easing: 'easeOutQuart',
  // container: window
})

const btn = document.querySelector('.btn');

moveTo.registerTrigger(btn);

tippy(btn, {
  content: 'Это кнопка-якорь'
});