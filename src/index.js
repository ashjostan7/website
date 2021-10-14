// Importing the CSS files:
import "./style/style.css";
import "./style/projects.css";
import $ from "jquery";
import 'slick-carousel';



import {data,resume_data} from "./javascript/projects_data"
function loadProjects(){ 

    var category="";
    for (var i = 0; i <data.projects.length; i++) 
    {
        var {project_id,date,heading,tags,description,image_link,awards,is_report,report_link,is_code,code_link,is_video,video_link}=data.projects[i];
        
        //Creating the tags for each project card
        var tag_list="";
        var tag_array=[];
        for (var j=0; j<tags.length;j++)
        {
            tag_array.push(tags[j]);
            if(j!=tags.length-1)
                {
                    tag_list=tag_list+' '+tags[j]+' | '
                }
            else
            {
                tag_list=tag_list+''+tags[j]+''
            }
        }
        // if(tag_array.includes(category))
        {
            var section2 ='<div class="project_date">'+date+'</div><div class="project_header"><h3>'+heading+'</h3><div class="project_tags"><p>'+tag_list+'</p></div>';
            var section1='<img src='+image_link+'>';
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
        
            $('<div class="project_card">'+section1+'<div class="project_description">'+section2+'<div class=project_report>'+section3+'</div></div></div>').appendTo(".project_section");
        }
    }
    
 }
$(document).ready(function () {
    loadProjects();
})

function load_resume(){
    console.log("here");
    var link=resume_data.link;
    $(".resume_link").append('<a  href='+ link + ' target="blank" download><button class="resume">Download my resume</button></a>')
}
$(document).ready(function () {
    load_resume();
    console.log("ready");
})

