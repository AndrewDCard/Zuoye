function plane(obj, target) {
    clearInterval(obj.timer);
    var n = 0;
    var dg = 90;
    obj.timer = setInterval(function() {
        if (obj.offsetLeft >= target) {
            clearInterval(obj.timer);
        }
        if (parseInt(n / 200) % 2 == 0) {
            obj.style.left = obj.offsetLeft + 6 + "px";
            obj.style.top = obj.offsetTop - 4 + "px";
            dg -= 3;
            obj.style.transform = 'rotateZ(' + (dg) + 'deg)';
            n += 6;
        } else if (parseInt(n / 200) % 2 == 1) {
            obj.style.left = obj.offsetLeft + 6 + "px";
            obj.style.top = obj.offsetTop + 4 + "px";
            dg += 3;
            obj.style.transform = 'rotateZ(' + (dg) + 'deg)';
            n += 6;
        }
    }, 10);
}