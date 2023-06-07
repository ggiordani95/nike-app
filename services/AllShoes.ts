interface Shoes {
    id: number;
    name: string;
    image: string;
    price: number;
    desc: string;
}

export function AllShoesData(): Promise<Array<Object>> {
    return new Promise<Array<Object>>((resolve) => {

            const shoes: Shoes[] = [
                {desc:'',price: 1219.99, id: 1543, name: 'Ambush X Air Force 1 Low', image: 'https://imgnike-a.akamaihd.net/768x768/025309IDA1.jpg'},     
                {desc:'',price: 899.99, id: 2354, name: 'Women`s Nike TC 7900 Lemon Chiffon', image: 'https://imgnike-a.akamaihd.net/360x360/02626851.jpg'},
                {desc:'',price: 687.90, id: 1653, name: 'Women`s Tech Hera Photon Dust', image: 'https://imgnike-a.akamaihd.net/360x360/02622851.jpg'},
                {desc:'',price: 789.99, id: 3752, name: 'Women`s Nike Air Huarache Craft Ocean Bliss', image: 'https://imgnike-a.akamaihd.net/360x360/02413551.jpg'},
                {desc:'',price: 599.99, id: 1888, name: 'Womens Dunk Low', image: 'https://imgnike-a.akamaihd.net/360x360/026329MT.jpg'},
                {desc:'',price: 1029.99, id: 2623, name: 'Tatum 1 Barber Shop', image: 'https://imgnike-a.akamaihd.net/360x360/02627651.jpg'},
                {desc:'',price: 1119.99, id: 1423, name: 'LeBron NXXT Gen I Promise', image: 'https://imgnike-a.akamaihd.net/360x360/02538915.jpg'}, 
                {desc:'',price: 1119.99, id: 2256, name: 'LeBron NXXT Gen White/Metallic Silver', image: 'https://imgnike-a.akamaihd.net/768x768/02548751.jpg'},
                {desc:'',price: 899.99, id: 1882, name: 'Air Jordan 1 Retro High OG', image: 'https://imgnike-a.akamaihd.net/360x360/02544315.jpg'},
                {desc:'',price: 899.99, id: 1843, name: 'Air Jordan 11', image: 'https://imgnike-a.akamaihd.net/360x360/024813P1.jpg'},
                {desc:'',price: 950.00, id: 1678, name: 'Air Jordan 11 Retro Low', image: 'https://imgnike-a.akamaihd.net/360x360/02373951.jpg'},
                {desc:'',price: 1199.99, id: 3174, name: 'Air Jordan 1 Zoom Air CMFT', image: 'https://imgnike-a.akamaihd.net/360x360/0244253X.jpg'},
                {desc:'',price: 1089.00, id: 3288, name: 'Air Jordan 1 Mid SE', image: 'https://imgnike-a.akamaihd.net/360x360/02468051.jpg'},
                {desc:'',price: 1299.99, id: 3423, name: 'Air Jordan 1 Zoom Comfort 2', image: 'https://imgnike-a.akamaihd.net/360x360/02467682.jpg'},
                {desc:'',price: 1099.99, id: 4543, name: 'Air Jordan 11 Retro', image: 'https://imgnike-a.akamaihd.net/360x360/02540115.jpg'},
                {desc:'',price: 899.99, id: 1256, name: 'Jordan 1 Mid', image: 'https://imgnike-a.akamaihd.net/360x360/0165115B.jpg'},
                {desc:'',price: 999.99, id: 1789, name: 'Nike Air Force 1 "07', image: 'https://imgnike-a.akamaihd.net/360x360/01113751.jpg'},
                {desc:'',price: 899.99, id: 1828, name: 'Nike Air Force 1 `07 LV8', image: 'https://imgnike-a.akamaihd.net/360x360/02458251.jpg'},
                {desc:'',price: 1099.99, id: 1824, name: 'Nike Air Force 1 Fontanka', image: 'https://imgnike-a.akamaihd.net/360x360/01365051.jpg'},
                {desc:'',price: 1099.99, id: 1823, name: 'Nike Air Force 1', image: 'https://imgnike-a.akamaihd.net/360x360/02543151.jpg'},
                {desc:'',price: 1199.99, id: 1782, name: 'Nike Air Force 1 React', image: 'https://imgnike-a.akamaihd.net/360x360/02311651.jpg'},
                {desc:'',price: 999.99, id: 1784, name: 'Nike Air Force 1 High `07 LV8 Move', image: 'https://imgnike-a.akamaihd.net/360x360/0246077T.jpg'},
                {desc:'',price: 999.99, id: 2987, name: 'Nike Air Force 1 Premium', image: 'https://imgnike-a.akamaihd.net/360x360/024587BP.jpg'},
                {desc:'',price: 1099.99, id: 2974, name: 'Nike Air Force 1 React 1.5', image: 'https://imgnike-a.akamaihd.net/360x360/013893ID.jpg'},
                {desc:'',price: 599.99, id: 1223, name: 'Dunk Low PS', image: 'https://imgnike-a.akamaihd.net/360x360/025339A1.jpg'},
                {desc:'',price: 659.99, id: 1154, name: 'Women`s Dunk Low SE', image: 'https://imgnike-a.akamaihd.net/360x360/023608ID.jpg'},
                {desc:'',price: 659.99, id: 4653, name: 'Dunk High Retro', image: 'https://imgnike-a.akamaihd.net/360x360/024377ID.jpg'},
                {desc:'',price: 649.99, id: 5752, name: 'Dunk High Retro Premium EMB', image: 'https://imgnike-a.akamaihd.net/360x360/023345A1.jpg'},
                {desc:'',price: 780.99, id: 5888, name: 'Dunk High 1985 SP', image: 'https://imgnike-a.akamaihd.net/360x360/013583ID.jpg'},
                {desc:'',price: 790.99, id: 4623, name: 'SB Dunk High x FAUST', image: 'https://imgnike-a.akamaihd.net/360x360/023481DD.jpg'},
                {desc:'',price: 699.99, id: 5543, name: 'Dunk High', image: 'https://imgnike-a.akamaihd.net/360x360/0234680L.jpg'},
                {desc:'',price: 699.99, id: 7256, name: 'Dunk HI Retro', image: 'https://imgnike-a.akamaihd.net/360x360/02444615.jpg'},
                {desc:'',price: 1299.99, id: 1922, name: 'Nike Air Max 1 Crepe', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-13.png'},
                {desc:'',price: 1299.99, id: 2834, name: 'Nike Air Max 1 Shima Shima', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-14.png'},
                {desc:'',price: 1299.99, id: 3488, name: 'Nike Air Max 1 Corduroy', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-15.png'},
                {desc:'',price: 1299.99, id: 3555, name: 'Nike Air Max Pulse Phantom', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-17.png'},
                {desc:'',price: 1299.99, id: 3053, name: 'Nike Air Max 1 `86 Big Bubble', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-16.png'},
                {desc:'',price: 1299.99, id: 2032, name: 'Nike Air Max Plus', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-3.png'},
                {desc:'',price: 1299.99, id: 1048, name: 'Nike Air Max TW', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-4.png'},
                {desc:'',price: 1299.99, id: 2230, name: 'Nike Air Max TW FR Next Nature', image: 'https://imgnike-a.akamaihd.net/branding/cdp-airmax-off/assets/img/carrossel-lancamentos/produto-8.png'},
            ]
            resolve(shoes)
        
        })
    }