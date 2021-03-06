var confidentSkillsCounter = 0;
var educationCounter = 0;
var workCounter = 0;

$(".educationClick").on("click", function() {
    $("#arrow1").toggleClass("hideContentRotate");
    $("#arrow1").toggleClass("showContentRotate");
    $("#shadow1").toggle();
    $(".educationContent").slideToggle();
    if(educationCounter === 0) {
        typeHeader("Code To Success - 2016", "#CTSHeader", afterToggle, [1, "CTSContent", 2, 3]);
        educationCounter++;
    }
});

$("#workClick").on("click", function() {
    $("#arrow2").toggleClass("hideContentRotate");
    $("#arrow2").toggleClass("showContentRotate");
    $("#shadow2").toggle();
    $("#workContent").slideToggle();
    if(workCounter === 0) {
        typeHeader("McDonalds - Summer 2015", "#MDHeader", afterToggle, [1, "MDContent", 2, 5]);
        workCounter++;
    }
});

$("#summaryClick").on("click", function() {
    $("#arrow3").toggleClass("hideContentRotate");
    $("#arrow3").toggleClass("showContentRotate");
    $("#shadow3").toggle();
    $("#summaryContent").slideToggle(400, "swing", function() {
        if(confidentSkillsCounter !== 1) {
            var words = "Skills I am confident in:";
            typeHeader(words, "#summaryTitle", afterToggle, [1, "confidentSkills", 5, 1]);
            confidentSkillsCounter++;
        }
    });

});

$("#continue1").on("click", function() {
    $(this).css("display", "none");
    typeHeader("Other skills I can use or am still a beginner at:", "#canWorkWithTitle", afterToggle, [1, "otherSkills", 5, 2 ]);
});

$("#continue2").on("click", function() {
    $(this).css("display", "none");
    typeHeader("Skills I am currently learning:", "#learningSkillsHeader", afterToggle, [1, "learningSkills", 4, null]);
});

$("#continue3").on("click", function() {
    $(this).css("display", "none");
    typeHeader("Westlake High School - 2017", "#HSHeader", afterToggle, [1, "HSContent", 2, 4]);
});

$("#continue4").on("click", function() {
    $(this).css("display", "none");
    typeHeader("Mountainland Applied Technology College - 2017", "#TechCollegeHeader", afterToggle, [1, "TechContent", 2, null]);
});

$("#continue5").on("click", function() {
    $(this).css("display", "none");
    typeHeader("Code To Success - 2017", "#MentorHeader", afterToggle, [1, "MentorContent", 2, 6]);
});

$("#continue6").on("click", function() {
    $(this).css("display", "none");
    typeHeader("Nuvi - 2017", "#NuviHeader", afterToggle, [1, "NuviContent", 2, null]);
});



function typeHeader(words, place, callback, params) {
    typingTheHeader(0, words);
    function typingTheHeader(position, word) {
        if(position > (word.length - 1)) {
            callback(params);
            return true;
        } else {
            $(place).append("<span>" + words[position] + "</span>");
            setTimeout(function() {
                typingTheHeader((position + 1), word);
            }, 100);
        }
    }
}

function afterToggle(params) {

    //------------------------------------------------------------------------------------
    // A weird error occurred with the parameters so I had to store them in an array.
    // These are the params:
    //
    // params[0] = iterator
    // params[1] = id name
    // params[2] = ending number of elements
    // params[3] = continue number
    //------------------------------------------------------------------------------------

    if( params[0] === params[2]) {
        $("#continue" + params[3]).css("display", "block");
        return true;
    } else {
        $("#" + params[1] + "" + params[0]).slideToggle(800, "swing", function() {
            params[0] = params[0] + 1;
            afterToggle(params);
        });
    }
}

