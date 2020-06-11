$(document).ready(function () {
    var elasticProgress = new ElasticProgress(document.querySelector(".download"), {
        colorFg: "#d3d3d3",
        colorBg: "black",
        highlightColor: "#d3d3d3",
        barHeight: 14,
        barInset: 10,
        fontFamily: "monospace"
    });

    elasticProgress.onClick(function () {
        elasticProgress.open();
    });

    elasticProgress.onOpen(function () {
        fakeLoading(elasticProgress, 2, 0.5);
    });

    elasticProgress.onFail(function () {
        elasticProgress.close();
    });

    function fakeLoading($obj, speed, failAt) {
        if (typeof speed == "undefined") speed = 2;
        if (typeof failAt == "undefined") failAt = -1;
        var v = 0;
        var l = function () {
            if (failAt > -1) {
                if (v >= failAt) {
                    if (typeof $obj.jquery != "undefined") {
                        $obj.ElasticProgress("fail");
                    } else {
                        $obj.fail();
                    }
                    return;
                }
            }
            v += Math.pow(Math.random(), 2) * 0.1 * speed;

            if (typeof $obj.jquery != "undefined") {
                $obj.ElasticProgress("setValue", v);
            } else {
                $obj.setValue(v);
            }
            if (v < 1) {
                TweenMax.delayedCall(0.05 + (Math.random() * 0.14), l)
            }
        };
        l();
    };
});