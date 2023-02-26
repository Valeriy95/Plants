// Burger-menu
function helloWorldHidden () {
   document.querySelector('.nav-list').classList.toggle('hidden1');
   document.querySelector('.navbar-burger-close').classList.toggle('hidden123');
};

const body = document.body;

body.addEventListener('click', remove);
function remove (e) {
   const navbarBurger = document.querySelector('.navbar-burger');
   const navbarBurgerClose = document.querySelector('.navbar-burger-close');
   const navList = document.querySelector('.nav-list');
   const navbarBurgerSpan2 = document.querySelector('.navbar-burger-span-2');
   if(e.target !== navList && e.target !== navbarBurger && e.target !== navbarBurgerClose && e.target !== navbarBurgerSpan2) {
      document.querySelector('.nav-list').classList.remove('hidden1');
      document.querySelector('.navbar-burger-close').classList.remove('hidden123');
   } else {
      helloWorldHidden ();
   }
};

// Accordion Price
body.addEventListener('click', accordionPrice);
function accordionPrice (e) {
   const downdrow1 = document.querySelector('#dropdown1');
   const downdrow2 = document.querySelector('#dropdown2');
   const downdrow3 = document.querySelector('#dropdown3');
   const downup1 = document.querySelector('#icon-prs-hidden');
   const downup2 = document.querySelector('#icon-standard-hidden'); 
   const downup3 = document.querySelector('#icon-care-hidden');
   const pricesBtn1 = document.querySelector('.prices-btn1-hidden');
   const pricesBtn2 = document.querySelector('.prices-btn2-hidden');
   const pricesBtn3 = document.querySelector('.prices-btn3-hidden');

   if (e.target === downdrow1 || e.target === downup1) {
   pricesBtn1.classList.toggle('hidden');
   pricesBtn2.classList.add('hidden');
   pricesBtn3.classList.add('hidden');
   };

   if ( e.target ===  downdrow2 || e.target === downup2) {
   pricesBtn2.classList.toggle('hidden');
   pricesBtn1.classList.add('hidden');
   pricesBtn3.classList.add('hidden');
   };

   if ( e.target ===  downdrow3 || e.target === downup3) {
   pricesBtn3.classList.toggle('hidden');
   pricesBtn1.classList.add('hidden');
   pricesBtn2.classList.add('hidden');
   }; 
};

