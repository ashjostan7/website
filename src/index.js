// Importing the CSS files:
import "./style/style.css";
import "./style/projects.css";
import $ from "jquery";
import 'slick-carousel';



import {data} from "./javascript/projects_data"
function loadProjects(){ 

    var category="";
    for (var i = 0; i <data.projects.length; i++) {
        var {project_id,date,heading,tags,description,image_link,awards,is_report,report_link,is_code,code_link,is_video,video_link}=data.projects[i];
        
        //Creating the tags for each project card
        var tag_list="";
        var tag_array=[];
        for (var j=0; j<tags.length;j++)
        {
            tag_array.push(tags[j]);
            tag_list=tag_list+'<p>'+tags[j]+'</p>'
        }
        // if(tag_array.includes(category))
        {
            var section1 ='<div class="project_date">'+date+'</div><div class="project_header"><h5>'+heading+'</h5><div class="project_tags">'+tag_list+'</div>';
            var section2='<img src='+image_link+'><p>'+description+'</p>';
            var section3='';
            if (is_report=="1"){
                section3='<div><a href='+report_link+' target="blank">Read Report</a></div>'
            }
            if (is_code=="1"){
                section3=section3+'<div><a href='+code_link+'target="blank">View Code</a></div>'
            }
            if (is_video=="1"){
                section3=section3+'<div><a href='+video_link+'target="_blank">View Video</a></div>'
            }
        
            $('<div class="project_card">'+section1+'<div class="description">'+section2+'</div> <div class=report>'+section3+'</div></div>').appendTo(".project_section");
        }
    }

    $('.project_section').slick({
        // centerMode: true,
        // centerPadding: '60px',
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: 
        [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots:true
            }
            },
            {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true
            }
            }
        ]
      });
    
}
$(document).ready(function () {
    loadProjects();
})

