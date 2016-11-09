let url = "http://148.75.251.185:8888";

console.log("logged");

var moreButton = document.getElementById('block1');
// console.log(moreButton);

var container = document.getElementById("container");


window.onload=function(){
	
		
			
			$.ajax({
				method: "GET",
				url: url + `/students`
			}).done(function(response){
				console.log(response);
				for(var i = 0; i < response.length; i++){
					var count = i;

					$.ajax({

							method: "GET",
							url: url+'/students/'+response[i].id
						}).done(function(response){
								console.log(response);

								var div = document.createElement('div');
								div.id = count;
								div.className = 'block';
								container.appendChild(div);

								var link = document.createElement('a');
								link.id = 'profile-' + [i];
								link.href = '#';

								div.appendChild(link);

								
								var image = document.createElement('img');
								image.src = url + response.profile_picture;
								// image.dataset.id = response.id;

								link.appendChild(image);

								var overlay = document.createElement('div');
								overlay.className = 'overlay';

								link.appendChild(overlay);

								// overlay.html()

						})


						var blocks = document.getElementsByClassName('block');
			

						


				}




				console.log("success");
			});


			
		
		


};