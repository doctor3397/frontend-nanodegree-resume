/****************************/
/**         bio            **/
/****************************/

var bio = {
    "name": "theresa shen",
    "role": "Software Project Manager",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "theresa_shen@columbia.edu",
        "github": "doctor3397",
        "twitter": "@Theresa.Shen",
        "location": "NYC"
    },
    "welcomeMessage": "Hello Everyone! This is the resume for Theresa Shen. ",
    "skills": ["PMP", "Project Management", "Frontend Web developement", "Android developement"],
    "biopic":"images/me.jpg"   
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole); 
$("#header").prepend(formattedName); 
$("#header").append(formattedPic);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for( skill in bio.skills){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);   
    }
    //    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    //    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);  
    //    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);   
    //    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    //    $("#skills").append(formattedSkill);    
}

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);


/* Internationalize Names  */
function inName(name){
    var names = name.trim().split(" ");   
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase(); 
    return names.join(" ");  
} 

$("#main").append(internationalizeButton); 


/****************************/
/**       education        **/
/****************************/

/* Object Literal Notation(JSON) */
var education = {
    "schools": [
        {
            "name": "Columbia University",
            "location": "NYC, NY", 
            "dates": "2009 - 2010",
            "degree": "Masters",
            "majors": ["EE"],
            "url": "http://www.nsysu.edu.tw/"
        },

        {
            "name": "National Sun Yat-Sen University",
            "location": "Kaohsiung, Taiwan", 
            "dates": "2004 - 2008",
            "degree": "Bachelor of Science",
            "majors": ["EE"],
            "url": "http://www.columbia.edu/"
        }
    ],

    "onlineCourses":[
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://classroom.udacity.com/courses/ud804/"
        }
    ]
}


function displayEducation(){
    if(education.schools.length > 0) {
        for ( school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedName + formattedDegree); 

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates); 
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);  
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor); 
        }
    }
    if(education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for( course in education.onlineCourses) {				
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
}
displayEducation(); 


/****************************/
/**        work            **/
/****************************/

var work = {
    "jobs": [
        {   
            "employer": "HTC Corporation",
            "title": "Software Project Manager",
            "location": "Taipei, Taiwan",
            "dates": "September 2013 – April 2015", 
            "description": "Led cross-functional teams in the design and development of several HTC smart phones from conception through completion, including HTC One Max, HTC Desire 626, 320 and 310."
        },
        {
            "employer": "Inventec Appliances Corporation",
            "title": "Software Project Manager",
            "location": "Taipei, Taiwan",
            "dates": "March 2012 – June 2013",
            "description" : "Led engineering teams in the development of the TC55 Motorola enterprise smart phone."
        }
    ]
}

function displayWork(){

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle; 
        $(".work-entry:last").append(formattedEmployerTitle); 

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates); 

        var formattedDecripstion = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDecripstion); 
    }
}
displayWork(); 


/****************************/
/**      projects          **/
/****************************/

var projects = {
    "projects":[
        {
            "title": "HTC One Max, HTC Desire 626, 320 and 310", 
            "dates": "March 2012 – June 2013",
            "description": "HTC smartphones",
            "images":[
                "http://www.htc.com/managed-assets/shared/desktop/smartphones/htc-one-max/en_US/marquee/htc-one-max-en_US-slide-04.png",
                "http://www.htc.com/managed-assets/shared/desktop/smartphones/htc-desire-626/en-us/vzn/sketchfab/htc-desire-626-en_us-vzn-white-birch-sketchfab.png",
                "http://www.htc.com/managed-assets/shared/desktop/smartphones/htc-desire-320/fr_CA/htc-desire-320-sketchfab.png",
                "http://www.htc.com/managed-assets/shared/desktop/smartphones/htc-desire-310/marquee/htc-desire-310-en-slide-01.png"
            ] 
        },
        {
            "title": "TC55 Motorola", 
            "dates":  "March 2012 – June 2013",
            "description": "Motorola enterprise smart phone",
            "images":[
                "https://www.zebra.com/content/zebra1/us/en/products/mobile-computers/handheld/TC55/jcr:content/mainpar/herocarousel_ccb0/carouselItems/herocarouselitem_a31/largeImage.adapt.1024.png"
            ] 
        }
    ]
}


/* Encapsulation */
projects.display = function() {
    for (project in projects.projects ){
        $("#projects").append(HTMLprojectStart); 

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle); 
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates); 
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription); 

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]); 
                $(".project-entry:last").append(formattedImage);               
            }
        }   
    } 
}
projects.display(); 

///* Dot. Notation */
//var work = {}; 
//work.position = "SWPM"; 
//work.employer = "HTC"; 
//work.years = "2013-2015";  
//work.city = "Taipei Taiwan"; 
//
///* Bracket Notation */
//var education = {}
//education["name"] = "Columbia University"; 
//education["years"] = "2009 - 2010"; 
//education["city"] = "NYC, NY"; 
//
//$("#main").append(work["position"]); 
//$("#main").append(education.name); 


/****************************/
/**          map           **/
/****************************/
$("#mapDiv").append(googleMap); 