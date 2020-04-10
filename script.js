var bar = new ProgressBar.Line(animation, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#f0f5f5'},
    to: {color: '#476b6b'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      bar.setText(Math.round(bar.value() * 100) + ' %')
    }
  });
  
  bar.animate(0.7);