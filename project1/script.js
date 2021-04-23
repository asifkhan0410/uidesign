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
const SearchButton = document.querySelector('.search-btn');
const CloseButton = document.querySelector('.close-btn');
const SearchOpen = document.querySelector('.open-search-cross');
const NavRight = document.querySelector('.nav-right');
const NavLeft = document.querySelector('.navigation__list');
const OptionNavbrButton = document.querySelector('.option-btn');
const Dropdown3 = document.querySelector('.dropdown__content3');
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
const OpenSearch = document.querySelector('.searchresultsoptions__rightcard.newsearch');
const OpenSearchBox = document.querySelector('.searchresultsoptions__rightcard.selectopensearch');
//const CloseOpenSearchBox = document.querySelector('.fullsearchtopafter');

const a = document.querySelectorAll('.searchresultsoptions__rightcardimg');

//const SearchResultsOptionRight = document.querySelectorAll('.searchresultsoptions__right');
const SearchResultsOption = document.querySelector('.searchresultoptions');
const SearchOptionsContainer = document.querySelector('.searchoptionscontainer');
const SavedResultsOption = document.querySelector('.savedresultoptions');
const SavedSearchOption = document.querySelector('.savedsearchoptions');

//const SearchResultsOptionRightCard = document.querySelectorAll('.searchresultsoptions__rightcard');
const SearchResultsOptionRightToggle = document.querySelector('.togglesearchbefore');

const toggleCloseSearch = document.querySelector('.closesearchresults');
const toggleOpenSearch = document.querySelector('.opensearchresults');

const SearchOptions = document.querySelectorAll('.searchoptions button');
const dropdown1 = document.querySelector('.fullsearchtopinfoheader__dropdown');
const dropdown2 = document.querySelectorAll('.savedsearchoptions__carddropdown');
const dropdownContent = document.querySelector('.dropdown__content');
//const dropdownContent2 = document.querySelectorAll('.dropdown__content2');
const dropdown1ContentC1 = document.querySelector('.dropdown__content .c1');
const dropdown1ContentC2 = document.querySelector('.dropdown__content .c2');
const dropdown1ContentC3 = document.querySelector('.dropdown__content .c3');
const dropdown1ContentC4 = document.querySelector('.dropdown__content .c4');
const fullSearchBottom = document.querySelector('.fullsearchbottom');
const fullSearchBottom2 = document.querySelector('.fullsearchbottom2');
const Pencil= document.querySelector('.fullsearchbottom .pencil');

const filtersList = document.querySelector('.filters');
const filtersLeftBtn = document.querySelector('.filtersleft');
const filtersRightBtn = document.querySelector('.filterright');

const SavedSearchList = document.querySelector('.savedsearchoptions');
const SavedSearchLeftBtn = document.querySelector('.ssfiltersleft');
const SavedSearchRightBtn = document.querySelector('.ssfilterright');

const selectFiles= document.querySelectorAll('.body button');
const selectFilesBody= document.querySelector('.select__files');
const Search = document.querySelector('.search');
const savedResultbutton = document.querySelector('.savedresults');
const searchResultbutton = document.querySelector('.searchresults');
const seeListings = document.querySelector('#seelistingdetails');

const addMaps = document.querySelector('.maps');
const addMapsContainer = document.querySelector('.mapscontainer');

const fsSearch1 = document.querySelector('.fs-nav-1');
const fsSearch2 = document.querySelector('#helpme');
const fsSearch3 = document.querySelector('#myself');
const fsSearch4 = document.querySelector('.fs-content-1');
const fsSearch5 = document.querySelector('.fs-content-1-next');
const fsSearch6 = document.querySelector('.openss2');
const fsSearch7 = document.querySelector('.fs-content-2');
const fsSearch9 = document.querySelector('.fs-content-2-btn');
const fsSearch8 = document.querySelector('.fs-content-3');
const nxtBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');
const b1 = document.querySelector('.fs-content-31');
const b2 = document.querySelector('.fs-content-32');
const b3 = document.querySelector('.fs-content-33');
const b4 = document.querySelector('.fs-content-34');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const adnav = document.querySelector('.additional-nav');


var mymap = L.map('mapid').setView([51.505, -0.09], 13);