// Blur Service
body.addEventListener('click', blurService);
let counter = 0;
function blurService (e) {
   const btnGardens = document.querySelector('#gardens');
   const btnPlantings = document.querySelector('#plantings');
   const btnLawns = document.querySelector('#lawns');
   const serGarden = document.querySelector('.garden');
   const serPlanting = document.querySelector('.planting');
   const serCare = document.querySelector('.care');
   const serGarden1 = document.querySelector('.garden1');
   const serPlanting1 = document.querySelector('.planting1');
   const serPlanting2 = document.querySelector('.planting2');
   
   if(e.target === btnGardens || e.target === btnPlantings || e.target === btnLawns) {
      counter++;
   };

   if (e.target === btnGardens && counter == 1) {
      serPlanting.classList.add('blurs');
      serPlanting1.classList.add('blurs');
      serPlanting2.classList.add('blurs');
      serCare.classList.add('blurs');
      serGarden.classList.remove('blurs');
      serGarden1.classList.remove('blurs');
      btnGardens.classList.add('active');
   };

   if (e.target === btnPlantings && counter == 1) {
      serGarden.classList.add('blurs');
      serGarden1.classList.add('blurs');
      serCare.classList.add('blurs');
      serPlanting.classList.remove('blurs');
      serPlanting1.classList.remove('blurs');
      serPlanting2.classList.remove('blurs');
      btnPlantings.classList.add('active');
   };

   if (e.target === btnLawns && counter == 1) {
      serGarden.classList.add('blurs');
      serGarden1.classList.add('blurs');
      serPlanting.classList.add('blurs');
      serPlanting1.classList.add('blurs');
      serPlanting2.classList.add('blurs');
      serCare.classList.remove('blurs');
      btnLawns.classList.add('active');
   };

   if (e.target === btnGardens && counter == 2) {
      if(serGarden.classList.contains('blurs')) {
         serGarden.classList.remove('blurs');
         serGarden1.classList.remove('blurs');
         btnGardens.classList.add('active');
      } else {
         serPlanting.classList.remove('blurs');
         serPlanting1.classList.remove('blurs');
         serPlanting2.classList.remove('blurs');
         serCare.classList.remove('blurs');
         btnGardens.classList.remove('active');
         counter = 0;
      }
   };

   if (e.target === btnPlantings && counter == 2) {
      if(serPlanting.classList.contains('blurs')) {
         serPlanting.classList.remove('blurs');
         serPlanting1.classList.remove('blurs');
         serPlanting2.classList.remove('blurs');
         btnPlantings.classList.add('active');
      } else {
         serGarden.classList.remove('blurs');
         serGarden1.classList.remove('blurs');
         serCare.classList.remove('blurs');
         btnPlantings.classList.remove('active');
         counter = 0;
      }
   };

   if (e.target === btnLawns && counter == 2) {
      if(serCare.classList.contains('blurs')) {
         serCare.classList.remove('blurs');
         btnLawns.classList.add('active');
      } else {
         serGarden.classList.remove('blurs');
         serGarden1.classList.remove('blurs');
         serPlanting.classList.remove('blurs');
         serPlanting1.classList.remove('blurs');
         serPlanting2.classList.remove('blurs');
         btnLawns.classList.remove('active');
         counter = 0;
      }
   };

   if (e.target === btnGardens && counter == 3) {
      serPlanting.classList.add('blurs');
      serPlanting1.classList.add('blurs');
      serPlanting2.classList.add('blurs');
      serCare.classList.add('blurs');
      serGarden.classList.remove('blurs');
      serGarden1.classList.remove('blurs');
      btnPlantings.classList.remove('active');
      btnLawns.classList.remove('active');
      btnGardens.classList.add('active');
      counter = 1;
   };

   if (e.target === btnPlantings && counter == 3) {
      serGarden.classList.add('blurs');
      serGarden1.classList.add('blurs');
      serCare.classList.add('blurs');
      serPlanting.classList.remove('blurs');
      serPlanting1.classList.remove('blurs');
      serPlanting2.classList.remove('blurs');
      btnGardens.classList.remove('active');
      btnLawns.classList.remove('active');
      btnPlantings.classList.add('active');
      counter = 1;
   };

   if (e.target === btnLawns && counter == 3) {
      serGarden.classList.add('blurs');
      serGarden1.classList.add('blurs');
      serPlanting.classList.add('blurs');
      serPlanting1.classList.add('blurs');
      serPlanting2.classList.add('blurs');
      serCare.classList.remove('blurs');
      btnGardens.classList.remove('active');
      btnPlantings.classList.remove('active');
      btnLawns.classList.add('active');
      counter = 1;
   };

   if (e.target !== btnGardens && e.target !== btnPlantings && e.target !== btnLawns) {
      serGarden.classList.remove('blurs');
      serGarden1.classList.remove('blurs');
      serPlanting.classList.remove('blurs');
      serPlanting1.classList.remove('blurs');
      serPlanting2.classList.remove('blurs');
      serCare.classList.remove('blurs');
      btnGardens.classList.remove('active');
      btnPlantings.classList.remove('active');
      btnLawns.classList.remove('active');
      counter = 0;
   };
};

// Contact
const contactsText = document.querySelector('.container-contacts-text');
const iconOpen = document.querySelector('.contact-icon');
const iconClose = document.querySelector('.contact-icon1');
const containerContactsHid = document.querySelector('.container-contacts-hid');
const containerContacts = document.querySelector('.container-contacts');

body.addEventListener('click', contactContainer);
function contactContainer (e) {
   const img380 = document.querySelector('.contact-img');
   if (e.target === iconOpen) {
      if (window.innerWidth <= 380) {
         containerContacts.classList.add('contacts-active');
         iconClose.classList.toggle('hidden');
         containerContactsHid.classList.toggle('hidden');
         city1.classList.add('hidden');
         city2.classList.add('hidden');
         city3.classList.add('hidden');
         city4.classList.add('hidden');
         img380.style.opacity = '0';
         img380.style.paddingLeft = '0';
      } else {
         containerContacts.classList.add('contacts-active');
         iconClose.classList.toggle('hidden');
         containerContactsHid.classList.toggle('hidden');
         city1.classList.add('hidden');
         city2.classList.add('hidden');
         city3.classList.add('hidden');
         city4.classList.add('hidden');
      }
   }
   if (e.target === iconClose) {
      if (window.innerWidth <= 380)  {
         containerContacts.classList.remove('contacts-active');
         iconClose.classList.toggle('hidden');
         containerContactsHid.classList.toggle('hidden');
         contactsText.innerText = 'City';
         iconOpen.style.paddingLeft = '198px';
         contactsText.style.fontSize = '20px';
         img380.style.opacity = '1';
         img380.style.paddingLeft = '138px';
      } else {
         containerContacts.classList.remove('contacts-active');
         iconClose.classList.toggle('hidden');
         containerContactsHid.classList.toggle('hidden');
         contactsText.innerText = 'City';
         iconOpen.style.paddingLeft = '332px';
         contactsText.style.fontSize = '20px';
      }
   }
};

