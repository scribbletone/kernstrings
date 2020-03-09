
$(document).ready(function(){
	
	
	//span_class=[];
	//span_class[0]="zero"; 
	var left_glyphs = '';
	var right_glyphs = '';
	var num_pairs=5;
	var left_length = 0;
	var right_length = 0;
	var separator = '';
	var output = '';
	var pair_count = 1;
	
	function getData() {
		//alert('getData');
		
		//get left glyphs
		left_glyphs = $('#leftglyphs').val();
		left_length = left_glyphs.length;
		
		//get right glyphs
		right_glyphs = $('#rightglyphs').val();
		right_length = right_glyphs.length;
		
		//get separator
		separator = $('#separator').val();
		
		//get number of pairs
		num_pairs = $('#numpairs').val();
		
		
		
		
		
		//alert(left_glyphs.length);
		//alert(left_glyphs.charAt(2));
		
	}
	
	
	
	//make permutations
	function makePermutations() {
		//alert('permutations');
		pair_count = 1;
		output = '';
		
		for (var i = 0; i < left_glyphs.length; i++) {
			//$('#output').text(i);
			
			for (var x = 0; x < right_glyphs.length; x++) {
				//$('#output').text(i);
				
				output = output + separator + left_glyphs.charAt(i) + right_glyphs.charAt(x) + separator;
				
				if (num_pairs > 0){
					
					if (pair_count >= num_pairs) {
						output = output + '<br />';
						
						pair_count = 0;
						
					}
					
					pair_count++;
					
				
				}
				
			}
			
			
		}
		
		$('#output').html(output);
		
	}
	
	
	// main script
	function getKernPairs() {
		//alert('getKernPairs');
		
		
		getData();
		
		makePermutations();
		
	}
	
	
	$(".submit").click(function () {
	
		//$(this).parent('li').find('ul').toggle();
		
		
		getKernPairs();
		
		
		
	});



});