let activepanel,activebody,currentactivebody,filteractive,imageactive, filteredimageactive,togglesignin=false,searchimageactive,togglesearchright=false, togglesearchoption, toggleclosesearch = false, penciltoggle=false,penciltoggle3=false,
penciltoggle2, togglemaps = false, nxt=1, prev= 1, nextBody, prevBody,currentBody;

function fixNav() {
    console.log(searchListing.offsetHeight,ExpandBox.offsetHeight)
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

    const h = (searchListing.offsetHeight) -(ExpandBox.offsetHeight) - 87;
    console.log(h);
    if(window.scrollY< h && window.scrollY> 87){
        ExpandBox.style.marginTop = `${window.scrollY+87}px`;
        addMapsContainer.style.marginTop = `${window.scrollY+87}px`;
    }else if(window.scrollY< 87) {
        ExpandBox.style.marginTop = '0px';
        addMapsContainer.style.marginTop = `0px`;
    }
  }

  
      
    function toggleTab(){
        activepanel= document.querySelector('.navigation__listitem.active');
        //activebody= document.querySelector('.body.active');
        //currentactivebody = document.querySelector(`.body.${this.classList[1]}`);
        penciltoggle3=false;
        Dropdown3.style.display='none';
        Search.style.display='none';
        Body.style.display='flex';
        selectFilesBody.style.display='none';
        fsSearch5.style.display= 'none';
        fsSearch4.style.display= 'flex';
        fsSearch8.style.display= 'none';
        fsSearch3.classList.add('active');
    fsSearch2.classList.remove('active');
    adnav.style.display='none';
        
        //currentactivebody.classList.add('activebody');
        //console.log(this.classList)
        if(this.classList[1]==='item5'){
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
        ExpandBox.style.display='flex';
        this.classList.add('searchimageactive');
        searchListing.style.marginRight='4px';
        if(togglemaps){
            searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"48%":"48%"}`);        
            searchListing.style.width=`${window.screen.width>415?"33%":"100%"}`;
        }else{
            searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"24%":"48%"}`);        
            searchListing.style.width=`${window.screen.width>415?"66.8%":"100%"}`;
        }
        if( searchimageactive!==this){            
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
            SavedSearchOption.style.display ='none';
        }
        else if(this.classList[0]==='savedresults') {
            SearchResultsOption.style.display='none';
            toggleOpenSearch.style.display='none';
            SavedSearchOption.style.display='none';
            SavedResultsOption.style.display='flex';        
        }
        else {
            SearchResultsOption.style.display='none';
            toggleOpenSearch.style.display='none';
            SavedResultsOption.style.display='none';
            SavedSearchOption.style.display ='flex';
        }
    }

    function pencilToggle(){
        fullSearchBottom.style.display='none';
        fullSearchBottom2.style.display = 'flex';
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

    function toggleDropdown(){
    penciltoggle=!penciltoggle;
    if(penciltoggle===false){
        dropdownContent.style.display='none';
    }else if(penciltoggle===true){
        dropdownContent.style.display='flex';
    }
    }

    function toggleDropdown2(){
        penciltoggle2 = document.querySelector('.savedsearchoptions__carddropdown.ddactive');
        console.log(penciltoggle2,this)
        if(!penciltoggle2){
            this.classList.add('ddactive');
            this.querySelector('.dropdown__content2').style.display='flex';
        }else if(penciltoggle2===this){
            this.classList.remove('ddactive');
            this.querySelector('.dropdown__content2').style.display='none';
        }else{
            this.classList.add('ddactive');
            this.querySelector('.dropdown__content2').style.display='flex';
            //dropdownContent2.style.display='flex'
            penciltoggle2.classList.remove('ddactive');
            penciltoggle2.querySelector('.dropdown__content2').style.display='none';

        }
    }

    function changeFeatureNext(){
        if(nxt > 0 && nxt < 6){nxt++;prev=nxt-1}

        if(nxt===1){
            nxtBtn.innerHTML = 'Next';
            b1.style.display= 'flex';
            b2.style.display= 'none';
            a1.style.border='1px solid #64b3e8';
            a2.style.border='none'
        }
        if(nxt===2){            
            nxtBtn.innerHTML = 'Next';
            b1.style.display= 'none';
            b2.style.display= 'flex';
            b3.style.display= 'none';
            a2.style.border='1px solid #64b3e8';
            a1.style.border='none'
            a3.style.border='none'
        }
        else if(nxt===3){
            nxtBtn.innerHTML = 'Next';
            b2.style.display= 'none';
            b3.style.display= 'flex';
            b4.style.display= 'none';
            a3.style.border='1px solid #64b3e8';
            a2.style.border='none'
            a4.style.border='none'
        }
        else if(nxt===4){
            nxtBtn.innerHTML = 'Show me my Dream Home'
            b3.style.display= 'none';
            b4.style.display= 'flex';
            a4.style.border='1px solid #64b3e8';
            a3.style.border='none'
        }
        else if(nxt===5){
            Body.style.display ='none'
            Search.style.display="flex";
            OpenSearch.style.display='none'
            OpenSearchBox.style.display='flex'
            dropdownContent.style.display='none'
        }
        console.log(prev,nxt)

        
        
    }
    function changeFeatureBack(){
        if(prev===1){
            b1.style.display= 'flex';
            b2.style.display= 'none';
            a1.style.border='1px solid #64b3e8';
            a2.style.border='none'
        }
        else if(prev===2){
            b1.style.display= 'none';
            b2.style.display= 'flex';
            b3.style.display= 'none';
            a2.style.border='1px solid #64b3e8';
            a1.style.border='none'
            a3.style.border='none'
        }
        else if(prev===3){
            nxtBtn.innerHTML = 'Next';
            b2.style.display= 'none';
            b3.style.display= 'flex';
            b4.style.display= 'none';
            a3.style.border='1px solid #64b3e8';
            a2.style.border='none'
            a4.style.border='none'
        }
        else if(prev===4){
            nxtBtn.innerHTML = 'Next';
            b3.style.display= 'none';
            b4.style.display= 'flex';
            a4.style.border='1px solid #64b3e8';
            a3.style.border='none'
        }
        else if(prev===0){
            fsSearch8.style.display= 'none';
            fsSearch7.style.display ='flex';
            adnav.style.display='none';

        }
        console.log(prev,nxt)
        
        if(prev > 0 && prev < 5){prev = prev-1;nxt=prev+1}
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
    searchListing.style.marginRight='0px'
    if(togglemaps){
        searchListing.style.width=`${window.screen.width>415?"66%":"100%"}`;        
        searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"24%":"47%"}`);
    } else {
        searchListing.style.width="100%";
        searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"16%":"47%"}`);
    }
    searchimageactive.classList.remove('searchimageactive');
    // fullSearchBottom.innerHTML = '<img class="pencil" src="./images/pencil-alt-regular.svg" alt="" style="border-right: 1px solid #C5C3BC;"/><input type="text" placeholder="Type in search label"/><img src="./images/save-regular.svg" alt="" style="border-left: 1px solid #C5C3BC;"/>';
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

