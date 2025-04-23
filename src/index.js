import { homePage } from './components/homePage';
import { menuInfo } from './components/menu';
import { aboutUsInfo } from './components/aboutUs';

document.addEventListener('DOMContentLoaded', ()=>{
    homePage.display();
})


document.addEventListener('click', (e)=>{
    if(e.target.className === 'menu'){
        document.querySelector('.content').innerHTML = '';
        menuInfo.display();   
    }else if(e.target.className === 'home'){
        document.querySelector('.content').innerHTML = '';
        homePage.display();   
    }else if(e.target.className === 'aboutus'){
        document.querySelector('.content').innerHTML = '';
        aboutUsInfo.display();   
    }
})