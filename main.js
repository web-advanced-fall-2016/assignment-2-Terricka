let url = "http://148.75.251.185:8888";

console.log("logged");

var moreButton = document.getElementById('block1');
// console.log(moreButton);

var container = document.getElementById("container");
var blocks = document.getElementsByClassName('block');


window.onload=function(){
	
			
			$.ajax({
				method: "GET",
				url: url + `/students`
			}).done(function(response){
				// console.log(response);
				for(var i = 0; i < response.length; i++){
					var count = i;

					$.ajax({

							method: "GET",
							url: url+'/students/'+response[i].id
						}).done(function(response){
								// console.log(response);

								var div = document.createElement('div');
								// div.id = count;
								div.className = 'block';
								container.appendChild(div);

								div.dataset.id = response.id;

								var link = document.createElement('a');
								link.id = 'profile-' + response.id;
								link.href = '#';

								div.appendChild(link);
								


								
								var image = document.createElement('img');
								image.src = url + response.profile_picture;
								// image.dataset.id = response.id;

								link.appendChild(image);

								var overlay = document.createElement('div');
								overlay.className = 'overlay';

								link.appendChild(overlay);

								div.addEventListener('mouseenter', function(evnt){
									var thisId = $(this).attr("data-id");
									var overlayed = $(this).find('.overlay');
								//this.querySelector('.overlay').innerText = "true"
									// console.log(thisId);

									var p = document.createElement("p");
									overlay.appendChild(p);
									// console.log("works");
									

									$.ajax({
										method: "GET",
										url: url +`/students/`+evnt.target.dataset.id
									}).done(function(response){
										// console.log("yes")
										overlay.innerHTML += '<h1>' + response.first_name + ' ' + response.last_name + '</h1>';
										overlay.innerHTML += '<br><p>'
										overlay.innerHTML += response.email;
										overlay.innerHTML += '</p><br><p>';
										overlay.innerHTML += response.excerpt;
										overlay.innerHTML += '</p>'
										
									})
								});

								div.addEventListener('mouseleave', function(evnt){
									overlay.innerHTML = '';
								
								})


						})


				}

				console.log("success");
			});

			
			

};