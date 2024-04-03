
/**
 * item 특정 scroll 영역 수직 중앙 위치
 * @param {HTMLElement} scrollArea scroll 가능 element
 * @param {HTMLElement} childElement 이동 시키려는 element
 */
export function scrollToElementCenterVertical(scrollArea: HTMLElement, childElement: HTMLElement) {
    const boxRect = scrollArea.getBoundingClientRect(); 
    const childRect = childElement.getBoundingClientRect();
  
    const scrollTop = childRect.top + scrollArea.scrollTop - boxRect.top - (boxRect.height / 2) + (childRect.height / 2);

    scrollArea.scrollTo({
      top: scrollTop,
      behavior: 'smooth' 
    });
  }