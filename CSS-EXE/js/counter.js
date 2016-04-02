function Counter(element) {
    var self = this;
    self.element = element;

    var counter = 0;
    var record;
    var flag = 1;
    self.init = function () {

        record = document.getElementsByClassName(self.element)[0];

    }

    self.init();

    self.startCount = function (finalValue) {
        if (flag == 1) {
            flag = 0;
            var startId = setInterval(function () {
                record.innerHTML = counter;
                if (counter == finalValue) {
                    clearInterval(startId);
                }
                if ((finalValue - counter) > 101) {
                    counter = counter + 101;
                }

                if ((finalValue - counter) < 101 && (finalValue - counter)>55) {
                    counter = counter + 50;
                }

                if((finalValue - counter)<50){
                    counter = counter + 1;
                }
            }, 100);


        }

    }

}