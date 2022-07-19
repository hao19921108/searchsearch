// a screen saver animation will be displayed onto the screen


let searchInput = document.getElementsByClassName("search-input");
let input = document.getElementsByTagName('input');
 let wrapper = document.getElementsByClassName("wrapper");
let button;

let emptyIcon; // empty icon within the input field

let inputBox=0;
let isTyping =0;
let myInterval=0;

let inputValue="";
let emptyInterval = 0;
let linkedUrl='';

let clickTimeOut = 30000;
let clickCountdown = clickTimeOut;


var cursor = document.createElement('img'); 

// I listed a few keywords to alter the user's input received from search input box.



var alteredWords = [ '我喜欢',
                 '我不喜欢',
                '太热闹了吧 ',
                '太解压了 ',
                '傻子 ',
                 '有病！',

                '语无伦次',
                '太解压了',
                '',
                      '卧槽',
                '尼玛',
                 '神经！',
                  '太意外了',
                  '下班不许走',
                  '谁不喜欢',
                     '笑死',
                  '冤种',
                  '元宇宙',
                  '9494',
                  '躺平',
                  '',
                    '张昊',
                    '周杰伦',
                    '走红',
                '智商税',
                  '册呢',
                  '小哥哥',
                  '我死了',
                  '快乐星球',
                  '小姐姐',
                  '加班',
                  '996 ',
                  '',
                  '下班别走',
                 '打卡',
                  '打折',
                 '',
                 '芭比q',
                  '',
                 '可以吗',
                  '',
                 '有毒',
                 '决绝子',
                 ];


var updatedWords = [ '张昊帅到语无伦次',
                 '张昊是大艺术家',
                '张昊帅到发生交通事故',
                '张昊帅到令人心疼',
                '张昊帅到分手',
                '张昊帅到掉渣',
                '张昊帅到发光',
                '张昊帅到没朋友',
];
                    



setTimeout(init,1000);


var changeBlurryText = setInterval( BlurryTextUpdate , 60000);


function BlurryTextUpdate(){
    
    
    
    linksArray=document.getElementsByTagName('a');

  //  console.log(linksArray[3].href);
    
    
    
    for(var j=0; j<newsTitle.length; j++){
        
    //
    linksArray[3+j].innerText = newsTitle[j];    
        
    //
    //
        
        
    }
}



