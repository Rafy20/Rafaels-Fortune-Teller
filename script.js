$(".Calculate").click(function() {
    let steps = $(".steps").val();

    let howoften = $(".often").val();
    
    let options = $(".multiple-choice option:selected").val();
    
   	console.log(options);

    let solution = steps * howoften * options * 28;

        $(".answer").text(solution);

});

