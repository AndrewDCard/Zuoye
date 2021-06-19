function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (obj.offsetLeft >= target)
            clearInterval(obj.timer);
        var step = (target - obj.offsetLeft) / 10;
        obj.style.left = obj.offsetLeft + step + "px";
    }, 30)
}