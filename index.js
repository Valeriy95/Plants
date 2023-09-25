// Blue Service
const body = document.body;
body.addEventListener('click', blurService);
let counter = 0;
function blurService (e) {
   const btnGardens = document.querySelector('#gardens');
   const btnPlantings = document.querySelector('#plantings');
   const btnLawns = document.querySelector('#lawns');
   const cardGarden = document.querySelector('#garden_first');
   const cardPlanting = document.querySelector('#planting_second');
   const cardCare = document.querySelector('#care_third');
   const cardGarden2 = document.querySelector('#garden_fifth');
   const cardPlanting2 = document.querySelector('#planting_fourth');
   const cardPlanting3 = document.querySelector('#planting_sixth');
   
   if(e.target === btnGardens || e.target === btnPlantings || e.target === btnLawns) {
      counter++;
   };

   if (e.target === btnGardens && counter == 1) {
      cardPlanting.classList.add('blurs');
      cardPlanting2.classList.add('blurs');
      cardPlanting3.classList.add('blurs');
      cardCare.classList.add('blurs');
      cardGarden.classList.remove('blurs');
      cardGarden2.classList.remove('blurs');
      btnGardens.classList.add('active');
   };

   if (e.target === btnPlantings && counter == 1) {
      cardGarden.classList.add('blurs');
      cardGarden2.classList.add('blurs');
      cardCare.classList.add('blurs');
      cardPlanting.classList.remove('blurs');
      cardPlanting2.classList.remove('blurs');
      cardPlanting3.classList.remove('blurs');
      btnPlantings.classList.add('active');
   };

   if (e.target === btnLawns && counter == 1) {
      cardGarden.classList.add('blurs');
      cardGarden2.classList.add('blurs');
      cardPlanting.classList.add('blurs');
      cardPlanting2.classList.add('blurs');
      cardPlanting3.classList.add('blurs');
      cardCare.classList.remove('blurs');
      btnLawns.classList.add('active');
   };

   if (e.target === btnGardens && counter == 2) {
      if(cardGarden.classList.contains('blurs')) {
         cardGarden.classList.remove('blurs');
         cardGarden2.classList.remove('blurs');
         btnGardens.classList.add('active');
      } else {
         cardPlanting.classList.remove('blurs');
         cardPlanting2.classList.remove('blurs');
         cardPlanting3.classList.remove('blurs');
         cardCare.classList.remove('blurs');
         btnGardens.classList.remove('active');
         counter = 0;
      }
   };

   if (e.target === btnPlantings && counter == 2) {
      if(cardPlanting.classList.contains('blurs')) {
         cardPlanting.classList.remove('blurs');
         cardPlanting2.classList.remove('blurs');
         cardPlanting3.classList.remove('blurs');
         btnPlantings.classList.add('active');
      } else {
         cardGarden.classList.remove('blurs');
         cardGarden2.classList.remove('blurs');
         cardCare.classList.remove('blurs');
         btnPlantings.classList.remove('active');
         counter = 0;
      }
   };

   if (e.target === btnLawns && counter == 2) {
      if(cardCare.classList.contains('blurs')) {
         cardCare.classList.remove('blurs');
         btnLawns.classList.add('active');
      } else {
         cardGarden.classList.remove('blurs');
         cardGarden2.classList.remove('blurs');
         cardPlanting.classList.remove('blurs');
         cardPlanting2.classList.remove('blurs');
         cardPlanting3.classList.remove('blurs');
         btnLawns.classList.remove('active');
         counter = 0;
      }
   };

   if (e.target === btnGardens && counter == 3) {
      cardPlanting.classList.add('blurs');
      cardPlanting2.classList.add('blurs');
      cardPlanting3.classList.add('blurs');
      cardCare.classList.add('blurs');
      cardGarden.classList.remove('blurs');
      cardGarden2.classList.remove('blurs');
      btnPlantings.classList.remove('active');
      btnLawns.classList.remove('active');
      btnGardens.classList.add('active');
      counter = 1;
   };

   if (e.target === btnPlantings && counter == 3) {
      cardGarden.classList.add('blurs');
      cardGarden2.classList.add('blurs');
      cardCare.classList.add('blurs');
      cardPlanting.classList.remove('blurs');
      cardPlanting2.classList.remove('blurs');
      cardPlanting3.classList.remove('blurs');
      btnGardens.classList.remove('active');
      btnLawns.classList.remove('active');
      btnPlantings.classList.add('active');
      counter = 1;
   };

   if (e.target === btnLawns && counter == 3) {
      cardGarden.classList.add('blurs');
      cardGarden2.classList.add('blurs');
      cardPlanting.classList.add('blurs');
      cardPlanting2.classList.add('blurs');
      cardPlanting3.classList.add('blurs');
      cardCare.classList.remove('blurs');
      btnGardens.classList.remove('active');
      btnPlantings.classList.remove('active');
      btnLawns.classList.add('active');
      counter = 1;
   };

   if (e.target !== btnGardens && e.target !== btnPlantings && e.target !== btnLawns) {
      cardGarden.classList.remove('blurs');
      cardGarden2.classList.remove('blurs');
      cardPlanting.classList.remove('blurs');
      cardPlanting2.classList.remove('blurs');
      cardPlanting3.classList.remove('blurs');
      cardCare.classList.remove('blurs');
      btnGardens.classList.remove('active');
      btnPlantings.classList.remove('active');
      btnLawns.classList.remove('active');
      counter = 0;
   };
};


