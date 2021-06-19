function bototop(obj, target) {
    const clamp = (x, min, max) => Math.max(min, Math.min(x, max));
    clearInterval(obj.timer);
    var obj1 = obj.querySelectorAll('li');
    obj.timer = setInterval(function() {
        if (obj1[0].offsetTop > target + 6) {
            var step = (target - obj1[0].offsetTop) / 8;
            obj1[0].style.top = obj1[0].offsetTop + step + "px";
            obj1[0].style.opacity = 1 - (obj1[0].offsetTop - target) / 90;
        }
        if (obj1[0].offsetTop - target < 60) {
            if (obj1[1].offsetTop > target + 6) {
                var step = (target - obj1[1].offsetTop) / 8;
                obj1[1].style.top = obj1[1].offsetTop + step + "px";
                obj1[1].style.opacity = 1 - (obj1[1].offsetTop - target) / 90;
            }
        }
        if (obj1[1].offsetTop - target < 40) {
            if (obj1[2].offsetTop > target + 6) {
                var step = (target - obj1[2].offsetTop) / 8;
                obj1[2].style.top = obj1[2].offsetTop + step + "px";
                obj1[2].style.opacity = 1 - (obj1[2].offsetTop - target) / 90;
            }
        }
        if (obj1[2].offsetTop - target < 20) {
            if (obj1[3].offsetTop > target + 6) {
                var step = (target - obj1[3].offsetTop) / 8;
                obj1[3].style.top = obj1[3].offsetTop + step + "px";
                obj1[3].style.opacity = 1 - (obj1[3].offsetTop - target) / 90;
            } else
                clearInterval(obj.timer);
        }
    }, 30)
}