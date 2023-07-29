
let slidecount=1;

function movetoslide(slidenumber)
{
 let margin=slidenumber*100;
 document.querySelector(".slider").style.transition=".5s";
 document.querySelector(".slider").style.marginLeft=-margin+"%";
 
 if(slidenumber==5)
    {
        slidecount=1;
        setTimeout(function()
        {
            document.querySelector(".slider").style.transition="0s";
            document.querySelector(".slider").style.marginLeft="-100%";
            
        },500)
        
    }
 
 if(slidenumber==0)
    {
        slidecount=4;
        setTimeout(function()
        {
            document.querySelector(".slider").style.transition="0s";
            document.querySelector(".slider").style.marginLeft="-400%";
        }
        )
    }

}

function nextslide()
{
    slidecount++;
    movetoslide(slidecount);
    
    
    
    
}

function prevslide()
{
    slidecount--;
    movetoslide(slidecount)

    
}