// Accordion Price
body.addEventListener('click', accordionPrice);
function accordionPrice (e) {
   const downdrowBasic = document.querySelector('#dropdown1');
   const downdrowStandard = document.querySelector('#dropdown2');
   const downdrowPro = document.querySelector('#dropdown3');
   const downupBasic = document.querySelector('#icon_hidden');
   const downupStandard = document.querySelector('#icon-standard-hidden'); 
   const downupPro = document.querySelector('#icon-care-hidden');
   const pricesContainerBasic = document.querySelector('.price_basic_hidden');
   const pricesContainerStandard = document.querySelector('.price_standard_hidden');
   const pricesContainerPro = document.querySelector('.price_pro_hidden');

   if (e.target === downdrowBasic || e.target === downupBasic) {
    pricesContainerBasic.classList.toggle('hidden');
    pricesContainerStandard.classList.add('hidden');
    pricesContainerPro.classList.add('hidden');
   };

   if ( e.target ===  downdrowStandard || e.target === downupStandard) {
    pricesContainerStandard.classList.toggle('hidden');
    pricesContainerBasic.classList.add('hidden');
    pricesContainerPro.classList.add('hidden');
   };

   if ( e.target ===  downdrowPro || e.target === downupPro) {
    pricesContainerPro.classList.toggle('hidden');
    pricesContainerBasic.classList.add('hidden');
    pricesContainerStandard.classList.add('hidden');
   }; 
};

// Contact

const iconOpen = document.querySelector('.contact_icon');
const iconClose = document.querySelector('.contact_icon_hidden');
const formContactsHidden = document.querySelector('.contacts_form_hid');
const formContacts= document.querySelector('.contact_form');

const contactsText = document.querySelector('.contacts_text')

const cityCanandaigua= document.querySelector('#city_Canandaigua');
const cityNewYork= document.querySelector('#city_NewYork');
const cityYonkers= document.querySelector('#city_Yonkers');
const citySherrill= document.querySelector('#city_Sherrill');

const addressCanandaigua = document.querySelector('#Canandaigua');
const addressCityNewYork = document.querySelector('#New_York');
const addressCityYonkers = document.querySelector('#Yonkers');
const addresscitySherrill = document.querySelector('#Sherrill')

body.addEventListener('click', contactContainer);
function contactContainer (e) {
    if (e.target === iconOpen) {
        formContactsHidden.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        formContacts.classList.add('contacts_active');
        addressCanandaigua.classList.add('hidden');
        addressCityNewYork.classList.add('hidden');
        addressCityYonkers.classList.add('hidden');
        addresscitySherrill.classList.add('hidden');
    }
    if (e.target === iconClose) {
        formContactsHidden.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        formContacts.classList.remove('contacts_active');
        contactsText.innerHTML = 'City';
        addressCanandaigua.classList.add('hidden');
        addressCityNewYork.classList.add('hidden');
        addressCityYonkers.classList.add('hidden');
        addresscitySherrill.classList.add('hidden');
    }
    if (e.target === cityCanandaigua) {
        formContactsHidden.classList.add('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        formContacts.classList.add('contacts_active');
        contactsText.innerHTML = cityCanandaigua.innerHTML;
        addressCanandaigua.classList.remove('hidden');
    }
    if (e.target === cityNewYork) {
        formContactsHidden.classList.add('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        formContacts.classList.add('contacts_active');
        contactsText.innerHTML = cityNewYork.innerHTML;
        addressCityNewYork.classList.remove('hidden');
    }
    if (e.target === cityYonkers) {
        formContactsHidden.classList.add('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        formContacts.classList.add('contacts_active');
        contactsText.innerHTML = cityYonkers.innerHTML;
        addressCityYonkers.classList.remove('hidden');
    }
    if (e.target === citySherrill) {
        formContactsHidden.classList.add('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        formContacts.classList.add('contacts_active');
        contactsText.innerHTML = citySherrill.innerHTML;
        addresscitySherrill.classList.remove('hidden');
    }
}

//Burger menu 

const menuBurger = document.querySelector('.navbar_burger');
const navList = document.querySelector('.nav_list');
const iconBurgerClose = document.querySelector('.navbar_burger_close');
const links = document.querySelectorAll('.nav_item');

menuBurger.addEventListener('click', function () {
   menuBurger.classList.add('opacity');
   navList.classList.add('nav_list_open');
   iconBurgerClose.style.marginTop = '30px';
})

iconBurgerClose.addEventListener('click', function () {
   menuBurger.classList.remove('opacity');
   navList.classList.remove('nav_list_open');
   iconBurgerClose.style.marginTop = '-330px';
})

links.forEach(function(link) {
   link.addEventListener('click', function() {
      menuBurger.classList.remove('opacity');
      navList.classList.remove('nav_list_open');
      iconBurgerClose.style.marginTop = '-330px';
  });
});