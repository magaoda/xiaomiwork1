/*
* @Author: 75497
* @Date:   2018-07-20 13:33:18
* @Last Modified by:   75497
* @Last Modified time: 2018-08-01 18:57:09
*/
window.onload=function() {
    
    let shop = document.getElementsByClassName("shop")[0];
    let car = document.getElementsByClassName("car")[0];
    console.log(shop, car);
    shop.onmouseenter = function () {
        car.style.height = "99px";
        car.style.boxShadow = "0 7px 6px rgba(0,0,0,0.2)";
        car.style.lineHeight = "99px";
    }
    shop.onmouseleave = function () {
        car.style.height = 0;
        car.style.boxShadow = "none";
        car.style.lineHeight = "none";
    }

    let sou=document.querySelector(".sou");
    let son11=document.querySelector(".son11");
    let input=document.querySelector("input");
    let son12=document.querySelector(".son12");
    let son13=document.querySelector(".son13");
    let ss=document.querySelector(".ss");
    input.onfocus=function(){
        sou.style.borderColor="#FF6701";
        son11.style.borderColor="#FF6701";
        son12.style.display="none";
        son13.style.display="none";
        ss.style.display="block";
    }
    input.onblur=function(){
        sou.style.borderColor="#E0E0E0";
        son11.style.borderColor="#E0E0E0";
        son12.style.display="block";
        son13.style.display="block";
        ss.style.display="none";
    }

    let bigBox = document.getElementsByClassName("bigBox")[0];
    let logoBox = bigBox.getElementsByClassName("logoBox")[0];
    let nav1 = logoBox.getElementsByClassName("nav1")[0];
    let xia = nav1.getElementsByClassName("xia");
    let logoCon = document.getElementsByClassName("logoCon");
    console.log(xia, logoCon);
    for (let i = 0; i < xia.length - 2; i++) {
        xia[i].onmouseenter = function () {
            for (let j = 0; j < xia.length - 2; j++) {
                // logoCon[j].style.display = "none";
            }
            // logoCon[i].style.display = "block";
            logoCon[i].style.height = "230px";
            logoCon[i].style.background = "#fff";
            logoCon[i].style.borderTop = "1px solid #E0E0E0";
            logoCon[i].style.boxShadow = "0 7px 6px rgba(0,0,0,0.2)";
        }
        xia[i].onmouseleave = function () {
            // logoCon[i].style.display = "none";
            logoCon[i].style.height = 0;
            logoCon[i].style.background = "none";
            logoCon[i].style.boxShadow = "none";
            logoCon[i].style.borderTop = "none";
        }
    }

    let asite = document.getElementsByClassName("asite")[0];
    let box = asite.getElementsByClassName("box")[0];
    let son = box.getElementsByClassName("son");
    let sonCon = document.getElementsByClassName("sonCon");
    console.log(son, sonCon);
    for (let i = 0; i < son.length; i++) {
        son[i].onmouseenter = function () {
            for (let j = 0; j < son.length; j++) {
                sonCon[j].style.display = "none";
                sonCon[j].style.background = "none";
            }
            sonCon[i].style.display = "block";
            sonCon[i].style.background = "#fff";
            sonCon[i].style.boxShadow = "0 7px 6px rgba(0,0,0,0.2)";
            sonCon[i].style.border = "1px solid #E0E0E0";
            sonCon[i].style.zIndex = 99;
        }
        son[i].onmouseleave = function () {
            sonCon[i].style.display = "none";
            sonCon[i].style.boxShadow = "none";
            sonCon[i].style.border = "none";
            sonCon[i].style.zIndex = "none";
        }
    }

    function xm(fn) {
        let top = fn.getElementsByClassName("top")[0];
        let nav = top.getElementsByClassName("nav")[0];
        let navCon = nav.getElementsByClassName("navCon");
        let con = fn.getElementsByClassName("con")[0];
        let goodsBox = con.getElementsByClassName("goodsBox");
        console.log(navCon, goodsBox);
        for (let i = 0; i < navCon.length; i++) {
            navCon[i].onmouseenter = function () {
                for (let j = 0; j < navCon.length; j++) {
                    goodsBox[j].style.display = "none";
                    navCon[j].style.color = "none";
                    navCon[j].style.border = "none";
                }

                goodsBox[i].style.display = "block";
                navCon[i].style.color = "red";
                navCon[i].style.border = "2px soild red";
            }

        }
    }

    let goods = document.getElementsByClassName("goods")[0];
    xm(goods);
    let intelligence = document.getElementsByClassName("intelligence")[0];
    xm(intelligence);
    let collocate = document.getElementsByClassName("collocate")[0];
    xm(collocate);
    let peijian = document.getElementsByClassName("peijian")[0];
    xm(peijian);
    let zhoubian = document.getElementsByClassName("zhoubian")[0];
    xm(zhoubian);

    let bigCon = document.getElementsByClassName("bigCon")[0];
    let wraper = bigCon.getElementsByClassName("wraper")[0];
    let zhuan = wraper.getElementsByClassName("zhuan")[0];
    let a = zhuan.getElementsByTagName("a");
    let left = bigCon.getElementsByClassName("jiantou1")[0];
    let right = bigCon.getElementsByClassName("jiantou2")[0];
    let btns = bigCon.getElementsByClassName("btns")[0];
    let li = btns.getElementsByTagName("li");
    console.log(li);
    console.log(a);

    let t = setInterval(move, 1000);
    let num = 0;

    function move() {
        num++;
        if (num == a.length) {
            num = 0;
        }
        for (let i = 0; i < a.length; i++) {
            a[i].style.zIndex = 5;
            li[i].className = "";
        }
        a[num].style.zIndex = 10;
        li[num].className = " hot";
    }

    bigCon.onmouseenter = function () {
        clearInterval(t);
    }
    bigCon.onmouseleave = function () {
        t = setInterval(move, 1000);
    }
    right.onclick = function () {
        move1();
    }

    function move1() {
        num--;
        if (num < 0) {
            num = a.length - 1;
        }
        for (let j = 0; j < a.length; j++) {
            a[j].style.zIndex = 5;
            li[j].className = "";
        }
        a[num].style.zIndex = 10;
        li[num].className = "hot";
    }

    left.onclick = function () {
        move();
    }
    for (let x = 0; x < li.length; x++) {
        li[x].onclick = function () {
            for (let y = 0; y < li.length; y++) {
                a[y].style.zIndex = 5;
                li[y].className = "";
            }
            a[x].style.zIndex = 10;
            li[x].className = "hot";
            num = x;
        }
    }
    // let neirong=document.querySelector(".neirong .con .box1 .list");
    // let list=document.querySelectorAll(".list");
    // let btns1=document.querySelectorAll(".btns1");
    // console.log(list);
    // let now=0;
    // let next=0;
    // let widths=parseInt(getComputedStyle(neirong,null).width);
    // console.log(widths);
    // setInterval(move,1000);
    //  function move() {
    //      next++;
    //      if (next==list.length){
    //          next=0;
    //     }
    //      list[next].style.left=widths+"px";
    //     animate(list[now],{left:-widths});
    //     animate(list[next],{left:0});
    //     now=next;
    //  }

    let right1 = document.querySelector(".right1");
    let btn2 = document.querySelectorAll(".more1 .btn2");
    let time = 0;
    let rightsWidth = parseInt(getComputedStyle(right1, null).width) / 3;
    console.log(rightsWidth);
    btn2[1].onclick = function () {
        time++;
        if (time == 2) {
            time = 1;
        }
        right1.style.transform = `translateX(${-rightsWidth * time}px)`;

    }
    btn2[0].onclick = function () {
        time--;
        if (time < 0) {
            time = 0;
        }
        right1.style.transform = `translateX(${-rightsWidth * time}px)`;

    }

    let con = document.querySelector(".nr .con");
    let bo = con.querySelectorAll(".bo");

    function lbt(obj) {
        let width = parseInt(getComputedStyle(obj, null).width);
        let pre1 = obj.querySelector(".pre");
        let end1 = obj.querySelector(".end");
        let boxs = obj.querySelectorAll(".boxs");
        let sons = obj.querySelectorAll(".son");
        let flag = true;

        /*let p=setInterval(move2,2000);

        obj.onmouseenter=function(){
            clearInterval(p);
        }
        obj.onmouseleave=function(){
            p=setInterval(move2,2000);
        }*/

        let now = 0;
        let next = 0;

        function move2() {
            next++;
            if (next == boxs.length) {
                next = 0;
            }
            for (let j = 0; j < sons.length; j++) {
                sons[j].classList.remove("son1");
            }
            sons[next].classList.add("son1");
            boxs[next].style.left = width + "px";
            animate(boxs[now], {left: -width});
            animate(boxs[next], {left: 0}, function () {
                flag = true;
            });
            now = next;
        }

        function move3() {
            next--;
            if (next < 0) {
                next = boxs.length - 1;
            }
            for (let j = 0; j < sons.length; j++) {
                sons[j].classList.remove("son1");
            }
            sons[next].classList.add("son1");
            boxs[next].style.left = -width + "px";
            animate(boxs[now], {left: width});
            animate(boxs[next], {left: 0}, function () {
                flag = true;
            });
            now = next;
        }

        pre1.onclick = function () {
            if (flag == false) {
                return;
            }

            if (next == 0) {
                return;
            }
            flag = false;
            move3();
        }
        end1.onclick = function () {
            if (flag == false) {
                return;
            }
            if (next == boxs.length - 1) {
                return;
            }
            flag = false;
            move2();
        }

        for (let k = 0; k < sons.length; k++) {
            sons[k].onclick = function () {
                if (k > now) {
                    for (let j = 0; j < sons.length; j++) {
                        sons[j].classList.remove("son1");
                    }
                    sons[k].classList.add("son1");
                    boxs[k].style.left = width + "px";
                    animate(boxs[now], {left: -width});
                    animate(boxs[k], {left: 0});
                    now = next = k;
                }
                else if (k < now) {
                    for (let j = 0; j < sons.length; j++) {
                        sons[j].classList.remove("son1");
                    }
                    sons[k].classList.add("son1");
                    boxs[k].style.left = -width + "px";
                    animate(boxs[now], {left: width});
                    animate(boxs[k], {left: 0});
                    now = next = k;
                }
                else {
                    return;
                }
            }
        }
    }


    bo.forEach(function (element) {
        lbt(element);
    })
    //
    // let bigCon=document.querySelector(" .bigCon ");
    // let lun=document.querySelectorAll(".lun");
    // let left=bigCon.getElementsByClassName("jiantou1")[0];
    // let right=bigCon.getElementsByClassName("jiantou2")[0];
    // let btns=bigCon.getElementsByClassName("btns")[0];
    // let li=btns.getElementsByTagName("li");
    // console.log(bigCon,lun,li);
    // let now=0;
    // let next=0;
    // let flag=true;
    // let widths=parseInt(getComputedStyle(bigCon,null).width);
    // console.log(widths);
    // let t=setInterval(move,2000);
    // function move() {
    //     next++;
    //     if (next==lun.length){
    //         next=0;
    //     }
    //     // for(let i=0;i<li.length;i++){
    //     //      li[i].className="";
    //     // }
    //     //  li[now].className="hot";
    //     lun[next].style.left=-widths+"px";
    //     animate(lun[now],{left:widths},function () {
    //         flag=true;
    //     });
    //     animate(lun[next],{left:0});
    //     li[next].classList.add("hot");
    //     li[now].classList.remove("hot");
    //     now=next;
    // }
    // bigCon.onmouseenter=function () {
    //     clearInterval(t);
    // }
    // bigCon.onmouseleave=function () {
    //     t=setInterval(move,1000);
    // }
    // left.onclick=function () {
    //     if(flag==false){
    //         return;
    //     }
    //     if(next==lun.length-1){
    //         return;
    //     }
    //     flag=false;
    //     move();
    // }
    // function move1() {
    //     next--;
    //     if(next<0){
    //         next=lun.length-1;
    //     }
    //     // for(let x=0;x<li.length;x++){
    //     //     li[x].className="";
    //     // }
    //     // li[now].className="hot";
    //     lun[next].style.left=widths+"px";
    //     animate(lun[now],{left:-widths},function () {
    //         flag=true;
    //     });
    //     animate(lun[next],{left:0});
    //     li[next].classList.add("hot");
    //     li[now].classList.remove("hot");
    //     now=next;
    // }
    // right.onclick=function () {
    //     if(flag==false){
    //         return;
    //     }
    //     if(next==0){
    //         return;
    //     }
    //     flag=false;
    //     move1();
    // }
    // for(let i=0;i<li.length;i++){
    //     li[i].onclick=function () {
    //         if (i > now) {
    //             lun[i].style.left=-widths+"px";
    //             animate(lun[now], {left: -widths});
    //             animate(lun[i], {left: 0});
    //             li[i].classList.add("hot");
    //             li[now].classList.remove("hot");
    //         }
    //         if (i == now) {
    //             return;
    //         }
    //         if (i < now) {
    //             lun[i].style.left=widths+"px";
    //             animate(lun[now], {left: widths});
    //             animate(lun[i], {left: 0});
    //             li[i].classList.add("hot");
    //             li[now].classList.remove("hot");
    //         }
    //         now=next=i;
    //     }
    //
    // }
    let box2=document.querySelector(".box2")
    let son2=box2.querySelectorAll(".left .box .box2 .son2");
    console.log(son2);
    fn();
    setInterval(fn,1000);
    function fn() {
        let arr = js();
        son2.forEach(function (v,i) {
            v.innerText=arr[i];
        })
    }

    function js() {
        let arr=[];
        let now = new Date();
        let future = new Date(2018,7,10,18);
        let sj = Math.floor(future.getTime() - now.getTime())/1000;
        // let month = Math.floor(sj / (30 * 24 * 60 * 60));
        // sj = sj % (30 * 24 * 60 * 60);
        // arr.push(month);
        //
        // let day = Math.floor(sj / (24 * 60 * 60));
        // sj = sj % (24 * 60 * 60);
        // arr.push(day);
       
        let hour = Math.floor(sj / (60 * 60));
        sj = sj % (60 * 60);
        if(hour>=0 && hour<=9){
            hour="0"+hour;
        }
        arr.push(hour);

        let minuth = Math.floor(sj /( 60));
        sj = sj % (60 * 60);
        if(minuth>=0 && minuth<=9){
            minuth="0"+minuth;
        }
        arr.push(minuth);

        let ss = Math.floor(sj % 60);
        sj = sj % 60;
        if(ss>=0 && ss<=9){
            ss="0"+ss;
        }
        arr.push(ss);

        return arr;
    }

    let cons = document.querySelector(".cons");
    let btn3 = document.querySelectorAll(".more2 .btn3");
    let time1 = 0;
    let conWidth = parseInt(getComputedStyle(cons, null).width) / 4;
    console.log(conWidth);
    btn3[1].onclick = function () {
        time1++;
        if (time1 == 4) {
            time1=3;
        }
        cons.style.transform = `translateX(${-conWidth * time1}px)`;

    }
    btn3[0].onclick = function () {
        time1--;
        if (time1 < 0) {
            time1 = 0;
        }
        cons.style.transform = `translateX(${-conWidth * time1}px)`;

    }

}