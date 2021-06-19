function rtl(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (obj.offsetLeft <= target)
            clearInterval(obj.timer);
        var step = (obj.offsetLeft - target) / 10;
        obj.style.left = obj.offsetLeft - step + "px";
    }, 30);
}