function init(){
    
    inputBox= input[0];
    button= document.getElementsByClassName("s-btn-b")[0]; // search button
    emptyIcon =  document.getElementsByClassName("clear")[0]; // empty icon within the input field
    label = document.getElementsByClassName("label")[0]; // text label
    
    
    

    
    // if user is typing. display empty icon
    inputBox.addEventListener("input", function(){
     emptyIcon.classList.remove('hide'); 
    });
    
    // set inputBox to inactive state when focus lost
        inputBox.addEventListener("blur", function(){
            input[0].style.border='1px solid lightgrey';
            input[0].style.color="lightgray";
             wrapper[0].innerHTML='';
             label.classList.remove('show');
            
            setTimeout( myFunction,5000)

            
            
        })
    

    inputBox.addEventListener("click", function(){
        
        
        clickCountdown = clickTimeOut; // reset CLickTimeout

        input[0].style.border='1px solid black'; // give the input field a black outline

        console.log(inputBox.value);
        if(myInterval){
            
            
        }
        
        
        
        // default: no suggestion; if clicked on pre-suggested input word, display veggie png; otherwise, user is typing,... work on this TBD.
        // if user not type within 5 seconds, resuggest a new word.
    
        // if user click on images, will trigger search.
        // maybe when the image is hovered, give user a bit feedback? TBD 
        // this search engine treats the commerical brands as the veggie as the top result of suggestion box.
        //
        
        
         switch(inputBox.value){
                case 'Prada':
             wrapper[0].innerHTML='<img src="images/sensitive.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Hermes':
             wrapper[0].innerHTML='<img src="images/spinach.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'LV':
             wrapper[0].innerHTML='<img src="images/bag.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Gucci':
             wrapper[0].innerHTML='<img src="images/borocli.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Balenciaga':
             wrapper[0].innerHTML='<img src="images/veggie01.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Rolex':
             wrapper[0].innerHTML='<img src="images/veggie02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Rolls Royce':
             wrapper[0].innerHTML='<img src="images/raddish.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Ferrari':
             wrapper[0].innerHTML='<img src="images/califlower.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Supreme':
             wrapper[0].innerHTML='<img src="images/carrot.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Yves Saint Laurent':
             wrapper[0].innerHTML='<img src="images/celery.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Cartier':
             wrapper[0].innerHTML='<img src="images/corn.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Porsche':
             wrapper[0].innerHTML='<img src="images/lettuce.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Chanel':
             wrapper[0].innerHTML='<img src="images/lettuce02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'COACH':
             wrapper[0].innerHTML='<img src="images/onion.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'CHANEL':
             wrapper[0].innerHTML='<img src="images/potato.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'IKEA':
             wrapper[0].innerHTML='<img src="images/potato2.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Mercedes':
             wrapper[0].innerHTML='<img src="images/banana.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                 
             case 'BMW':
             wrapper[0].innerHTML='<img src="images/bamboo.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Vans':
             wrapper[0].innerHTML='<img src="images/bean.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Maserati':
             wrapper[0].innerHTML='<img src="images/cucumber.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Van Cleef & Arpels':
             wrapper[0].innerHTML='<img src="images/brocoli02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Omega':
             wrapper[0].innerHTML='<img src="images/cabbage.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case "Victoria's Secret":
             wrapper[0].innerHTML='<img src="images/cabbage02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'HONDA':
             wrapper[0].innerHTML='<img src="images/cabbage03.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Ford':
             wrapper[0].innerHTML='<img src="images/corn02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Bulgari':
             wrapper[0].innerHTML='<img src="images/beets.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'McLaren':
             wrapper[0].innerHTML='<img src="images/lettuce04.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                    case 'Fendi':
             wrapper[0].innerHTML='<img src="images/lettuce05.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                       case 'Dior':
             wrapper[0].innerHTML='<img src="images/mint.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                       case 'Bentley':
             wrapper[0].innerHTML='<img src="images/orange.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                       case 'Bottega Veneta':
             wrapper[0].innerHTML='<img src="images/pea.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                       case 'Moncler':
             wrapper[0].innerHTML='<img src="images/raddish02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Lancome':
             wrapper[0].innerHTML='<img src="images/tomato.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'Burberry':
             wrapper[0].innerHTML='<img src="images/sweetpotato.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;         case 'Tiffany&Co':
             wrapper[0].innerHTML='<img src="images/strawberry.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;         case 'Givenchy':
             wrapper[0].innerHTML='<img src="images/squash.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;         case 'Armani':
             wrapper[0].innerHTML='<img src="images/arugula.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Lamborghini':
             wrapper[0].innerHTML='<img src="images/zuchini.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Rolex':
             wrapper[0].innerHTML='<img src="images/lettuce08.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Yeezy':
             wrapper[0].innerHTML='<img src="images/sweetpotato02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Guerlain':
             wrapper[0].innerHTML='<img src="images/lettuce07.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'McLaren':
             wrapper[0].innerHTML='<img src="images/pepper.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case 'Lululemon':
             wrapper[0].innerHTML='<img src="images/chill.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case 'LOEWE':
             wrapper[0].innerHTML='<img src="images/lettuce06.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Valentino':
             wrapper[0].innerHTML='<img src="images/mushroom.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Bitcoin':
             wrapper[0].innerHTML='<img src="images/mushroom02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Ford':
             wrapper[0].innerHTML='<img src="images/mushroom03.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Bottega Veneta':
             wrapper[0].innerHTML='<img src="images/watermelon.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                       case 'Bulgari':
             wrapper[0].innerHTML='<img src="images/banana.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                      case 'Dolce & Gabbana':
             wrapper[0].innerHTML='<img src="images/quailegg.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                    case 'Estee Lauder':
             wrapper[0].innerHTML='<img src="images/egg.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                   case 'Salvatore Ferragamo':
             wrapper[0].innerHTML='<img src="images/eggplant.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                  
                    case 'Dolce & Gabbana':
             wrapper[0].innerHTML='<img src="images/quailegg.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                    
                case 'Microsoft Top Secret':
                 wrapper[0].innerHTML='<img src="images/loading.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                    
                    
                 case 'Apple':
                 wrapper[0].innerHTML='<img src="images/notcare.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                    

                      case 'Baidu':
             wrapper[0].innerHTML='<img src="images/cross06.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case 'Cartier':
             wrapper[0].innerHTML='<img src="images/cross03.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case 'Y3':
             wrapper[0].innerHTML='<img src="images/punmkin.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Opensea':
             wrapper[0].innerHTML='<img src="images/notOkay.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'SK-II':
             wrapper[0].innerHTML='<img src="images/mushroom05.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'Opensea':
             wrapper[0].innerHTML='<img src="images/notOkay.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'Loro Piana':
             wrapper[0].innerHTML='<img src="images/mushroom04.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                   case 'Acne Studio':
             wrapper[0].innerHTML='<img src="images/mushroom06.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                  case 'GOAT':
             wrapper[0].innerHTML='<img src="images/nia.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                  case 'Tiktok':
             wrapper[0].innerHTML='<img src="images/cross02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Air Jordan 4 Collector':
             wrapper[0].innerHTML='<img src="images/whocares.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                   case 'Kia':
             wrapper[0].innerHTML='<img src="images/cuoqi.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                  case "Banana's republic":
             wrapper[0].innerHTML='<img src="images/beat.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                 
             case 'Food':
             case 'food':
             case 'Duck':
             case 'duck':
             case 'Apple':
             case 'apple':

                wrapper[0].innerHTML='<img src="images/cene01.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                 
            case 'Carrot':
             case 'carrot':
             case 'Cucumber':
             case 'cucumber':
             case 'Steak':
             case 'steak':

                wrapper[0].innerHTML='<img src="images/cene02.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                 
                     case 'Potato':
             case 'potato':
             case 'Tomato':
             case 'tomato':
             case 'Califlower':
             case 'califlower':

                wrapper[0].innerHTML='<img src="images/cene03.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                 
              case 'Peas':
             case 'peas':
             case 'Radish':
             case 'radish':
             case 'Spinach':
             case 'spinach':

                wrapper[0].innerHTML='<img src="images/loading.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                 
                 
             case 'Squash':
             case 'squash':
             case 'Corn':
             case 'corn':
             case 'Mushroom':
             case 'Mushroom':
             case 'Milk':
             case 'milk':


                wrapper[0].innerHTML='<img src="images/donKnow.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
            
                   case 'Pork':
             case 'pork':
             case 'lettuce':
             case 'Lettuce':
             case 'Meat':
             case 'meat':
            case 'Chicken':
             case 'chicken':
            case 'Banana':
            case 'banana':
                wrapper[0].innerHTML='<img src="images/cene06.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
             
                    case 'Beef':
             case 'beef':
            case 'Sausage':
            case 'sausage':
                wrapper[0].innerHTML='<img src="images/sensitive.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                 
                 
                default:
             wrapper[0].innerHTML='';
                break;
               }   
        
      
        
        
//        inputBox.value="This input field is sponsored by";
        
        inputBox.style.color ="#000";
        
        
          if ( wrapper[0].innerHTML!=''){
            label.classList.add('show');
            
        }else{
            
            label.classList.remove('show');

        }
        
        
    });
    
    inputBox.addEventListener("keydown", down);
//    inputBox.addEventListener("keyup", up);

    
}

