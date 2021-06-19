function toptobo(obj, target) {
    const clamp = (x, min, max) => Math.max(min, Math.min(x, max));
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (obj.offsetTop >= target - 5) {
            console.log(5);
            clearInterval(obj.timer);
        }

        var step = (target - obj.offsetTop) / 6;
        obj.style.top = obj.offsetTop + step + "px";
        const op = obj.offsetTop / 100;
        obj.style.opacity = 1 - (target - obj.offsetTop) / 100;

    }, 30);
}