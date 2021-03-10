const navbarList = document.querySelectorAll('.navigation__listitem');
const navbarListBody = document.querySelectorAll('.body');
const Body = document.querySelector('.navigation__body');
const fitlerActive = document.querySelectorAll('.filteractive');
const popularListings = document.querySelector('.popularlistings');
const filteredListings = document.querySelector('.filtered');
const imagesListing1 = popularListings.querySelectorAll('img');
const imagesListing2 = filteredListings.querySelectorAll('img');
const signInButton = document.querySelector('.loginsignup');
const signUpBox = document.querySelector('.signupdialogbox');
const passwordBox = document.querySelector('.forgetpassword');
const signInLink = document.querySelector('.signinbutton');
const signUpLink = document.querySelectorAll('.signupbutton');
const forgetpasswordLink = document.querySelector('.forgetpasswordlink');
const signInBox = document.querySelector('.signindialogbox');
const ExpandBox = document.querySelector('.expansion');
const ExpandBoxCloseButton = document.querySelector('.imagesectiontop');
const ExpandBoxExpandButton = document.querySelector('.imagesectionbottom2');
const ImageExpand =document.querySelector('.imagexpand');
const ImageExpandClose = document.querySelector('.imagexpandtop');

const searchListingImages = document.querySelectorAll('img');

let activepanel,activebody,currentactivebody,filteractive,imageactive, filteredimageactive,togglesignin=false,searchimageactive;
      
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
          }else if(activepanel===this && activebody===currentactivebody){
            this.classList.add("active");
          }else{
            this.classList.add("active");
            activepanel.classList.remove('active') ;
          }
      }

      function toggleClick(){
          filteractive = document.querySelector('.filteractive.clicked');
          if(!filteractive || filteractive===this){
              this.style.backgroundColor='#85BEE4';
              this.classList.add('clicked');
          }else{
            this.style.backgroundColor='#85BEE4';
            this.classList.add('clicked');
            filteractive.style.backgroundColor='#F9F5F5';
            filteractive.classList.remove('clicked');
          }
      }
      function toggleBorder(){
          imageactive = document.querySelector('.imageactive');
          if(!imageactive || imageactive===this){
              this.classList.add('imageactive');
          }else{
              this.classList.add('imageactive');
              imageactive.classList.remove('imageactive')
          }
      }

      function toggleBorderFilter(){
        filteredimageactive = document.querySelector('.filterimageactive');
        if(!filteredimageactive || filteredimageactive===this){
            this.classList.add('filterimageactive');
        }else{
            this.classList.add('filterimageactive');
            filteredimageactive.classList.remove('filterimageactive')
        }
    }

    function toggleExpand(){
        searchimageactive = document.querySelector('.searchimageactive');
        if(!searchimageactive || searchimageactive===this){
            this.classList.add('searchimageactive');
            ExpandBox.style.display='flex';
        }else{
            ExpandBox.style.display='flex';
            this.classList.add('searchimageactive');
            searchimageactive.classList.remove('searchimageactive');
        }
    }


navbarList.forEach(nl => nl.addEventListener('click', toggleTab));
fitlerActive.forEach(fa => fa.addEventListener('click', toggleClick));
imagesListing1.forEach(iml => iml.addEventListener('click', toggleBorder));
imagesListing2.forEach(iml => iml.addEventListener('click', toggleBorderFilter));
signInButton.addEventListener('click', ()=>{
    if(!togglesignin) signUpBox.style.display = 'flex';
    else{
        signUpBox.style.display = 'none';
        signInBox.style.display='none';
        passwordBox.style.display= 'none'
    }
    togglesignin=!togglesignin;    
});

forgetpasswordLink.addEventListener('click', ()=>{
    signInBox.style.display='none';
    passwordBox.style.display='flex'
})

signInLink.addEventListener('click', ()=>{
    signInBox.style.display='flex';
    signUpBox.style.display='none'
});
signUpLink.forEach(sign => sign.addEventListener('click', ()=>{
    signInBox.style.display='none';
    passwordBox.style.display= 'none'
    signUpBox.style.display='flex';
}));

searchListingImages.forEach(sil => sil.addEventListener('click', toggleExpand));
ExpandBoxCloseButton.addEventListener('click', ()=>{
    ExpandBox.style.display="none";
    searchimageactive.classList.remove('searchimageactive')
});

ExpandBoxExpandButton.addEventListener('click',()=>{
    ImageExpand.style.display='flex';
});
ImageExpandClose.addEventListener('click', ()=>{
    ImageExpand.style.display='none'
})