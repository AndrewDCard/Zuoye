window.onload = function() {
    var wrap3back = document.getElementById('wrap3-back');
    var back = document.getElementById('back');
    window.addEventListener('scroll', function() {
        var t = document.documentElement.scrollTop + document.body.scrollTop;
        if (t < 2064) {
            back.src = '../../img/骑车.jpeg';
        } else if (t > 2596) {
            back.src = '../../img/daocheng.png';
        }
    })

    var wrap5ul = document.getElementsByClassName('wrap5-ul')[0];
    var wrap5li = wrap5ul.getElementsByTagName('li');
    var last = document.getElementById('last');
    var wrap4box3 = document.getElementById('wrap4-box3');
    for (var i = 0; i < wrap5li.length; i++) {
        wrap5li[i].index = i;
        wrap5li[i].onclick = function() {
            // var wid = this.index * wrap5li[0].offsetWidth + 26;
            last.style.left = '' + (239 * this.index + 26.7 * this.index + 26) + 'px';
            if (this.index == 0)
                window.scrollTo(0, 0);
            if (this.index == 1)
                window.scrollTo(0, 680);
            if (this.index == 2)
                window.scrollTo(0, 1360);
            if (this.index == 3)
                window.scrollTo(0, 1975);
        }
    }

    var wrap5 = document.getElementById('wrap5');
    var wrap5box1 = document.getElementById('wrap5-box1');
    var wrap5bo = 0;
    wrap5box1.onclick = function() {
        if (wrap5bo == 0) {
            wrap5box1.style.transform = 'rotateZ(180deg)';
            wrap5.style.top = 0 + "px";
            wrap5bo = 1;
        } else if (wrap5bo == 1) {
            wrap5box1.style.transform = 'rotateZ(0deg)';
            wrap5.style.top = -50 + "px";
            wrap5bo = 0;
        }
    }

    var wrap1 = document.getElementById('wrap1');
    var box1ul = document.getElementById('box1-ul');
    var ulli = box1ul.querySelectorAll("li");
    var bt2 = document.getElementById("bt2");
    var bt1 = document.getElementById("bt1");
    var ww = document.getElementById('ww');
    // if (bt1.offsetTop >= 300 - 6)
    //     console.log(2);
    var num = 0;
    bt2.addEventListener("click", function(event) {
        num++;
        if (num >= 5) {
            num = 1;
            box1ul.style.left = 0 + "px";
        }
        rtl(box1ul, -ulli[0].offsetWidth * num);
    })
    bt1.addEventListener('click', function(e) {
        num--;
        if (num < 0) {
            num = 3;
            box1ul.style.left = -4 * ulli[0].offsetWidth + "px";
        }
        animate(box1ul, -ulli[0].offsetWidth * num);
    })
    var timer = setInterval(function() {
        bt2.click();
    }, 2500);
    ww.addEventListener('mouseenter', function() {
        clearInterval(timer);
    })
    ww.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            bt2.click();
            console.log('aaa');
        }, 2500);
    })

    var wrap2box1 = document.getElementById('wrap2-box1');
    var wrap2box2ul = document.getElementById('wrap2-box2-ul')
    var zhuangshi1 = document.getElementById('zhuangshi1');
    var zhuangshi2 = document.getElementById('zhuangshi2');
    var zhuangshi3 = document.getElementById('zhuangshi3');
    var wrap6box1 = document.getElementById('wrap6-box1');
    var ww2 = document.getElementById('ww2');
    var wrap4box3 = document.getElementById('wrap4-box3');
    var n = [0, 0, 0, 0];
    document.addEventListener('scroll', function() {
        var t = document.body.scrollTop + document.documentElement.scrollTop;
        if (t > 220 && n[0] == 0) {
            n[0] = 1;
            plane(plan, 1200);
        }
        if (t > 230 && n[1] == 0) {
            n[1] = 1;
            toptobo(wrap2box1, 100);
        }
        if (t > 280 && n[2] == 0) {
            n[2] = 1;
            bototop(wrap2box2ul, 40);
        }
        if (t > 380 && n[3] == 0) {
            n[3] = 1;
            rtl(zhuangshi1, 1200);
        }
        if (t > 1450) {
            wrap4box3.style.top = '50px';
            wrap4box3.style.opacity = 0.9;
        }
        if (t > 105 && t < 741)
            zhuangshi2.style.opacity = 0.8;
        else
            zhuangshi2.style.opacity = 0;
        if (t > 1475 && t < 2304)
            zhuangshi3.style.opacity = 0.8;
        else
            zhuangshi3.style.opacity = 0;
        if (t > 2300) {
            wrap6box1.style.right = 0;
        }
        if (t > 2925) {
            ww2.style.top = 0;
            ww2.style.opacity = 0.9;
        }
        // console.log(t);
    });

    var plan = document.getElementById('plane');

    var bo = 0;
    var x, y, tx, ty, mx, my;
    var sx = -20;
    var sy = 0;
    var ul = document.getElementsByClassName('ul')[0];
    var li = ul.getElementsByTagName('li');
    var ull = document.getElementById('ul');
    var wrap4 = document.getElementById('wrap4');
    var dg = 360 / li.length;
    var ww = document.getElementById('ww');

    var ul1 = document.getElementsByClassName('ul1')[0];
    var li1 = ul1.getElementsByTagName('li');

    document.addEventListener('scroll', function() {
        var t = document.body.scrollTop + document.documentElement.scrollTop;
        if (t > 1680) {
            for (var i = 0; i < li.length; i++) {
                li[i].style.transform = 'rotateY(' + (i * dg) + 'deg) translateZ(300px)';
            }
            bo = 1;
        }
    });
    var wrap4box1 = document.getElementById('wrap4-box1');
    wrap4.onmousedown = function(e) {
        x = e.clientX;
        y = e.clientY;
        wrap4.onmousemove = function(e) {
            tx = e.clientX;
            ty = e.clientY;
            mx = tx - x;
            my = ty - y;
            sx -= (my * 0.2);
            sy += (mx * 0.1);

            wrap4box1.style.transform = 'rotateX( ' + sx + 'deg) rotateY(' + sy + 'deg)';
            x = tx;
            y = ty;
        }
        wrap4.onmouseup = function() {
            wrap4.onmousemove = null;
        }
        return false;
    }
    var l = 0;
    // for (i = 0; i < 6; i++) {
    //     li[i].index = i;
    //     li[i].addEventListener('click', function() {
    //         for (var j = 0; j < 6; j++) {
    //             li[li[j].index].style.transition = 'all 0.8s';
    //             li[l].style.transform = 'rotateY(' + (l * 60) + 'deg) translateZ(300px) ';
    //             li1[l].style.opacity = 0;
    //             li[this.index].style.transform = 'rotateY(' + (this.index * 60) + 'deg) translate3d(10px,-10px,280px)';
    //             li1[this.index].style.opacity = 0.9;
    //             l = this.index;
    //         }
    //     });
    // }

    var libo = 0
    for (i = 0; i < 6; i++) {
        (function(i) {

            li[i].addEventListener('click', function() {
                // li[i].style.transition = 'all 0.8s';
                li[l].style.transform = 'rotateY(' + (l * 60) + 'deg) translateZ(300px) ';
                li1[l].style.opacity = 0;
                if (l != i || libo == 0) {
                    li[i].style.transform = 'rotateY(' + (i * 60) + 'deg) translate3d(10px,-10px,280px)';
                    li1[i].style.opacity = 0.9;
                }
                l = i;
                libo = 1;
            });
        })(i);
    }
}