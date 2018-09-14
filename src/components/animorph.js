import rgba from 'rgba-convert';

let ball;
let targetStyles = {
  top: window.innerHeight - 50,
  left: 20,
  backgroundColor: 'red',
  width: 20,
  height: 20,
};;

export function animorph (source, target) {
  if (requestId) window.cancelAnimationFrame(requestId);
  createCounterBall();
  setTargetStyles(target);
  positionCounterBallOnSource(source);
  moveTheBall();
}
let requestId;


function moveTheBall(now) {
  time.start = performance.now();
  requestId = requestAnimationFrame(tick);
}

const getProgress = ({ elapsed, total }) =>
  Math.min(elapsed / total, 1);

const time = {
  start: performance.now(),
  total: 2000
};

function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
}

const Color = function (hexOrObject) {
  let obj;
  if (hexOrObject instanceof Object) {
    obj = hexOrObject;
  } else {
    obj = rgba(hexOrObject);
  }
  this.r = obj.r;
  this.g = obj.g;
  this.b = obj.b;
}

Color.prototype.asRgbCss = function () {
  return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
}

function findColorBetween (previous, next, progress) {
  const newColor = {};
  const components = ["r", "g", "b"];
  components.forEach((c, i) => {
    newColor[c] = Math.round(previous[i] + (next[i] - previous[i]) * progress);
  })
  return new Color(newColor);
}


export const tick = now => {
  time.elapsed = now - time.start;
  const progress = getProgress(time);
  const { top, left, width, height } = ball.getBoundingClientRect();
  let { borderRadius: oldRadius = 0, backgroundColor: oldBG } = ball.style;
  oldRadius = Number(oldRadius.split('%')[0]);
  oldBG = rgba(oldBG);
  const endBG = rgba(targetStyles.backgroundColor);
  const bgColor = findColorBetween(oldBG, endBG, progress).asRgbCss();
  const nextTop = easeInQuad(time.elapsed, top, targetStyles.top - top, time.total);
  const nextLeft = easeInQuad(time.elapsed, left, targetStyles.left - left, time.total);
  const nextWidth = easeInQuad(time.elapsed, width, targetStyles.width - width, time.total);
  const nextHeight = easeInQuad(time.elapsed, height, targetStyles.height - height, time.total);
  const borderRadius = easeInQuad(time.elapsed, oldRadius, 50 - oldRadius, time.total);

  setStylesOnElement({
    backgroundColor: bgColor,
    width: `${nextWidth}px`,
    height: `${nextHeight}px`,
    top: `${nextTop}px`,
    left: `${nextLeft}px`,
    borderRadius: `${borderRadius}%`,
  }, ball);
  if (progress < 1) requestAnimationFrame(tick);
};

export function createCounterBall() {
  if (!document.getElementById('countBall')) {
    ball = document.createElement('div');
    document.getElementById('countBallHolder').appendChild(ball);
  }
}

export function positionCounterBallOnSource(source) {
  const { width, height, top, left } = source.getBoundingClientRect();
  ball.id = 'countBall';
  setStylesOnElement({
    ...source.style,
    width: `${width}px`,
    height: `${height}px`,
    position: `absolute`,
    top: `${top}px`,
    left: `${left}px`,
  }, ball);
}

function setStylesOnElement(styles, element) {
  Object.assign(element.style, styles);
}

function setTargetStyles(target) {
  if (target) {
    targetStyles = target.style;
  }
  // otherwise we assume you're trying to create a notification animation
}

export default animorph;

