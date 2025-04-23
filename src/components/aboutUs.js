import { contactInfo } from "../assets/data/aboutUsData";
import { contactTitles } from "../assets/data/aboutUsData";

export const aboutUsInfo = (()=>{

    function display(){
        const content = document.querySelector('.content');
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('aboutUs__contentContainer');
        const header  = document.createElement('header');
        contentContainer.appendChild(header);
        content.appendChild(contentContainer);
    
        const mainTitle = document.createElement('div');
        mainTitle.classList.add('aboutUs__title');
        const headerPara = document.createElement('p');
    
        mainTitle.textContent = 'About Urban Fork';
        headerPara.innerHTML = `
        <i>🥂 More Than Just a Meal, It's an Experience.</i> <br>
        <span><strong> Urban Fork</strong> was born from a passion for bringing fresh, flavorful food to the heart of the city. <br>
        From our kitchen to your table, we strive to provide an exceptional dining experience, whether you're joining us for a casual lunch, a special dinner, or enjoying our food in the comfort of your own home.
        `;
        let titleSection = document.createElement('section');
        titleSection.innerHTML = `
        <div>Contact Us</div>`
        header.append(mainTitle, headerPara, titleSection);

        let cardContainer = document.createElement('div');
        cardContainer.classList.add('aboutUs__cardContainer')
        for(let i=0;i<contactInfo.length;i++){
            let card = document.createElement('div');
            card.classList.add('aboutUs__card');
            
            let label = document.createElement('label');
            label.classList.add('aboutUs__label')
            label.innerHTML = contactTitles[i];
    
            let caption = document.createElement('div');
            caption.classList.add('aboutUs__caption');
            caption.innerHTML = contactInfo[i];
            cardContainer.append(card);
            card.append(label, caption);
        }
        contentContainer.appendChild(cardContainer);
    }

    return {
        display,
    }
})()