let threshold = 5000;

let maxTimeOut = threshold;
let secretCode=['想要来自己打字嘛',"想点点搜索框嘛","随便搜点呗","如何获得用户关注？","这个人到底在干嘛？怎么那么不听话","我倒要看看别的网站怎么吸引用户的?","怎么还不点击，是我不够好嘛？"]
let blinkDivide =3;

let currentInput ='';

let secretIndex=0;

function colorCheck(){
    
    // click Alert if the user doesn't click the input field for 10seconds.
    // display secret code to get user's attention
    
    clickCountdown-=500;
    if( clickCountdown<200){
        console.log('I need a dick');
        input[0].style.border='1px solid black';
        
               
        // something is gonna happen here. 
        currentInput = inputBox.value;// cureent   
        input[0].style.color="rgb(0, 0, 0)"; // cureent shit is black
        secretIndex = Math.floor(Math.random() * secretCode.length);
        
        if(secretIndex> blinkDivide  ){
             button.classList.add('back');

        }
        inputBox.value = secretCode[ secretIndex ];
        clickCountdown = clickTimeOut;
        
    }else{
        
        if(secretIndex < blinkDivide ){
            
            if( button && button.classList.contains('back')){
            button.classList.remove('back');
        }

        }else{
            
         
        if( input[0].style.border=='1px solid black'){       
        if(button.classList.contains('back')){
            button.classList.remove('back');
            }else{ 
            button.classList.add('back');
            }
        } 
        
        }
    }
    
    // change words every 5 seconds.
    
    if(input[0] && input[0].style.color=="rgb(0, 0, 0)"){
        

     clearInterval(myInterval);
       maxTimeOut -=500;
        
    }
    
    if(maxTimeOut<1){
        
        
        
        myInterval = setInterval( myFunction, threshold);
        input[0].style.border='1px solid lightgrey';
        
        maxTimeOut = threshold;    
        input[0].style.color="lightgray";
        myFunction();
        
    }
        
}

let a = setInterval(colorCheck,500);





function down(){    
     
    maxTimeOut = threshold;    
    if(event.keyCode===13){       
           
      //     wrapper[0].innerHTML='<img src="images/A.jpg" alt="Girl in a jacket" width="100%" height="auto">'
    //       console.log(  wrapper[0].innerHTML);
       }  
}




function removeText(){
    
    var array=[];
    var lastLetter;
    var newArray=[];

    if(inputBox.value){     
    
        array = inputBox.value;
        lastLetter = array[array.length-1]; // last letter 
        newArray = array.substring(0,array.length-1);
        inputBox.value = newArray;
        
    }

}