const hidText1 = document.querySelector('.container-contacts-hid-text1');
const hidText2 = document.querySelector('#hidText2');
const hidText3 = document.querySelector('#hidText3');
const hidText4 = document.querySelector('#hidText4');
const border1 = document.querySelector('#border1');
const border2 = document.querySelector('#border2');
const border3 = document.querySelector('#border3');
const border4 = document.querySelector('#border4');

body.addEventListener('mousemove', hoverContacts);
function hoverContacts (e) {

   if (e.target === hidText1 || e.target === border1) {
      hidText1.classList.add('active-contacts');
      border1.classList.add('active-border');
   };

   if (e.target === hidText2 || e.target === border2) {
      hidText2.classList.add('active-contacts');
      border2.classList.add('active-border');
   };

   if (e.target === hidText3 || e.target === border3) {
      hidText3.classList.add('active-contacts');
      border3.classList.add('active-border');
   };

   if (e.target === hidText4 || e.target === border4) {
      hidText4.classList.add('active-contacts');
      border4.classList.add('active-border');
   };
};

body.addEventListener('mouseout', hoverContactsOut);
function hoverContactsOut (e) {
  
   if (e.target === hidText1 || e.target === border1) {
      hidText1.classList.remove('active-contacts');
      border1.classList.remove('active-border');
   };

   if (e.target === hidText2 || e.target === border2) {
      hidText2.classList.remove('active-contacts');
      border2.classList.remove('active-border');
   };

   if (e.target === hidText3 || e.target === border3) {
      hidText3.classList.remove('active-contacts');
      border3.classList.remove('active-border');
   };

   if (e.target === hidText4 || e.target === border4) {
      hidText4.classList.remove('active-contacts');
      border4.classList.remove('active-border');
   };
};

hidText1.addEventListener('click', openAddress1);
hidText2.addEventListener('click', openAddress2);
hidText3.addEventListener('click', openAddress3);
hidText4.addEventListener('click', openAddress4);

const city1 = document.querySelector('#City1');
const city2 = document.querySelector('#City2');
const city3 = document.querySelector('#City3');
const city4 = document.querySelector('#City4');

function openAddress1 () {
   if (window.innerWidth <= 380) {
      city1.classList.remove('hidden');
      contactsText.innerText = hidText1.innerText;
      containerContacts.style.marginTop = '42px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '100px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
   } else if (window.innerWidth <= 768) {
      city1.classList.remove('hidden');
      contactsText.innerText = hidText1.innerText;
      containerContacts.style.marginTop = '-38px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '233px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
   } else {
      city1.classList.remove('hidden');
      contactsText.innerText = hidText1.innerText;
      containerContacts.style.marginTop = '35px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '233px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      containerContactsHid.classList.add('contacts-active');
   }
};

function openAddress2 () {
   if (window.innerWidth <= 380) {
      city2.classList.remove('hidden');
      contactsText.innerText = hidText2.innerText;
      containerContacts.style.marginTop = '42px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '121px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
   } else if (window.innerWidth <= 768) {
      city2.classList.remove('hidden');
      contactsText.innerText = hidText2.innerText;
      containerContacts.style.marginTop = '-38px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '255px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
   } else {
      city2.classList.remove('hidden');
      contactsText.innerText = hidText2.innerText;
      containerContacts.style.marginTop = '35px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '255px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      containerContactsHid.classList.add('contacts-active');
   }
};

function openAddress3 () {
   if (window.innerWidth <= 380) {
      city3.classList.remove('hidden');
      contactsText.innerText = hidText3.innerText;
      containerContacts.style.marginTop = '42px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '138px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
   } else if (window.innerWidth <= 768) {
      city3.classList.remove('hidden');
      contactsText.innerText = hidText3.innerText;
      containerContacts.style.marginTop = '-38px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '272px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
   } else {
      city3.classList.remove('hidden');
      contactsText.innerText = hidText3.innerText;
      containerContacts.style.marginTop = '35px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '272px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      containerContactsHid.classList.add('contacts-active');
   }
};

function openAddress4 () {
   if (window.innerWidth <= 380) {
      city4.classList.remove('hidden');
      contactsText.innerText = hidText4.innerText;
      containerContacts.style.marginTop = '42px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '149px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
   } else if (window.innerWidth <= 768) {
      city4.classList.remove('hidden');
      contactsText.innerText = hidText4.innerText;
      containerContacts.style.marginTop = '-38px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '283px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
   } else {
      city4.classList.remove('hidden');
      contactsText.innerText = hidText4.innerText;
      containerContacts.style.marginTop = '35px';
      contactsText.style.fontSize = '16px';
      iconOpen.style.paddingLeft = '283px';
      containerContactsHid.classList.add('hidden');
      iconClose.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      containerContactsHid.classList.add('contacts-active');
   }
};
