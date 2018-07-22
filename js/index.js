/*
* @Author: 75497
* @Date:   2018-07-20 13:33:18
* @Last Modified by:   75497
* @Last Modified time: 2018-07-20 18:18:42
*/
window.onload=function(){
	let shop=document.getElementsByClassName("shop")[0];
	let car=document.getElementsByClassName("car")[0];
	console.log(shop,car);
	shop.onmouseenter=function(){
		car.style.height="99px";
		car.style.boxShadow="0 7px 6px rgba(0,0,0,0.2)";
        car.style.lineHeight="99px";
	}
	shop.onmouseleave=function(){
		car.style.height=0;
		car.style.boxShadow="none";
        car.style.lineHeight="none";
	}

	let bigBox=document.getElementsByClassName("bigBox")[0];
    let logoBox=bigBox.getElementsByClassName("logoBox")[0];
    let nav1=logoBox.getElementsByClassName("nav1")[0];
    let xia=nav1.getElementsByClassName("xia");
    let logoCon=document.getElementsByClassName("logoCon");
    console.log(xia,logoCon);
    for(let i=0;i<xia.length-2;i++){
    	xia[i].onmouseenter=function () {
			for(let j=0;j<xia.length-2;j++){
                logoCon[j].style.display="none";
			}
            logoCon[i].style.display="block";
            logoCon[i].style.height="230px";
            logoCon[i].style.background="#fff";
            logoCon[i].style.borderTop="1px solid #E0E0E0";
            logoCon[i].style.boxShadow="0 7px 6px rgba(0,0,0,0.2)";
        }
        xia[i].onmouseleave=function () {
            logoCon[i].style.display="none";
            logoCon[i].style.height=0;
            logoCon[i].style.background="none";
            logoCon[i].style.boxShadow="none";
            logoCon[i].style.borderTop="none";
        }
	}

    let asite=document.getElementsByClassName("asite")[0];
	let box=asite.getElementsByClassName("box")[0];
	let son=box.getElementsByClassName("son");
	let sonCon=document.getElementsByClassName("sonCon");
	console.log(son,sonCon);
	for(let i=0;i<son.length;i++){
		son[i].onmouseenter=function(){
			for(let j=0;j<son.length;j++){
				sonCon[j].style.display="none";
				sonCon[j].style.background="none";
			}
			sonCon[i].style.display="block";
			sonCon[i].style.background="#fff";
            sonCon[i].style.boxShadow="0 7px 6px rgba(0,0,0,0.2)";
            sonCon[i].style.border="1px solid #E0E0E0";
		}
		son[i].onmouseleave = function () {
                sonCon[i].style.display = "none";
            	sonCon[i].style.boxShadow="none";
            	sonCon[i].style.border="none";
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
                    navCon[j].style.color="none";
                    navCon[j].style.border="none";
                }

                goodsBox[i].style.display = "block";
                navCon[i].style.color="red";
                navCon[i].style.border="2px soild red";
            }

        }
    }
    let goods=document.getElementsByClassName("goods")[0];
	xm(goods);
    let intelligence=document.getElementsByClassName("intelligence")[0];
    xm(intelligence);
    let collocate=document.getElementsByClassName("collocate")[0];
    xm(collocate);
    let peijian=document.getElementsByClassName("peijian")[0];
    xm(peijian);
    let zhoubian=document.getElementsByClassName("zhoubian")[0];
    xm(zhoubian);
}