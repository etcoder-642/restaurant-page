import { homePage } from './components/homePage';
import { menuInfo } from './components/menu';


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
    }
})