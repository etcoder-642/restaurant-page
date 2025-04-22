import { homePageText, imageFiles} from "../assets/data/restaurantData";
import '../styles/main.css'


export const menuInfo = (()=>{

    function display(){
        const content = document.querySelector('.content');
        let contentContainer = document.createElement('div');
        contentContainer.classList.add('menu__contentContainer')
        const header  = document.createElement('header');
        content.appendChild(contentContainer);
    
        const title = document.createElement('div');
        title.classList.add('menu__title');
    
        title.textContent = 'Our Delectable Menu at Urban Fork';

        let titleSection = document.createElement('section');
        titleSection.innerHTML = `
        <div>Our Featured Dishes</div>
        </blockquote>`
        header.append(title, titleSection);
        contentContainer.appendChild(header);

        for(let i=0;i<homePageText.length;i++){
            let card = document.createElement('div');
            card.classList.add('menu__card');
            let img = document.createElement('img');
            img.src = imageFiles[i];
            img.style.height = '200px';

            let caption = document.createElement('div');
            caption.classList.add('menu__caption');
            caption.innerHTML = homePageText[i];

            contentContainer.append(card);
            card.append(img, caption);
        }
    }

    return {
        display,
    }
})()

