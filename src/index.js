import { homePageText, imageFiles} from "./assets/data/restaurantData";
import './styles/main.css'

const homePage = (()=>{
    const content = document.querySelector('.content');
    const header  = document.querySelector('header');

    function displayContent(){
        const title = document.createElement('div');
        title.classList.add('title');
        const headerPara = document.createElement('p');
    
        title.textContent = 'Welcome to Urban Fork';
        headerPara.innerHTML = `
        <i>🥂 Good food. Good mood.</i> <br>
        <span>At <strong>The Urban Fork</strong>, we bring a touch of modern elegance to classic comfort food. Nestled in the heart of the city, we’re your neighborhood escape for mouth-watering meals, handcrafted drinks, and warm hospitality.</span>
        `;
        let titleSection = document.createElement('section');
        titleSection.innerHTML = `
        <div>Our Featured Dishes</div>`
        header.append(title, headerPara, titleSection);

        for(let i=0;i<homePageText.length;i++){
            let card = document.createElement('div');
            card.classList.add('card');
            let img = document.createElement('img');
            img.src = imageFiles[i];
            img.style.height = '200px';

            let caption = document.createElement('div');
            caption.classList.add('caption');
            caption.innerHTML = homePageText[i];
            content.append(card);
            card.append(img, caption);
        }
    }

    return {
        displayContent: displayContent(),
    }
})()

homePage.displayContent;