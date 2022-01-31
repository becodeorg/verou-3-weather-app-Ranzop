const createImg = (element, cssClass, src, alt, parent) => {
    const x = document.createElement(element);
    x.classList.add(cssClass);
    x.src = src;
    x.alt = alt;
    parent.appendChild(x);
    return (x);
}