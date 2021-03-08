const navbarList = document.querySelectorAll('.navigation__listitem');
let activepanel;
      
    function toggleTab(){
        activepanel= document.querySelector('.navigation__listitem.active');
          if(!activepanel){
              this.classList.add('active');
          }else if(activepanel===this){
            this.classList.add("active");
          }else{
            this.classList.add("active");
            activepanel.classList.remove('active') 
          }
      }

navbarList.forEach(nl => nl.addEventListener('click', toggleTab));