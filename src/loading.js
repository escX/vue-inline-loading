const loadingName = 'loading-mask';
const svgName = 'loading-svg';
const circleName = 'loading-circle';
const effectPostion = ['relative', 'absolute', 'fixed', 'sticky'];

const bgColor = 'rgba(255,255,255,0.9)';
const loadingSize = 40;
const loadingColor = '#0074d9';

const styleRules = [
  `@keyframes loading-rotate {
    to {
      transform: rotate(1turn)
    }
  }`,
  `@keyframes loading-dash {
    0% {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0
    }

    50% {
      stroke-dasharray: 90,150;
      stroke-dashoffset: -40px
    }

    to {
      stroke-dasharray: 90,150;
      stroke-dashoffset: -120px
    }
  }`
];

const getPositionType = function (el) {
  return window.getComputedStyle(el).position;
};

const insertRule = function (styleRules) {
  const styleSheet = document.styleSheets[0];
  if (styleRules instanceof Array) {
    styleRules.forEach(item => {
      styleSheet.insertRule(item);
    });
  }
};

const createElement = function ({nodeType, style, attribute, isSvg}) {
  let element = null;
  if (isSvg) {
    element = document.createElementNS('http://www.w3.org/2000/svg', nodeType);
  } else {
    element = document.createElement(nodeType);
  }

  if (style instanceof Object) {
    for (let i in style) {
      element.style[i] = style[i];
    }
  }

  if (attribute instanceof Object) {
    for (let i in attribute) {
      element.setAttribute(i, attribute[i]);
    }
  }

  return element;
}

const createMask = function () {
  return createElement({
    nodeType: 'div',
    style: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      backgroundColor: bgColor
    },
    attribute: {
      class: loadingName
    }
  });
};

const createIcon = function () {
  const svgElement = createElement({
    nodeType: 'svg',
    isSvg: true,
    style: {
      height: `${loadingSize}px`,
      width: `${loadingSize}px`,
      animation: 'loading-rotate 2s linear infinite',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: `-${loadingSize / 2}px`,
      marginLeft: `-${loadingSize / 2}px`
    },
    attribute: {
      viewBox: '25 25 50 50',
      class: svgName
    }
  });

  const circleElement = createElement({
    nodeType: 'circle',
    isSvg: true,
    style: {
      animation: 'loading-dash 1.5s ease-in-out infinite',
      strokeDasharray: '90, 150',
      strokeDashoffset: '0',
      strokeWidth: '2',
      stroke: loadingColor,
      strokeLinecap: 'round'
    },
    attribute: {
      cx: '50',
      cy: '50',
      r: '20',
      fill: 'none',
      class: circleName
    }
  });

  svgElement.appendChild(circleElement);

  return svgElement;
};

const createLoading = function (el) {
  const maskElement = createMask();
  const iconElement = createIcon();

  maskElement.appendChild(iconElement);
  el.appendChild(maskElement);

  return maskElement;
};

const displayLoading = function({el, showLoading}) {
  el.style.display = showLoading ? 'block' : 'none';
}

export default {
  bind(el, binding) {
    const positionType = getPositionType(el);

    if (!effectPostion.includes(positionType)) {
      el.style.position = 'relative';
    }

    insertRule(styleRules);

    const loadingElement = createLoading(el);
    const showLoading = binding.value;
    displayLoading({
      el: loadingElement,
      showLoading
    });
  },
  update(el, binding) {
    const loadingElement = el.querySelector(`.${loadingName}`);
    const showLoading = binding.value;
    displayLoading({
      el: loadingElement,
      showLoading
    });
  }
}