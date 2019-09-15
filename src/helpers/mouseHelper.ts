/* getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

isMouseRightSide (event) {
    const mousePosition = instanceOfMouseEvent.clientX;
    const browserWidth = this.getWidth(); 
    const ratio = browserWidth/mousePosition;

    const mouseSide =  ratio > 50 ? "rightSide" : "leftSide"

    return mouseSide;
} */