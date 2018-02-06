 <?php

$random_list = array();

while(count($random_list) < 4) {
	$random_number = mt_rand(1,8);
			if(!in_array($random_number, $random_list)){
		$random_list[] = $random_number;
		}
	}

	#ovaj dio radi brojeve ^^


		$input_n1 = $_POST["input_n1"];
		$input_n2 = $_POST["input_n2"];
		$input_n3 = $_POST["input_n3"];
		$input_n4 = $_POST["input_n4"];

		$input_numbers = array("$input_n1", "$input_n2", "$input_n3", "$input_n4");

		
		
		for ($i=0; $i < count($random_list) ; $i++) {

			if ($random_list[$i] == $input_numbers[$i]) {
				echo $random_list[$i] . ' ' . 'je jednak, '; #jednak = crveno
			}
			else echo 'ne, '; #ne = ništa
			}
		


		# random_list treba spremit da se ne mijenja, stavit u loop (9 puta) 
		#ako su sve 4 "crvene", zaustavit sve i napisat nešto kao kraj
		#ako je vrijednost iz random_list jednaka input vrijednosti, ali nije na istom mjestu [x], onda je "žuto", dok ne bude točna vrijednost na točnom mjestu


    ?>