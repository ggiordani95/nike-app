interface Shoes {
    id: number;
    name: string;
    image: string;
}

export function ShoesFromCategory(Category: number): Promise<Array<Object>> {
    return new Promise<Array<Object>>((resolve) => {

        if(Category == 0){
            const shoes: Shoes[] = [
                {id: 1543, name: 'Ambush X Air Force 1 Low', image: 'https://imgnike-a.akamaihd.net/768x768/025309IDA1.jpg'},     
                {id: 2354, name: 'Women`s Nike TC 7900 Lemon Chiffon', image: 'https://imgnike-a.akamaihd.net/360x360/02626851.jpg'},
                {id: 1653, name: 'Women`s Tech Hera Photon Dust', image: 'https://imgnike-a.akamaihd.net/360x360/02622851.jpg'},
                {id: 3752, name: 'Women`s Nike Air Huarache Craft Ocean Bliss', image: 'https://imgnike-a.akamaihd.net/360x360/02413551.jpg'},
                {id: 1888, name: 'Womens Dunk Low', image: 'https://imgnike-a.akamaihd.net/360x360/026329MT.jpg'},
                {id: 2623, name: 'Tatum 1 Barber Shop', image: 'https://imgnike-a.akamaihd.net/360x360/02627651.jpg'},
                {id: 1423, name: 'LeBron NXXT Gen I Promise', image: 'https://imgnike-a.akamaihd.net/360x360/02538915.jpg'}, 
                {id: 2256, name: 'LeBron NXXT Gen White/Metallic Silver', image: 'https://imgnike-a.akamaihd.net/768x768/02548751.jpg'},
            ];
            resolve(shoes)
        }
        if(Category == 1){
            const shoes: Shoes[] = [
                {id: 1882, name: 'Air Jordan 1 Retro High OG', image: 'https://imgnike-a.akamaihd.net/360x360/02544315.jpg'},
                {id: 1843, name: 'Air Jordan 11', image: 'https://imgnike-a.akamaihd.net/360x360/024813P1.jpg'},
                {id: 1678, name: 'Air Jordan 11 Retro Low', image: 'https://imgnike-a.akamaihd.net/360x360/02373951.jpg'},
                {id: 3174, name: 'Air Jordan 1 Zoom Air CMFT', image: 'https://imgnike-a.akamaihd.net/360x360/0244253X.jpg'},
                {id: 3288, name: 'Air Jordan 1 Mid SE', image: 'https://imgnike-a.akamaihd.net/360x360/02468051.jpg'},
                {id: 3423, name: 'Air Jordan 1 Zoom Comfort 2', image: 'https://imgnike-a.akamaihd.net/360x360/02467682.jpg'},
                {id: 4543, name: 'Air Jordan 11 Retro', image: 'https://imgnike-a.akamaihd.net/360x360/02540115.jpg'},
                {id: 1256, name: 'Jordan 1 Mid', image: 'https://imgnike-a.akamaihd.net/360x360/0165115B.jpg'},
            ];
            resolve(shoes)
        }
        if(Category == 2){
            const shoes: Shoes[] = [
                {id: 1789, name: 'Nike Air Force 1 "07', image: 'https://imgnike-a.akamaihd.net/360x360/01113751.jpg'},
                {id: 1828, name: 'Nike Air Force 1 `07 LV8', image: 'https://imgnike-a.akamaihd.net/360x360/02458251.jpg'},
                {id: 1824, name: 'Nike Air Force 1 Fontanka', image: 'https://imgnike-a.akamaihd.net/360x360/01365051.jpg'},
                {id: 1823, name: 'Nike Air Force 1', image: 'https://imgnike-a.akamaihd.net/360x360/02543151.jpg'},
                {id: 1782, name: 'Nike Air Force 1 React', image: 'https://imgnike-a.akamaihd.net/360x360/02311651.jpg'},
                {id: 1784, name: 'Nike Air Force 1 High `07 LV8 Move', image: 'https://imgnike-a.akamaihd.net/360x360/0246077T.jpg'},
                {id: 2987, name: 'Nike Air Force 1 Premium', image: 'https://imgnike-a.akamaihd.net/360x360/024587BP.jpg'},
                {id: 2974, name: 'Nike Air Force 1 React 1.5', image: 'https://imgnike-a.akamaihd.net/360x360/013893ID.jpg'},
            ];
            resolve(shoes)
        }
        if(Category == 3){
            const shoes: Shoes[] = [
                {id: 1223, name: 'Dunk Low PS', image: 'https://imgnike-a.akamaihd.net/360x360/025339A1.jpg'},
                {id: 1154, name: 'Women`s Dunk Low SE', image: 'https://imgnike-a.akamaihd.net/360x360/023608ID.jpg'},
                {id: 4653, name: 'Dunk High Retro', image: 'https://imgnike-a.akamaihd.net/360x360/024377ID.jpg'},
                {id: 5752, name: 'Dunk High Retro Premium EMB', image: 'https://imgnike-a.akamaihd.net/360x360/023345A1.jpg'},
                {id: 5888, name: 'Dunk High 1985 SP', image: 'https://imgnike-a.akamaihd.net/360x360/013583ID.jpg'},
                {id: 4623, name: 'SB Dunk High x FAUST', image: 'https://imgnike-a.akamaihd.net/360x360/023481DD.jpg'},
                {id: 5543, name: 'Dunk High', image: 'https://imgnike-a.akamaihd.net/360x360/0234680L.jpg'},
                {id: 7256, name: 'Dunk HI Retro', image: 'https://imgnike-a.akamaihd.net/360x360/02444615.jpg'},
            ];
            resolve(shoes)
        }
        if(Category == 4){
            const shoes: Shoes[] = [
                {id: 1922, name: 'Nike Air Max 1 Crepe', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-13.png'},
                {id: 2834, name: 'Nike Air Max 1 Shima Shima', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-14.png'},
                {id: 3488, name: 'Nike Air Max 1 Corduroy', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-15.png'},
                {id: 3555, name: 'Nike Air Max Pulse Phantom', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-17.png'},
                {id: 3053, name: 'Nike Air Max 1 `86 Big Bubble', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-16.png'},
                {id: 2032, name: 'Nike Air Max Plus', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-3.png'},
                {id: 1048, name: 'Nike Air Max TW', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-4.png'},
                {id: 2230, name: 'Nike Air Max TW FR Next Nature', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-8.png'},
            ];
            resolve(shoes)
        }
        
    })
}