SavedSearchRightBtn.addEventListener('click',(e)=>{
    SavedSearchList.scrollBy(`${SavedSearchList.offsetWidth}`,0); 
    SavedSearchLeftBtn.style.display='flex';
    console.log(e)
    // SavedSearchLeftBtn.style.left = `${SavedSearchList.offsetWidth/2}px`
    SavedSearchRightBtn.style.display='none';
});

SavedSearchLeftBtn.addEventListener('click',(e)=>{
    SavedSearchList.scrollBy(`-${SavedSearchList.offsetWidth}`,0);
    SavedSearchLeftBtn.style.display='none';
    console.log(e);
    SavedSearchRightBtn.style.display='flex';
});

selectFiles.forEach(sf => sf.addEventListener('click', ()=>{
    Body.style.display ='none'
    selectFilesBody.style.display='flex';
}))
selectFilesBody.addEventListener('click', ()=>{
    Search.style.display="flex";
    OpenSearch.style.display='none'
    OpenSearchBox.style.display='flex'
    dropdownContent.style.display='none'
    penciltoggle=false;
    selectFilesBody.style.display = 'none'
});

window.addEventListener('scroll', fixNav);
OpenSearch.addEventListener('click', ()=>{
        Search.style.display='none';
        Body.style.display='flex';
        selectFilesBody.style.display='none'
})