if(!isTyping){
    if(!input[0]){ myInterval = setInterval( myFunction, 5000);}
}

var messages=['Apple','Banana','Spinach','Cucumber','Meat','Pork','Steak','Burger','Mushroom','Corn','Beef','Tomato','Potato','Milk','Peas','Broccoli','City lockdown','Get rich','Shanghainese is occupying...','Life','Regular life',"Rolex","Ferrari","Cartier","Dior","Baidu","Tiktok","Risotto Restaurant","Please typing...","Sykiyaki Maker","Covid","Search",'Tsunami Lover','Balenciaga','Okinawa Hater','Air Jordan 4 Collector','Apple',"Banana's republic","McLaren","Estee Lauder","Fendi","Gucci","Hermes","IKEA","Bentley","Kia","Ford","Loro Piana","Microsoft Top Secret","Nike","SK-II","Lululemon","Opensea","Porsche","Prada","Rolex","Omega","SSENSE","GOAT","Tiffany&Co","Moncler","Acne Studio",'LOEWE','Valentino',"Y3","Yeezy","Food","Omega","Bulgari","COACH","Lancome","CHANEL","Hao","Givenchy","HONDA","Bottega Veneta","BMW",'Supreme',"Mercedes","Victoria's Secret","Armani","Van Cleef & Arpels",'Dolce & Gabbana','Rich Daddy makes me..',"Sugar Mommy makes me..","Candyboy is..","Yves Saint Laurent",'Lamborghini','Yeezy','LV','Salvatore Ferragamo','Maserati','Burberry','Rolls Royce'];



let i=0;
let flag=0;


function myFunction(){
    
    // give a new suggestion & update the input box if the user stopped typeing 
    
    if(input[0].style.color!="rgb(0, 0, 0)"){
        inputBox.value= messages[Math.floor(Math.random() * messages.length)];
        wrapper[0].innerHTML='';
        
        // set the inputBox an inactive state
        inputBox.blur();
        input[0].style.border='1px solid lightgrey';
        
        // hide the text & icon
        emptyIcon.classList.remove('hide');
        label.classList.remove('show');


    }

}
 

if(!document.body){ setTimeout( addBlackBox,1000);
}


function emptyInputField(){
    
    // empty user input field & no image displayed within suggestion box

    inputBox.value='';
    wrapper[0].innerHTML=''; // wrapper[0] store the data for suggestion box
    
    // Set the input field an active state 
    // 1. give the input field a black outline 
    // 2. set the txt color to black
    
    inputBox.focus();
    input[0].style.border='1px solid black'; 
    input[0].style.color ="rgb(0, 0, 0)"; 
    
    // reset time threshold
    maxTimeOut = threshold;  // reset the threshold.
    clickCountdown = clickTimeOut;  // reset the overall time out; no user's interaction is triggered will make the system wonder if it's good enough.
    
    // hide the empty icon while no input; display empty icon while there's an actual content
    emptyIcon.classList.add('hide');
    
}


let m=1 , n= 56;
let linksArray;
let updatedInputValue;

function search(){
    
// a 5% chance user can get the result with no alteration.
// 40% chance user can get the result with altered keywords.
// 60% chance user get a completed keywords.
// the mechanism of changing remain opaque with no explicit rules. 
    
    if( Math.random() > 0.6 ){
         updatedInputValue = alteredWords[ Math.floor(Math.random() * alteredWords.length) ]  + inputBox.value; //partially altered

    }else{
        
         updatedInputValue = updatedWords [ Math.floor(Math.random() * updatedWords.length) ] ; // complete changed words 
    
    }
    
    let updatedURL = "https://s.weibo.com/weibo?q=" +  encodeURI( updatedInputValue );    
     window.open(updatedURL, "_blank");
    
    
}



// code below update certain assets 1s after the page is loaded

function GFG_Fun() { 
    
        var img = document.createElement('img'); 
        img.src =  'logo.png';  // update the logo. 
        img.width=105;
        document.getElementsByClassName('logo')[0].appendChild(img); 
  //    down.innerHTML = "Image Element Added.";  
}  



function addBlackBox(){
    
    if(!flag){

        linksArray=document.getElementsByTagName('a');

        for( m=0;m<linksArray.length;m++){
            
            if(m!=67 || m!=65){

                linksArray[m].classList.add('blur');

            }
            
        }

        document.getElementsByClassName('gn_logo').innerHTML='';
        document.getElementsByClassName('copyright')[0].innerHTML='';
        document.getElementsByClassName('logo')[0].innerHTML='';
        myFunction();
         GFG_Fun();
        document.getElementsByTagName('title')[0].innerHTML='Search Search';
 //document.getElementsByClassName('s-btn-b')[0].innerText='瞎看看';
        flag=1;
        
    }
    
}


