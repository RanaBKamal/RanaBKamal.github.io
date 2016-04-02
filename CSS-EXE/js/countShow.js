var counter1 = new Counter("counter-number1");
var counter2 = new Counter("counter-number2");
var counter3 = new Counter("counter-number3");
var counter4 = new Counter("counter-number4");

function testScroll(ev) {

    if (window.pageYOffset > 600) {

        counter1.startCount(6587);
        counter2.startCount(896);
        counter3.startCount(1674);
        counter4.startCount(769);
    }
}

window.onscroll = testScroll;
