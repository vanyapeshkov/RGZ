let products = [
    {href: 'product1.html', text: 'CORT Action PJ OPW Бас-гитара 4-х струнная', images: ['cort1.jpeg','cort2.jpg'], price: '15880 &#8381', info: 'Action PJ OPW бас-гитара 4 струны, корпус тополь, кленовый привинченный гриф,<br> накладка палисандр, звукосниматели Powersound 2PJ-bass, 24 ладa, мензура 34",<br> цвет Open Pore Walnut'},
    {href: 'product2.html', text: 'CORT Action DLX-V-AS-OPN Action Series Бас-гитара, 5 струн', images: ['cort3.jpeg', "cort4.jpg"], price:'49500 &#8381', info: 'Доступные, но изготовленные с применением качественных материалов и компонентов,<br> бас-гитары серии Action отлично подходят для начинающих музыкантов.<br> Гитары оснащаются различными вариантами звукоснимателей и активной электроникой.'},
    {href: 'product3.html', text: 'CORT Action PJ OPB Бас-гитара 4-х струнная',images: ['cort5.jpeg',"cort6.jpg"], price: '16320 &#8381', info: 'Доступные, но изготовленные с применением качественных материалов и компонентов,<br> бас-гитары серии Action отлично подходят для начинающих музыкантов.<br> Гитары оснащаются различными вариантами звукоснимателей и активной электроникой.' },
    {href: 'product4.html', text: 'YAMAHA TRBX174 BL Бас-гитара,',images: ['y1.jpg', "y2.jpeg"], price: '32990 &#8381', info: 'TRBX174 представляет собой бас-гитару уровня TRBX по невероятно доступной цене,<br> при этом её качество полностью соответствует вашим ожиданиям от инструента Yamaha.' },
    {href: 'product5.html', text: 'CORT GB34JJ-BK GB Series Бас-гитара 4-х струнная',images:['cort7.jpeg','cort8.jpg'], price: '25 160 &#8381', info: 'На протяжении двадцати лет бас-гитары серии GB являлись одними из самых популярных гитар Cort.<br> В 2017 году линейка GB была переработана и теперь эти бас-гитары предстают<br> в новом дизайне и с новыми возможностями.' },
    {href: 'product6.html', text: 'Prodipe JMFJB80RACAR JB80RA Бас-гитара, красная', images:['p1.jpeg','p2.jpg'] , price: '33 020 &#8381', info: 'Как и в случае с линейкой электрогитар,<br> Prodipe Guitars попытались полностью воссоздать идентичность оригинальных моделей.<br> Единственный верный пусть в этом направлении: искренность и щедрость.'},
    {href: 'product7.html', text: 'CORT B4 Plus MH OPM Бас-гитара, 4 струны, цвет красное дерево', images: ['cort9.jpeg','cort10.jpg'], price: '43 320 Р &#8381', info: 'Cort 4 Plus MH OPM бас-гитара 4 струны, корпус красное дерево,<br> привинченный гриф венге/палисандр 5pc, 2 датчика Bartolini,<br> активный эквалайзер, цвет open pore mahogani'},
    {href: 'product8.html', text: 'Prodipe JMFPB80RAVW PB80RA Бас-гитара, белая', images: ['p3.jpeg','p4.jpg'], price: '33 020 &#8381', info: 'Как и в случае с линейкой электрогитар,<br> Prodipe Guitars попытались полностью воссоздать идентичность оригинальных моделей.<br> Единственный верный пусть в этом направлении: искренность и щедрость.'},
    {href: 'product9.html', text: 'CORT GB54JJ NAT Бас-гитара, 4-х струнная', images: ['cort11.png','cort11.jpg'], price: '38 990 &#8381', info: 'GB54JJ NAT бас-гитара 4 струны, корпус из болотного ясеня, кленовый привинченный гриф,<br>накладка клен, 20 ладов, мензура 34", цвет Natural, CORT'},
    {href: 'product10.html', text: 'CORT Action DLX Plus CRS бас-гитара 4 струны', images: ['cort111.png','cort13.jpg'], price: '31 150 &#8381', info: 'Доступные, но изготовленные с применением качественных материалов и компонентов,<br> бас-гитары серии Action отлично подходят для начинающих музыкантов.'},
    {href: 'product11.html', text: 'ESP LTD VINTAGE-214ARNAT Бас-гитара 4-струны', images: ['esp1.jpeg','esp2.jpeg'], price: '47 050 &#8381', info: 'Модельный ряд бас-гитар любой крупной компании будет неполным без инструментов формата "пресижн". '},
    {href: 'product12.html', text: 'SQOE SQ-PB-4 SB бас-гитара 4 струны', images: ['sq1.png','sq2.jpg'], price: '25 200 &#8381', info: 'Модель SQOE Sq-pb-4 4-струнная, формы «Presicion», предназначена для исполнения<br>басовой партии в джазе, блюзе, легком роке или поп-музыке.  '},
    {href: 'product13.html', text: 'Cort A5-Plus-FMMH-OPN Бас-гитара 5 струн, цвет натуральный', images: ['cort14.png','cort15.jpg'], price: '79 210 &#8381', info: 'Бас-гитара A5 Plus FMMH разработана и создана для тех,<br>кто нуждается в постоянстве и надежности от концерта к концерту.<br> Сквозной гриф, лучшая древесина, электроника и звукосниматели Bartolini обеспечивают звучание и стабильность,<br> в которой нуждаются профессионалы.'},
    {href: 'product14.html', text: 'CORT Action DLX Plus FGB бас-гитара 4 струны', images: ['cort15.png','cort16.jpg'], price: '31 150 &#8381', info: 'Доступные, но изготовленные с применением качественных материалов и компонентов,<br> бас-гитары серии Action отлично подходят для начинающих музыкантов.<br> Гитары оснащаются различными вариантами звукоснимателей и активной электроникой.'},
    {href: 'product15.html', text: 'Crafter BA-400 EQ/N электроакустическая бас-гитара с чехлом', images: ['cr0.jpeg','cr1.jpeg'], price: '65 260 &#8381', info: 'Основатель фирмы Crafter – корейский гитарный мастер HyunKwon Park<br> начал штучное производство гитар ещё в 1972 году,<br> а к 1982 году это уже была фабрика по производству гитар Crafter. '},
    {href: 'product16.html', text: 'CORT GB35A-3TS Бас-гитара 5 струн', images: ['cort17.jpg','cort18.jpeg'], price: '18 720 &#8381', info: 'Бас-гитара пятиструнная CORT GB35A-3TS.'},
    {href: 'product17.html', text: 'IBANEZ SR300EB-WK Бас-гитара 4-струнная, цвет чёрный состаренный', images: ['ib1.png','ib2.jpg'], price: '46 000 &#8381', info: 'Модель отличается гладким, изящным, удобным грифом, легковесным компактным корпусом из красного дерева и идеально подобранной высококачественной электроникой.'},
    {href: 'product18.html', text: 'CORT CBP-DLX-FGB Комплект начинающего бас-гитариста', images: ['cort19.jpeg','cort20.jpeg'], price: '28 730 &#8381', info: 'CORT CBP-DLX - прекрасный подарок любому гитаристу, осваивающему азы на трудном пути к вершинам гитарного мастерства.'},
    {href: 'product19.html', text: 'SQOE SQ-PB-4 BK бас-гитара 4 струны', images: ['sq4.png','sq3.jpg'], price: '25 200 &#8381', info: 'Модель SQOE Sq-pb-4 4-струнная, формы «Presicion», предназначена для исполнения басовой партии в джазе, блюзе,<br> легком роке или поп-музыке. На данной модели установлены звукосниматели сингл. '},
    {href: 'product20.html', text: 'CORT GB35A-BK Бас-гитара, 5 струн, чёрная', images: ['cort21.jpg','cort22.jpg'], price: '18 070 &#8381', info: 'Управление электроникой:     Тон — 1 шт., громкость — 1 шт. (пуш-пулл), 2-band active EQ'},
];
 
 function showModal(messageText, buttonText) {
    //alert('Sorry, not ready yet...\nИзвинте, еще не готово...');
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.top = '50px';
    modal.style.left = '47%';
    modal.style.transform = 'scale(01';
    
    
 
 
    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;
 
    document.body.style.overflow = 'hidden';
    let = overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    overlay.style.backgroundcolor = 'rgba(0, 100, 200, 0.3)';
 
    return false;
 
 
 }
 function hideModal() {
     let modal = document.getElementsByClassName('modal')[0];
     setTimeout(function(){
         modal.style.visibility = 'hidden'
     }, 350);
     modal.style.opacity = '0';
     modal.style.top = '100%';
     modal.style.transform = 'scale(0)';
 
     document.body.style.overflow = 'auto';
     let = overlay = document.getElementsByClassName('overlay')[0];
     setTimeout(function(){
         overlay.style.visibility = 'hidden';
     }, 200);
     overlay.style.opacity = '0';
     overlay.style.backgroundcolor = 'rgba(255, 0, 0, 0.3)';
 
     
 }
 function notReadyAlert(event) {
     showModal('Sorry, not ready yet!<br>Извинте, еще не готово!', 'Эх, жаль');
     event.preventDefault();
     return false;
     }
 
 function notReadyAlert1() {
     showModal('Звоните, если угадаете)))0))))','Прости, друг');
    return false;
 }
 function notReadyAlert2() {
     showModal('Это наш сайт', 'НеНаСтОяЩиЙ');
    return false;
 }
 function notReadyAlert3() {
     showModal('Хмм... или не прикол', 'Да ладно, не важно, что я там сказал');
    return false;
 }
 
 function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for (let i = 0; i<products.length; i++) {
       let product = products[i];
       if(nameRegExp.test(product.text)) {
          let card = cards[i];
          card.style.border = '3px dashed red';
          card.style.backgroundcolor = 'yellow';
 
          setTimeout(function(){
             card.style.border = 'none';
             card.style.backgroundcolor = '';
          }, 2000);
          
       }
    }
 }
 function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';
    let items = [
       {href: 'index.html', text: 'Товары'},
       {href: 'contacts.html', text: 'Контакты'},
       {href: 'discont.html', text: 'Акции'},
    ];
 
    for(let i = 0; i<items.length; i++){
       let link = document.createElement('a');
       link.innerText = items[i].text;
       link.href = items[i].href;
       if (items[i].href == '') {
          link.addEventListener('click', notReadyAlert);
       }
 
       let menuItem = document.createElement('li');
       menuItem.appendChild(link);
 
       menu.appendChild(menuItem);
    }
 }
 function showProductInfo(product) {
    let imagesList = '';
    for(let i=0; i<product.images.length; i++){
        imagesList = imagesList + `<div><img src="${product.images[i]}"></div>`
    }
        showModal(`Информация о товаре
            ${imagesList}
            <div>${product.text}</div>
            <div>${product.price} </div>
            <div><i>${product.info}</i></div>
            `, 'Спасибо');
        }
        function generateCard() {
            let main = document.querySelector('main');
            for(let i = 0; i<products.length; i++){
               let product = document.createElement('div');
               product.className= 'card';
               product.innerHTML = `
               <a href="#">
                  <div class="image"><img src="${products[i].images[0]}"></div>
                  <div class="product-name">"${products[i].text}"</div>
                  <div class="price" onmouseover="ColorPrice(this)" onmouseout="ColorPrice1(this)">${products[i].price}</div>
                  </a>
                  `;
               product.querySelector('a').addEventListener('click', function(){
                  showProductInfo(products[i]);
               });
         
               main.appendChild(product);
            }
         }
  function loaded() {
     let searchbox = document.getElementById('search');
     searchbox.addEventListener('keydown', function(key){
        if(key.key == 'Enter')
            search();
     });
 
     generateMenu();
     generateCard();
 
  }
  function ColorPrice(text){
     console.log('ПРивет');
     text.style.color = 'brown';
     text.style.fontWeight = 'blood';
  }
  function ColorPrice1(text){
     text.style.color = 'black';
     text.style.fontWeight = 'black';
  }


  