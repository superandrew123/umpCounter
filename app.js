var main = function() {
	var outs = 0;
	var inning = ["Top ", 1];
	var homeS = 0;
	var awayS = 0;
	var strikes = 0;
	var balls = 0;
	$(".strikes").html(strikes);
	$(".strikesTr").click( function() {
		strikes++;
		$(".strikes").html(strikes);
	});
	$(".balls").html(balls);
	$(".ballsTr").click( function() {
		balls++;
		$(".balls").html(balls);
	});	
	$(".outs").html(outs);
	$(".inning").html(inning);
	
	$(".outsTr").click( function() {
		if (outs < 3){outs++;};
		$(".outs").html(outs);
		if(outs == 3){
			$(".outs").html(outs);
			if (inning[0] == "Top ") {
				inning[0] = "Bot ";
				$(".inning").html(inning);
			}else {
				inning[0] = "Top ";
				inning[1]++;
				$(".inning").html(inning);
			};
			outs = -1;
		};
	});
	$(".homeS").html(homeS);
	$(".homeSTr").click( function() {
		homeS++;
		$(".homeS").html(homeS);
	});
	



	$(".awayS").html(homeS);
	$(".awaySTr").click( function() {
		awayS++;
		$(".awayS").html(awayS);
	});	
};



$(document).ready(main);