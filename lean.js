const leanClose = document.querySelectorAll('[data-lean-close]');
const leanAway = document.querySelectorAll('[data-lean-away]');


leanClose.forEach(lean => {
  lean.addEventListener('mousemove', e => {
    let itemWidth = 0;
    let itemHeight = 0;
    lean.style.perspective = "1000px";
    lean.style.transition = "all 0.2s ease";
    lean.style.transformStyle = "preserve-3d";
    lean.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.3), 0 10px 50px rgba(0, 0, 0, 0.1)";
    if(e.target.clientWidth < 400) itemWidth = 5;
    else itemWidth = 10;
    if(e.target.clientHeight < 400) itemHeight = 5;
    else itemHeight = 10;
    lean.style.transform = `
    rotateY(${(e.offsetX-(e.target.clientWidth/2))/itemWidth}deg) 
    rotateX(${(e.offsetY-(e.target.clientHeight/2))/itemHeight*-1}deg)`;
    for(let i = 0; i < lean.children.length; i++){
      lean.children[i].style.pointerEvents = "none";
      lean.children[i].style.transition = "all 0.2s ease";
      lean.children[i].style.transform = "translateZ(100px)";
    }
  });

  lean.addEventListener('mouseout', () => {
    lean.style.transition = "all 3s ease";
    lean.style.transform = `rotateY(0deg) rotateX(0deg)`;
    lean.style.boxShadow = "";
    for(let i = 0; i < lean.children.length; i++){
      lean.children[i].style.transition = "all 1s ease";
      lean.children[i].style.transform = "translateZ(0px)";
    }
  });
}); // End forEach


leanAway.forEach(lean => {
  lean.addEventListener('mousemove', e => {
    let itemWidth = 0;
    let itemHeight = 0;
    lean.style.perspective = "1000px";
    lean.style.transition = "all 0.2s ease";
    lean.style.transformStyle = "preserve-3d";
    lean.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.3), 0 10px 50px rgba(0, 0, 0, 0.1)";
    if(e.target.clientWidth < 400) itemWidth = 5;
    else itemWidth = 10;
    if(e.target.clientHeight < 400) itemHeight = 5;
    else itemHeight = 10;
    lean.style.transform = `
    rotateY(${(e.offsetX-(e.target.clientWidth/2))/itemWidth*-1}deg) 
    rotateX(${(e.offsetY-(e.target.clientHeight/2))/itemHeight}deg)`;
    for(let i = 0; i < lean.children.length; i++){
      lean.children[i].style.pointerEvents = "none";
      lean.children[i].style.transition = "all 0.2s ease";
      lean.children[i].style.transform = "translateZ(100px)";
    }
  });

  lean.addEventListener('mouseout', () => {
    lean.style.transition = "all 3s ease";
    lean.style.transform = `rotateY(0deg) rotateX(0deg)`;
    lean.style.boxShadow = "";
    for(let i = 0; i < lean.children.length; i++){
      lean.children[i].style.transition = "all 1s ease";
      lean.children[i].style.transform = "translateZ(0px)";
    }
  });
}); // End forEach