const letters = new TimelineMax({});
const vormpie = new TimelineMax({});

const vierkant = document.querySelector('#_vierkant_');

const hart = document.querySelector('.cls-6');

const a = document.querySelector('#_aAnders_');
const n = document.querySelector('#n');
const d = document.querySelector('#d');
const e = document.querySelector('#e');
const r = document.querySelector('#r');
const s = document.querySelector('#s');

TweenMax.to(hart, 0.7, {scaleX: 1.5, transformOrigin: "center"})
TweenMax.to(hart, 0.7, {scaleY: 1.5})
TweenMax.to(hart, 0.7, {rotate: 1440, transformOrigin: "center"})
TweenMax.to(hart, 0.7, {scaleY: -3})
TweenMax.to(hart, 0.7, {scaleY: -3})
TweenMax.to(hart, 0.7, {scaleY: 5})
TweenMax.to(hart, 0.7, {scaleY: -5})
TweenMax.to(hart, 2, {scaleY: 5})
TweenMax.to(hart, 3, {scaleY: 1.5});

vormpie
      .to(vierkant, .5, {x: 400})
      .to(vierkant, .5, {y: -500})
      .to(vierkant, .5, {y: -225})
      .to(vierkant, .5, {y: 60})
      .to(vierkant, .5, {x: 0})
      .to(vierkant, .2, {y: 0});

letters
      .to(a, 0.25, {y: 150})
      .to(a, 0.25, {y: -19})
      .to(n, 0.25, {x: -300})
      .to(n, 0.25, {x: -30})
      .to(d, 0.25, {y: -400})
      .to(d, 0.25, {y: -19})
      .to(e, 0.25, {x: 245})
      .to(e, 0.25, {x: -34})
      .to(r, 0.25, {y: -200})
      .to(r, 0.25, {y: -19})
      .to(s, 0.25, {x: -400})
      .to(s, 0.25, {x: -19});
