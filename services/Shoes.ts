interface Shoes {
    id: number;
    name: string;
    image: string;
}

export function ShoesFromCategory(Category: number): Promise<Array<Object>> {
    return new Promise<Array<Object>>((resolve) => {

        if(Category == 0){
            const shoes: Shoes[] = [
                {id: 1423, name: 'LeBron NXXT Gen I Promise', image: 'https://imgnike-a.akamaihd.net/360x360/02538915.jpg'},                
                {id: 2354, name: 'Women`s Nike TC 7900 Lemon Chiffon', image: ''},
                {id: 1653, name: 'Women`s Tech Hera Photon Dust', image: ''},
                {id: 3752, name: 'Women`s Nike Air Huarache Craft Ocean Bliss', image: ''},
                {id: 1888, name: 'Womens Dunk Low', image: ''},
                {id: 2623, name: 'Tatum 1 Barber Shop', image: ''},
                {id: 1543, name: 'Ambush X Air Force 1 Low', image: ''},
                {id: 2256, name: 'LeBron NXXT Gen White/Metallic Silver', image: ''},
            ];
            resolve(shoes)
        }
        if(Category == 1){
            const shoes: Shoes[] = [
                {id: 1882, name: 'Air Jordan 1 Retro High OG', image: ''},
                {id: 1843, name: 'Air Jordan 11', image: ''},
                {id: 1678, name: 'Air Jordan 11 Retro Low', image: ''},
                {id: 3174, name: 'Air Jordan 1 Zoom Air CMFT', image: ''},
                {id: 3288, name: 'Air Jordan 1 Mid SE', image: ''},
                {id: 3423, name: 'Air Jordan 1 Zoom Comfort 2', image: ''},
                {id: 4543, name: 'Air Jordan 11 Retro', image: ''},
                {id: 1256, name: 'Jordan 1 Mid', image: ''},
            ];
            resolve(shoes)
        }
        if(Category == 2){
            const shoes: Shoes[] = [
                {id: 1789, name: 'Nike Air Force 1 "07', image: ''},
                {id: 1828, name: 'Nike Air Force 1 `07 LV8', image: ''},
                {id: 1824, name: 'Nike Air Force 1 Fontanka', image: ''},
                {id: 1823, name: 'Nike Air Force 1', image: ''},
                {id: 1782, name: 'Nike Air Force 1 React', image: ''},
                {id: 1784, name: 'Nike Air Force 1 High `07 LV8 Move', image: ''},
                {id: 2987, name: 'Nike Air Force 1 Premium', image: ''},
                {id: 2974, name: 'Nike Air Force 1 React 1.5', image: ''},
            ];
            resolve(shoes)
        }
        if(Category == 3){
            const shoes: Shoes[] = [
                {id: 1223, name: 'Dunk Low PS', image: ''},
                {id: 1154, name: 'Women`s Dunk Low SE', image: ''},
                {id: 4653, name: 'Dunk High Retro', image: ''},
                {id: 5752, name: 'Dunk High Retro Premium EMB', image: ''},
                {id: 5888, name: 'Dunk High 1985 SP', image: ''},
                {id: 4623, name: 'SB Dunk High x FAUST', image: ''},
                {id: 5543, name: 'Dunk High', image: ''},
                {id: 7256, name: 'Dunk HI Retro', image: ''},
            ];
            resolve(shoes)
        }
        if(Category == 4){
            const shoes: Shoes[] = [
                {id: 1922, name: 'Nike Air Max 1 Crepe', image: ''},
                {id: 2834, name: 'Nike Air Max 1 Shima Shima', image: ''},
                {id: 3488, name: 'Nike Air Max 1 Corduroy', image: ''},
                {id: 3555, name: 'Nike Air Max Pulse Phantom', image: ''},
                {id: 3053, name: 'Nike Air Max 1 `86 Big Bubble', image: ''},
                {id: 2032, name: 'Nike Air Max Plus', image: ''},
                {id: 1048, name: 'Nike Air Max TW', image: ''},
                {id: 2230, name: 'Nike Air Max TW FR Next Nature', image: ''},
            ];
            resolve(shoes)
        }
        
    })
}