a.forEach(aa=> aa.addEventListener('click',addSearch));

seeListings.addEventListener('click', ()=>{
    searchResultbutton.classList.remove('search-active')
    savedResultbutton.classList.add('search-active');
    SearchResultsOption.style.display='none';
    SavedResultsOption.style.display='flex';
    toggleOpenSearch.style.display = 'none';
})

dropdown1.addEventListener('click', toggleDropdown);
dropdown2.forEach(cd => cd.addEventListener('click', toggleDropdown2));
dropdown1ContentC2.addEventListener('click', ()=>{
    OpenSearch.style.display='flex';
    OpenSearchBox.style.display='none';
    dropdownContent.style.display='none'
    penciltoggle=false;
})

dropdown1ContentC1.addEventListener('click', ()=>{
    fullSearchBottom.style.display='flex';
    fullSearchBottom2.style.display = 'none';
    dropdownContent.style.display='none'
    penciltoggle=false
})

dropdown1ContentC3.addEventListener('click', ()=>{
    Search.style.display='none';
    Body.style.display='flex';
    selectFilesBody.style.display='none'
    dropdownContent.style.display='none'
    penciltoggle=false
})

dropdown1ContentC4.addEventListener('click', ()=>{
    searchResultbutton.classList.remove('search-active')
    savedResultbutton.classList.add('search-active');
    SearchResultsOption.style.display='none';
    SavedResultsOption.style.display='flex';
    dropdownContent.style.display='none'
    penciltoggle=false
})

SearchButton.addEventListener('click', ()=>{
    NavRight.style.display='none';
    NavLeft.style.display='none';
    SearchOpen.style.display='flex';
    penciltoggle3=false;
    Dropdown3.style.display='none';
})

CloseButton.addEventListener('click', ()=>{
    NavRight.style.display='flex';
    NavLeft.style.display='flex';
    SearchOpen.style.display='none';
})

OptionNavbrButton.addEventListener('click', ()=>{
    penciltoggle3=!penciltoggle3;
    if(penciltoggle3===false){
        Dropdown3.style.display='none';
    }else if(penciltoggle3===true){
        Dropdown3.style.display='flex';
    }
})

addMaps.addEventListener('click' , () => {
    togglemaps =! togglemaps;
    if(togglemaps){
        searchListing.style.width=`${window.screen.width>415?"33%":"100%"}`;
        searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"48%":"48%"}`);
        ExpandBox.style.display='flex'; 
        addMapsContainer.style.display="flex";
        addMapsContainer.style.width = `${window.screen.width>415?"33%":"100%"}`;
        ExpandBox.style.width = `${window.screen.width>415?"33%":"100%"}`;
    } else {
        searchListing.style.width=`${window.screen.width>415?"100%":"100%"}`;
        searchListingImages.forEach(sli => sli.style.width=`${window.screen.width>415?"16%":"48%"}`);
        addMapsContainer.style.display="none";
        ExpandBox.style.display='none'; 

    }  

})

fsSearch3.addEventListener('click', ()=> {
    fsSearch3.classList.add('active');
    fsSearch2.classList.remove('active');
    fsSearch4.style.display= 'flex';
    fsSearch5.style.display= 'none';
    fsSearch7.style.display= 'none';
    fsSearch8.style.display='none';
});

fsSearch2.addEventListener('click', ()=> {
    fsSearch2.classList.add('active');
    fsSearch3.classList.remove('active');
    fsSearch4.style.display= 'none';
    fsSearch5.style.display= 'none';
    fsSearch7.style.display= 'flex';

})

fsSearch1.addEventListener('click', ()=> {
    fsSearch4.style.display='none';
    fsSearch5.style.display ='flex';
})

fsSearch6.addEventListener('click', ()=> {
    Body.style.display ='none'
    Search.style.display="flex";
    OpenSearch.style.display='none'
    OpenSearchBox.style.display='flex'
    dropdownContent.style.display='none'
});

fsSearch9.addEventListener('click', ()=> {
    fsSearch7.style.display='none';
    adnav.style.display='flex';
    fsSearch8.style.display='flex';
})

nxtBtn.addEventListener('click', changeFeatureNext)
prevBtn.addEventListener('click', changeFeatureBack)
