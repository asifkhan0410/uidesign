const navbarList = document.querySelectorAll('.navigation__listitem');
const navbarListBody = document.querySelectorAll('.body')
let activepanel,activebody,currentactivebody;
      
    function toggleTab(){
        activepanel= document.querySelector('.navigation__listitem.active');
        activebody= document.querySelector('.body.activebody');
        currentactivebody = document.querySelector(`.body.${this.classList[1]}`);
        currentactivebody.classList.add('activebody');
        activebody.classList.remove('activebody')
        
          if(!activepanel && !activebody){
            this.classList.add('active');
            //currentactivebody.classList.add('activebody');
          }else if(activepanel===this && activebody===currentactivebody){
            this.classList.add("active");
            //currentactivebody.classList.add('activebody');
          }else{
            this.classList.add("active");
            activepanel.classList.remove('active') ;
            //activepanel.classList.remove('activebody')
            //currentactivebody.classList.remove('activebody');
          }
      }

navbarList.forEach(nl => nl.addEventListener('click', toggleTab));