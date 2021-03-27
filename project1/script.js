const navbarList = document.querySelectorAll('.navigation__listitem');
const Navbar = document.querySelector('.navigation');
const FullBody = document.querySelector('body');
const navbarListBody = document.querySelectorAll('.body');
const Body = document.querySelector('.navigation__body');
const fitlerActive = document.querySelectorAll('.filteractive');
const popularListings = document.querySelector('.popularlistings');
const filteredListings = document.querySelector('.filtered');
const SearchHeader = document.querySelector('.searcheader')
const imagesListing1 = popularListings.querySelectorAll('.singleimage img');
const imagesListing2 = filteredListings.querySelectorAll('.singleimage img');
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

const searchListing = document.querySelector('.searchlistings');

const searchListingImages = searchListing.querySelectorAll('.singleimage');
const OpenSearch = document.querySelector('.searchresultsoptions__rightcardsearch');
const OpenSearchBox = document.querySelector('.searchresultsoptions__rightcard.selectopensearch');
const CloseOpenSearchBox = document.querySelector('.fullsearchtopafter');

const a = document.querySelectorAll('.searchresultsoptions__rightcardimg');

const SearchResultsOptionRight = document.querySelectorAll('.searchresultsoptions__right');
const SearchResultsOption = document.querySelector('.searchresultoptions');
const SearchOptionsContainer = document.querySelector('.searchoptionscontainer');
const SavedResultsOption = document.querySelector('.savedresultoptions');

const SearchResultsOptionRightCard = document.querySelectorAll('.searchresultsoptions__rightcard');
const SearchResultsOptionRightToggle = document.querySelector('.togglesearchbefore');

const toggleCloseSearch = document.querySelector('.closesearchresults');
const toggleOpenSearch = document.querySelector('.opensearchresults');

const SearchOptions = document.querySelectorAll('.searchoptions button');
const fullSearchBottom = document.querySelector('.fullsearchbottom');
const Pencil= document.querySelector('.fullsearchbottom .pencil');

const filtersList = document.querySelector('.filters');
const filtersLeftBtn = document.querySelector('.filtersleft');
const filtersRightBtn = document.querySelector('.filterright');

const selectFiles= document.querySelectorAll('.body button');
const selectFilesBody= document.querySelector('.select__files');
const Search = document.querySelector('.search')


let activepanel,activebody,currentactivebody,filteractive,imageactive, filteredimageactive,togglesignin=false,searchimageactive,togglesearchright=false, togglesearchoption, toggleclosesearch = false, penciltoggle=true;

