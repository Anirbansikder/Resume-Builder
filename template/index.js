module.exports = (values) => {
	const {
		firstName,
        lastName,
        email,
        phone,
        linkedIn,
        github,
        bio,

        courseNameCollege,
        collegeName,
        startDateC,
        endDateC,
        percentageC,

        courseNameSchool,
        schoolName,
        startDateS,
        endDateS,
        percentageS,

        courseNameSchool2,
        schoolName2,
        startDateS2,
        endDateS2,
        percentageS2,

        project1,
        startDateP1,
        endDateP1,
        link1,
        bioP1,

        project2,
        startDateP2,
        endDateP2,
        link2,
        bioP2,

        company1,
        startDateC1,
        endDateC1,
        bioCompany1,

        company2,
        startDateC2,
        endDateC2,
        bioCompany2,

        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        skill6,

        achievement1,
        linkAch1,
        achievement2,
        linkAch2,
        achievement3,
        linkAch3,
        achievement4,
        linkAch4,

        certificate1,
        linkcert1,
        certificate2,
        linkcert2,

        language1,
        language2,
        language3,

        interest1,
        interest2,
        interest3,
        interest4,
	} = values;
	let achievement_number = 0;
	if(achievement1 !== '' || achievement2 !=='' || achievement3 !== '' || achievement4 !== '')
		achievement_number = 1;
	let interest_number = 0;
	if(interest1 !== '' || interest2 !=='' || interest3 !== '' || interest4 !== '')
		interest_number = 1;
	let certificate_number = 0;
	if(certificate1 !== '' || certificate2 !=='')
		certificate_number = 1;
    let htmlTemplate =  `
	<!doctype html>
    <html lang="en">
    <head>
    <title>${firstName}'s Resume</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet">
	<style>
	* {
		box-sizing: border-box !important; 
	}
	body {
		background-size: cover !important;
		font-style: normal;
	}
	.name{
		font-size: 30px !important;
		letter-spacing: 4px !important;
		font-weight: 600 !important;
		line-height: 35px !important;
		color: #000 !important;
		margin-bottom: 10px !important;
		text-transform: uppercase !important;
	}
	h2 {
		font-size: 23px !important;
		letter-spacing: 5px !important;
		font-weight: 600 !important;
		color: #000 !important;
	}
	h3 {
		font-size: 15px !important;
		letter-spacing: 1px !important;
		font-weight: 400 !important;
		color: #000 !important;
	}
	h4 {
		font-size: 7px !important;
		letter-spacing: 1px !important;
		font-weight: 400 !important;
		color: #000 !important;
	}
	.page {
		width: 95% !important;
		max-width: 1200px !important;
		margin: 10px auto !important;
		background-color: #fff !important;
		box-shadow: 6px 10px 28px 0px rgba(0,0,0,0.4) !important;
		padding: 20px 10px !important;
	} 
	hr {
		border-top : solid black !important; 
	}
	p{
		font-size : 10px !important;
		line-height: 13px !important;
	}
	</style>
    </head>
	<body>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <div class="page">
		<div class="container">
				<div class="name">${firstName} ${lastName}</div>`;
	if(bio!=''){
		htmlTemplate += `<p>${bio}</p>`
	};
	htmlTemplate += `</div>
		<hr>
		<div class="container">
			<div class="row">
			  	<div class="col-xs-6" style="padding: 10px !important;">
					<i class="far fa-envelope"></i>
					<span style="margin-left: 10px !important; font-size: small !important;">${email}</span>
			  	</div>
			  	<div class="col-xs-6" style="padding: 10px !important;">
					<i class="fas fa-mobile-alt"></i>
					<span style="margin-left: 10px !important; font-size: small !important;">${phone}</span>
			  	</div>
			</div>
			<div class="row">`;
			if(linkedIn !== ''){
				htmlTemplate += `<div class="col-xs-6" style="padding: 10px !important;">
									<i class="fab fa-linkedin"></i>
									<span style="margin-left: 10px !important;"><a style="text-decoration: none !important; color: #000 !important; font-size: small !important;">${linkedIn}</a></span>
								</div>`
			}
			if(github !== ''){
				htmlTemplate += `<div class="col-xs-6" style="padding: 10px !important;">
									<i class="fab fa-github"></i>
									<span style="margin-left: 10px !important;"><a style="text-decoration: none !important; color: #000 !important; font-size: small !important;">${github}</a></span>
								</div>`
			}
		  	htmlTemplate += `</div>
		</div>
		<hr>
		<div class="container">
			<div class="row">
			  	<div class="col-xs-6" style="margin-top: 2px !important;">
					<h2>EDUCATION</h2>
					<div style="padding: 0 0 2px 10px !important;">
						<h3>${collegeName}</h3>
						<h4>${courseNameCollege}</h4>
						<span style="font-size: x-small !important; color : rgb(173, 170, 170) !important; margin-top: 5px !important;">${startDateC} - ${endDateC}</span>
						<span style="font-size: x-small !important; color : rgb(173, 170, 170) !important; margin-top: 5px !important; float: right !important; color : #000">CGPA/Percentage : ${percentageC}</span>
					</div>
					<div style="padding: 0 0 2px 10px !important;">
						<h3>${schoolName}</h3>
						<h4>${courseNameSchool}</h4>
						<span style="font-size: x-small !important; color : rgb(173, 170, 170) !important; margin-top: 5px !important;">${startDateS} - ${endDateS}</span>
						<span style="font-size: x-small !important; color : rgb(173, 170, 170) !important; margin-top: 5px !important; float: right !important; color : #000">CGPA/Percentage : ${percentageS}</span>
					</div>
					<div style="padding: 0 0 2px 10px !important;">
						<h3>${schoolName2}</h3>
						<h4>${courseNameSchool2}</h4>
						<span style="font-size: x-small !important; color : rgb(173, 170, 170) !important; margin-top: 5px !important;">${startDateS2} - ${endDateS2}</span>
						<span style="font-size: x-small !important; color : rgb(173, 170, 170) !important; margin-top: 5px !important; float: right !important; color : #000"><b>CGPA/Percentage : ${percentageS2}</b></span>
					</div>
			  	</div>
			  	<div class="col-xs-6" style="margin-top: 2px !important;">
					<h2>Work Experience</h2>
					<div style="padding: 0 0 2px 10px !important;">
						<h3>${company1}</h3>
						<p style="font-size: x-small !important; color : rgb(173, 170, 170) !important;">${startDateC1} - ${endDateC1}</p>
						<p style="margin-left: 15px !important;">${bioCompany1}</p>
					</div>`
					if(company2 !== ''){
						htmlTemplate += `<div style="padding: 0 0 2px 10px !important;">
											<h3>${company2}</h3>
											<p style="font-size: x-small !important; color : rgb(173, 170, 170) !important;">${startDateC2} - ${endDateC2}</p>
											<p style="margin-left: 15px !important;">${bioCompany2}</p>
										</div>`
					}
					htmlTemplate += `</div>
			</div>
			<div class="row justify-content-start">
				<div class="col-xs-6" style="margin-top: 2px !important;">
					<h2>Personal Projects</h2>
					<div style="padding: 0 0 2px 10px !important;">
						<h3>${project1}</h3>
						<span style="font-size: x-small !important; color : rgb(173, 170, 170) !important;">${startDateP1} - ${endDateP1}</span>
						<span style="font-size: x-small !important; float: right !important;"><a style="text-decoration: none !important; color: grey !important; font-style: italic !important;">${link1}</a></span>
						<p style="margin-left: 15px !important;">${bioP1}</p>
					</div>`
					if(project2 !== ''){
						htmlTemplate += `<div style="padding: 0 0 2px 10px !important;">
											<h3>${project2}</h3>
											<span style="font-size: x-small !important; color : rgb(173, 170, 170) !important;">${startDateP2} - ${endDateP2}</span>
											<span style="font-size: x-small !important; float: right !important;"><a style="text-decoration: none !important; color: grey !important; font-style: italic !important;">${link2}</a></span>
											<p style="margin-left: 15px !important;">${bioP2}</p>
										</div>`
					}
					htmlTemplate += `</div>
			  	<div class="col-xs-6" style="margin-top: 2px !important;">
					<h2>Skills</h2>
					<div style="padding: 5px 0 5px 10px !important;">
						<div style="display: flex !important; justify-content: flex-start  !important; align-items: center !important;">`
						if(skill1 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${skill1}</button>`
						}
						if(skill2 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${skill2}</button>`
						}
						if(skill3 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${skill3}</button>`
						}
						htmlTemplate += `</div>
						<div style="margin-top: 5px !important; display: flex !important; justify-content: flex-start  !important; align-items: center !important;">`
						if(skill4 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${skill4}</button>`
						}
						if(skill5 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${skill5}</button>`
						}
						if(skill6 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${skill6}</button>`
						}
						htmlTemplate += `</div>
					</div>
					<h2>Languages</h2>
					<div style="padding: 5px 0 5px 10px !important;">
						<div style="display: flex !important; justify-content: flex-start  !important; align-items: center !important;">`
						if(language1 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${language1}</button>`;
						}
						if(language2 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${language1}</button>`;
						}
						if(language3 !== ''){
							htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${language3}</button>`;
						}
						htmlTemplate += `</div>
					</div>`
					if(interest_number !== 0){
						htmlTemplate += `<h2>Interests</h2>
						<div style="padding: 5px 0 5px 10px !important;">
							<div style="display: flex !important; justify-content: flex-start  !important; align-items: center !important;">`
								if(interest1 !== ''){
									htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${interest1}</button>`
								}
								if(interest2 !== ''){
								  htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${interest2}</button>`
							  }
							  if(interest3 !== ''){
								  htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${interest3}</button>`
							  }
							  if(interest4 !== ''){
								  htmlTemplate += `<button style="border-radius: 10px !important; border: solid 1px black !important; padding: 3px 5px 3px 5px !important; margin : 0 15px 0 15px !important; font-size: x-small !important;">${interest4}</button>`
							  }
						  htmlTemplate += `</div>
						</div>`
					}
			  	htmlTemplate += `</div>
		  	</div>
			  <div class="row justify-content-start">`
			  if(achievement_number !== 0){
				  htmlTemplate += `<div class="col-xs-6" style="margin-top: 2px !important;">
				  <h2>Achievements</h2>
				  <div style="padding: 5px 0 5px 10px !important;">
					  <ul>`
					  	if(achievement1 !== ''){
							htmlTemplate += `<li><p style="margin: 0 !important;">${achievement1}</p></li>
							<a style="text-decoration: none !important; font-size: x-small !important; color: grey !important; font-style: italic !important;">${linkAch1}</a>`
						}
						if(achievement2 !== ''){
							htmlTemplate += `<li><p style="margin: 0 !important;">${achievement2}</p></li>
							<a style="text-decoration: none !important; font-size: x-small !important; color: grey !important; font-style: italic !important;">${linkAch2}</a>`
						}
						if(achievement3 !== ''){
							htmlTemplate += `<li><p style="margin: 0 !important;">${achievement3}</p></li>
							<a style="text-decoration: none !important; font-size: x-small !important; color: grey !important; font-style: italic !important;">${linkAch3}</a>`
						}
						if(achievement4 !== ''){
							htmlTemplate += `<li><p style="margin: 0 !important;">${achievement4}</p></li>
							<a style="text-decoration: none !important; font-size: x-small !important; color: grey !important; font-style: italic !important;">${linkAch4}</a>`
						}
					  htmlTemplate += `</ul> 
				  </div>
				</div>`
			  }
			  	htmlTemplate += `<div class="col-xs-6" style="margin-top: 2px !important;">`
				  if(certificate_number !== 0){
					  htmlTemplate += `<h2>Certifications</h2>
					  <div style="padding: 5px 0 5px 10px !important;">
						  <ul>`
						  if(certificate1 !== ''){
							  htmlTemplate += `<li><p style="margin: 0 !important;">${certificate1}</p></li>`
							  if(linkcert1 !== ''){
							  	htmlTemplate += `<a style="text-decoration: none !important; font-size: x-small !important; color: grey !important; font-style: italic !important;">${linkcert1}</a>`
							  }
						}
						  if(certificate2 !== ''){
							htmlTemplate += `<li><p style="margin: 0 !important;">${certificate2}</p></li>`
							if(linkcert2 !== ''){
								htmlTemplate += `<a style="text-decoration: none !important; font-size: x-small !important; color: grey !important; font-style: italic !important;">${linkcert2}</a>`
							}
						}
						htmlTemplate +=`</ul> 
					  </div>`
				  }
			  	htmlTemplate += `</div>
		  	</div>
		</div>

    </div>
	</body>
    </html>
    `;
    return htmlTemplate;
};

