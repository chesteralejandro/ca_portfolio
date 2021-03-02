//====== INSTRUCTION ======//
/*
    Put data-show-left on an element that you want to hide on the LEFT.
    Put data-show-right on an element that you want to hide on the RIGHT.
    Put data-show-up on an element that you want to hide on the TOP.
    Put data-show-down on an element that you want to hide on the BOTTOM.
    Put data-show-group-up on an element that you want to hide GROUP on the TOP.
    Put data-show-group-down on an element that you want to hide GROUP on the BOTTOM.
*/

window.addEventListener('scroll', function(){
    let screenSize = window.innerHeight;
      // LEFT ========================================================
    const leftItems = document.querySelectorAll('[data-show-left]');
    leftItems.forEach(leftItem => {
        const topEdge = leftItem.getBoundingClientRect().top;
        const bottomEdge = leftItem.getBoundingClientRect().bottom;
        if(topEdge <= screenSize && bottomEdge >= 0) {
          leftItem.style.transition = "all 400ms 600ms ease-out";
          leftItem.style.transform = "translateX(0%)";
          leftItem.style.opacity = "1";
        } else {
          leftItem.style.transition = "none";
          leftItem.style.transform = "translateX(-15%)";
          leftItem.style.opacity = "0";
        }
    });  
      // RIGHT ========================================================
    const rightItems = document.querySelectorAll('[data-show-right]');
    rightItems.forEach(rightItem => {
        const topEdge = rightItem.getBoundingClientRect().top;
        const bottomEdge = rightItem.getBoundingClientRect().bottom;
        if(topEdge <= screenSize && bottomEdge >= 0) {
          rightItem.style.transition = "all 400ms 600ms ease-out";
          rightItem.style.transform = "translateX(0%)";
          rightItem.style.opacity = "1";
        } else {
          rightItem.style.transition = "none";
          rightItem.style.transform = "translateX(15%)";
          rightItem.style.opacity = "0";
        }
    });
    // UP ===========================================================
  const upItems = document.querySelectorAll('[data-show-up]');
  upItems.forEach((upItem, index) => {
      const topEdge = upItem.getBoundingClientRect().top;
      const bottomEdge = upItem.getBoundingClientRect().bottom;
      if(topEdge <= screenSize && bottomEdge >= 0) {
        upItem.style.transition = `all 400ms 500ms ease-out`;
        upItem.style.transform = "translateY(0%)";
        upItem.style.opacity = "1";
      } else {
        upItem.style.transition = "none";
        upItem.style.transform = "translateY(-25%)";
        upItem.style.opacity = "0";
      }
  });
    // DOWN =========================================================
  const downItems = document.querySelectorAll('[data-show-down]');
  downItems.forEach((downItem, index) => {
      const topEdge = downItem.getBoundingClientRect().top;
      const bottomEdge = downItem.getBoundingClientRect().bottom;
      if(topEdge <= screenSize && bottomEdge >= 0) {
        downItem.style.transition = `all 400ms 400ms ease-out`;
        downItem.style.transform = "translateY(0%)";
        downItem.style.opacity = "1";
      } else {
        downItem.style.transition = "none";
        downItem.style.transform = "translateY(25%)";
        downItem.style.opacity = "0";
      }
  });
      // GROUP UP ===========================================================
    const groupUpItems = document.querySelectorAll('[data-show-group-up]');
    groupUpItems.forEach((groupUpItem, index) => {
        const topEdge = groupUpItem.getBoundingClientRect().top;
        const bottomEdge = groupUpItem.getBoundingClientRect().bottom;
        if(topEdge <= screenSize && bottomEdge >= 0) {
          groupUpItem.style.transition = `all 400ms ${(index+1)/(groupUpItems.length*1.5)}s ease-out`;
          groupUpItem.style.transform = "translateY(0%)";
          groupUpItem.style.opacity = "1";
        } else {
          groupUpItem.style.transition = "none";
          groupUpItem.style.opacity = "0";
          if(window.innerWidth <= 768) {
            if(index%2 == 0) groupUpItem.style.transform = "translateX(-15%)";
            else groupUpItem.style.transform = "translateX(15%)";
          } else groupUpItem.style.transform = "translateY(-25%)";
        }
    });
      // GROUP DOWN =========================================================
    const groupDownItems = document.querySelectorAll('[data-show-group-down]');
    groupDownItems.forEach((groupDownItem, index) => {
        const topEdge = groupDownItem.getBoundingClientRect().top;
        const bottomEdge = groupDownItem.getBoundingClientRect().bottom;
        if(topEdge <= screenSize && bottomEdge >= 0) {
          groupDownItem.style.transition = `all 400ms ${(index+1)/(groupDownItems.length*1.5)}s ease-out`;
          groupDownItem.style.transform = "translateY(0%)";
          groupDownItem.style.opacity = "1";
        } else {
          groupDownItem.style.transition = "none";
          groupDownItem.style.opacity = "0";
          if(window.innerWidth <= 768) {
            if(index%2 == 0) groupDownItem.style.transform = "translateX(-15%)";
            else groupDownItem.style.transform = "translateX(15%)";
          } else groupDownItem.style.transform = "translateY(25%)";
        }
    });

}) //SCROLL LISTENER