function fixNav() {
    if (window.scrollY >= 20) {
        Navbar.style.width = `${Navbar.offsetWidth}px`;
        SearchOptionsContainer.style.width = `${Navbar.offsetWidth}px`;
        SearchOptionsContainer.style.top = `${SearchOptionsContainer.offsetTop - Navbar.offsetTop}px`;
        SearchHeader.style.top = `${Navbar.offsetHeight + Navbar.offsetTop}px`
      document.body.style.paddingTop = SearchOptionsContainer.offsetHeight + 'px'; //this adds a padding by calculating the height of the nav as when an element gets sticky the space it acquires gets vanished so the below elemts gets pushed up.
      document.body.classList.add('fixed-nav'); //adding a class to body helps in using it throughout the body elemets
    } else{
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }

  
      
    function toggleTab(){
        activepanel= document.querySelector('.navigation__listitem.active');
        //activebody= document.querySelector('.body.active');
        //currentactivebody = document.querySelector(`.body.${this.classList[1]}`);
        Search.style.display='none';
        Body.style.display='flex';
        selectFilesBody.style.display='none'
        //currentactivebody.classList.add('activebody');
        //console.log(this.classList)
        if(this.classList[1]==='item4'||this.classList[1]==='item5'){
            Body.style.backgroundColor = 'white';
            Body.style.border='none';
            if(window.screen.width<415){
                filtersLeftBtn.style.display="none";
                filtersRightBtn.style.display="none";
            }else{
                filtersList.scrollBy(`-${filtersList.offsetWidth}`,0); 
                filtersLeftBtn.style.display="none";
                filtersRightBtn.style.display="flex";
            }
        }else{
            Body.style.background = 'rgb(239 235 235 / 30%) 0% 0% no-repeat padding-box';
            Body.style.border='2px dashed rgb(1 35 69 / 30%)'
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
        fullSearchBottom.innerHTML = '<img src="./images/stop-regular.svg" alt="" style="border-right: 1px solid #C5C3BC;"/><input type="text" placeholder="Type in search label"/><img src="./images/trash-alt-regular2.svg" alt="" style="border-left: 1px solid #C5C3BC;"/><img src="./images/cloud-download-regular.svg" alt="" style="border-left: 1px solid #C5C3BC;"/><img src="./images/share-alt-duotone.svg" alt="" style="border-left: 1px solid #C5C3BC;"/>'
        if(!searchimageactive || searchimageactive===this){
            this.classList.add('searchimageactive');
            searchListing.style.width=`${window.screen.width>415?"66.8%":"50%"}`;
            searchListing.style.marginRight='4px'
            searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"16%":"100%"}`);
            ExpandBox.style.display='flex';            
        }else{
            ExpandBox.style.display='flex';
            searchListing.style.width=`${window.screen.width>415?"66.8%":"50%"}`;
            searchListing.style.marginRight='4px'
            searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"16%":"100%"}`);
            this.classList.add('searchimageactive');
            searchimageactive.classList.remove('searchimageactive');
        }
    }
    function toggleSearchRight(){
        if(!togglesearchright){
            SearchResultsOptionRightCard.forEach(sror => sror.style.display='none');SearchResultsOptionRightToggle.innerHTML="- Open Search Results";
            SearchResultsOptionRight.forEach(sror => sror.style.backgroundColor='white');
         }else{
             SearchResultsOptionRightCard.forEach(sror => sror.style.display='flex'); SearchResultsOptionRightToggle.innerHTML="- Close Search Results";
            SearchResultsOptionRight.forEach(sror => sror.style.backgroundColor='white');

         }
        togglesearchright=!togglesearchright;
    }

    function toggleSearchOption(){

        togglesearchoption = document.querySelector('.search-active');

        if(!togglesearchoption || togglesearchoption===this){
            this.classList.add('search-active');
            // SearchResultsOption.style.display
        }else{
            this.classList.add('search-active');
            togglesearchoption.classList.remove('search-active');
        }

        if(this.classList[0]==='searchresults') {
            SearchResultsOption.style.display='flex';
            SavedResultsOption.style.display='none';
        }
        else {SearchResultsOption.style.display='none';
        toggleOpenSearch.style.display='none';
        SavedResultsOption.style.display='flex';        
    }
    }

    function pencilToggle(){
        console.log(Pencil)

        if(!penciltoggle){
            fullSearchBottom.innerHTML = '<img class="pencil" src="./images/pencil-alt-regular.svg" alt="" style="border-right: 1px solid #C5C3BC;"/><input type="text" placeholder="Type in search label"/><img src="./images/save-regular.svg" alt="" style="border-left: 1px solid #C5C3BC;"/>';
        }else {
            fullSearchBottom.innerHTML='<img class="pencil" src="./images/pencil-alt-regular.svg" alt="" style="border-right: 1px solid #C5C3BC;"/><h4>Marry Turner</h4><img src="./images/trash-alt-regular2.svg" alt="" style="border-left: 1px solid #C5C3BC;"/><img src="./images/cloud-download-regular.svg" alt="" style="border-left: 1px solid #C5C3BC;"/><img src="./images/share-alt-duotone.svg" alt="" style="border-left: 1px solid #C5C3BC;"/>'
        }    
        penciltoggle=!penciltoggle;
    }
    let lastactivesearch,parent,parent2;

    function addSearch(e){
        lastactivesearch= document.querySelector('searchresultsoptions__rightcardimg.active'); 
        if(lastactivesearch!==this && parent){
            parent.style.display="flex";
        }
        console.log(e.path[1].className);
        if(!lastactivesearch || lastactivesearch===this){
            this.classList.add('active');
            parent = this.parentNode;
            parent2= parent.parentNode;
            parent.style.display="none";
            parent2.insertBefore(OpenSearchBox, parent.nextSibling)
            OpenSearchBox.style.display="flex";            
        }
        else{
            this.classList.add('active');
            lastactivesearch.classList.remove('active');
        }  
    }


