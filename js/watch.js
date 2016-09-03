 $(document).ready(function() {
                $("#fullpage").fullpage({
                    anchors: ["page1", "page2", "page3", "page4"],
                    afterLoad: function(anchorLink, index) {
                        /*console.log("afterLoad:anchorLink="+anchorLink+";index="+index);*/
                        if (index == 1) $("h1").addClass("tittle1");
                        if (index == 2) $("h3").addClass("pan2");
                        if (index == 3) $("h2").addClass("pan3");
                        if (index == 4) $(".watch").addClass("pan4");
                    },
                    onLeave: function(index, nextIndex, direction) {
                        if (index == 1) $("h1").removeClass("tittle1");
                        if (index == 2) $("h3").removeClass("pan2");
                        if (index == 3) $("h2").removeClass("pan3");
                        if (index == 4) $(".watch").removeClass("pan41");
                        if (index == 4) $(".watch").removeClass("pan4");
                    }
                });
            });

            $(function() {
                $('.wrap').on('mouseover', function() {
                    $(".watch").removeClass("pan4");
                    $(".watch").addClass("pan41");
                });
            });
