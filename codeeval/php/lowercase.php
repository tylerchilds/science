<?php

// Lowercase- Code Eval Challenge
// Tyler Childs - 12/9/2013

$fh = fopen($argv[1], "r");
while (true) {
	$test = fgets($fh);
	
	echo strtolower($test);

	if($test == "")
		exit(0);
}

?>