navbarList.forEach(nl => nl.addEventListener('click', toggleTab));
fitlerActive.forEach(fa => fa.addEventListener('click', toggleClick));
imagesListing1.forEach(iml => iml.addEventListener('click', toggleBorder));
imagesListing2.forEach(iml => iml.addEventListener('click', toggleBorderFilter));
signInButton.addEventListener('click', ()=>{
    signUpBox.style.display = 'flex';
    signInBox.style.display='none';
    passwordBox.style.display= 'none' 
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
    passwordBox.style.display= 'none';
    signUpBox.style.display='flex';
}));

searchListingImages.forEach(sil => sil.addEventListener('click', toggleExpand));
ExpandBoxCloseButton.addEventListener('click', ()=>{
    ExpandBox.style.display="none";
    searchListing.style.width="100%";
    searchListing.style.marginRight='0px'
    searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"16%":"47%"}`);
    searchimageactive.classList.remove('searchimageactive');
    fullSearchBottom.innerHTML = '<img class="pencil" src="./images/pencil-alt-regular.svg" alt="" style="border-right: 1px solid #C5C3BC;"/><input type="text" placeholder="Type in search label"/><img src="./images/save-regular.svg" alt="" style="border-left: 1px solid #C5C3BC;"/>';
});

ExpandBoxExpandButton.addEventListener('click',()=>{
    ImageExpand.style.display='flex';
    window.scroll="none"
});
ImageExpandClose.addEventListener('click', ()=>{ 
    ImageExpand.style.display='none'
});

SearchResultsOptionRightToggle.addEventListener('click', toggleSearchRight);

SearchOptions.forEach(so => so.addEventListener('click', toggleSearchOption));
toggleCloseSearch.addEventListener('click',()=>{
    SearchResultsOption.style.display='none';
    toggleOpenSearch.style.display='flex';
})

toggleOpenSearch.addEventListener('click', ()=>{
    SearchResultsOption.style.display='flex';
    toggleOpenSearch.style.display='none';
})

Pencil.addEventListener('click', pencilToggle);

filtersRightBtn.addEventListener('click',()=>{
    filtersList.scrollBy(`${filtersList.offsetWidth}`,0); 
    filtersLeftBtn.style.display='flex';
    filtersRightBtn.style.display='none';
});

filtersLeftBtn.addEventListener('click',()=>{
    filtersList.scrollBy(`-${filtersList.offsetWidth}`,0);
    filtersLeftBtn.style.display='none';
    filtersRightBtn.style.display='flex';
});

selectFiles.forEach(sf => sf.addEventListener('click', ()=>{
    Body.style.display ='none'
    selectFilesBody.style.display='flex';
}))
selectFilesBody.addEventListener('click', ()=>{
    Search.style.display="flex";
    selectFilesBody.style.display = 'none'
});

window.addEventListener('scroll', fixNav);
OpenSearch.addEventListener('click', ()=>{
    parent = OpenSearch.parentNode;
    parent2= parent.parentNode;
    //console.log(parent.parentNode);
    parent.style.display = "none";
    parent2.insertBefore(OpenSearchBox, parent.nextSibling)
    OpenSearchBox.style.display="flex";
})
CloseOpenSearchBox.addEventListener('click', ()=>{
    OpenSearchBox.style.display='none';
    parent.style.display="flex";
})

a.forEach(aa=> aa.addEventListener('click',addSearch));


