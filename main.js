(() => {
  console.log('JS is running');

  //   one element selector
  const select = (selector) => {
    return document.querySelector(selector);
  };
  //   all element selector
  const selectAll = (selector) => {
    return document.querySelectorAll(selector);
  };
  //   add class to selector
  const addClass = (selector, className) => {
    return selector.classList.add(className);
  };
  //   remove class from selector
  const removeClass = (selector, className) => {
    return selector.classList.remove(className);
  };

  //   get accorions
  const acc1 = select('.acc1');
  const acc2 = select('.acc2');
  const acc3 = select('.acc3');
  const p = selectAll('p');

  //   onClick(acordion, accordion serial) for toggling
  const onClick = (acc, acc_sr) => {
    console.log('Accordion 1 clicked');
    if (acc.classList.contains('toggle')) {
      removeClass(acc, 'toggle');
      removeClass(select(`.acc-${acc_sr}-line`), 'rotate');
      removeClass(p[acc_sr - 1], 'show');
      return;
    }
    addClass(acc, 'toggle');
    addClass(select(`.acc-${acc_sr}-line`), 'rotate');
    addClass(p[acc_sr - 1], 'show');
  };

//   added event listener to each
  acc1.addEventListener('click', () => onClick(acc1, 1));
  acc2.addEventListener('click', () => onClick(acc2, 2));
  acc3.addEventListener('click', () => onClick(acc3, 3));
})();
