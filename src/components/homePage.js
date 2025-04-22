import { servicesInfo } from "../assets/data/mainData";
import { servicesLegend } from "../assets/data/mainData";

export const homePage = (()=>{

    function display(){
        const content = document.querySelector('.content');
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('homePage__contentContainer');
        const header  = document.createElement('header');
        contentContainer.appendChild(header);
        content.appendChild(contentContainer);
    
        const mainTitle = document.createElement('div');
        mainTitle.classList.add('homePage__title');
        const headerPara = document.createElement('p');
    
        mainTitle.textContent = 'Welcome to Urban Fork';
        headerPara.innerHTML = `
        <i>🥂 Good food. Good mood.</i> <br>
        <span>At <strong>The Urban Fork</strong>, we bring a touch of modern elegance to classic comfort food. Nestled in the heart of the city, we’re your neighborhood escape for mouth-watering meals, handcrafted drinks, and warm hospitality.</span>
        `;
        let titleSection = document.createElement('section');
        titleSection.innerHTML = `
        <div>Our Values and Services</div>`
        header.append(mainTitle, headerPara, titleSection);

        let cardContainer = document.createElement('div');
        cardContainer.classList.add('homePage__cardContainer')
        for(let i=0;i<servicesInfo.length;i++){
            let card = document.createElement('div');
            card.classList.add('homePage__card');
            
            let label = document.createElement('label');
            label.innerHTML = servicesLegend[i];
    
            let caption = document.createElement('div');
            caption.classList.add('homePage__caption');
            caption.innerHTML = servicesInfo[i];
            cardContainer.append(card);
            card.append(label, caption);
        }
        contentContainer.appendChild(cardContainer);
    }

    return {
        display,
    }
})()
