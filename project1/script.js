const navbarList = document.querySelectorAll('.navigation__listitem');
const navbarListBody = document.querySelectorAll('.body');
const Body = document.querySelector('.navigation__body');
const fitlerActive = document.querySelectorAll('.filteractive');
let activepanel,activebody,currentactivebody,filteractive;
      
    function toggleTab(){
        activepanel= document.querySelector('.navigation__listitem.active');
        activebody= document.querySelector('.body.activebody');
        currentactivebody = document.querySelector(`.body.${this.classList[1]}`);
        currentactivebody.classList.add('activebody');
        activebody.classList.remove('activebody');
        if(this.classList[1]==='item4'||this.classList[1]==='item5'){
            Body.style.backgroundColor = 'white';
            Body.style.border='none'
        }else{
            Body.style.background = 'rgb(239 235 235 / 30%) 0% 0% no-repeat padding-box';
            Body.style.border='2px dashed rgb(1 35 69 / 30%)'
        }
        
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

      function toggleClick(){
          filteractive = document.querySelector('.filteractive.clicked');
          if(!filteractive){
              this.style.backgroundColor='#85BEE4';
              this.classList.add('clicked');
          }else if(filteractive===this){
            this.style.backgroundColor='#85BEE4';
            this.classList.add('clicked');
          }else{
            this.style.backgroundColor='#85BEE4';
            this.classList.add('clicked');
            filteractive.style.backgroundColor='#F9F5F5';
            filteractive.classList.remove('clicked');
          }
      }

navbarList.forEach(nl => nl.addEventListener('click', toggleTab));
fitlerActive.forEach(fa => fa.addEventListener('click', toggleClick));