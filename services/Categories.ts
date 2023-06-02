
export function Categories(): Promise<Array<Object>>{
    return new Promise<Array<Object>>((resolve) => {
        
            const categories = [
                    {category_name: 'SNKRS', 
                    shoes : ['LeBron NXXT Gen I Promise','Women`s Nike TC 7900 Lemon Chiffon', 'Women`s Tech Hera Photon Dust', 'Women`s Nike Air Huarache Craft Ocean Bliss', 'Womens Dunk Low', 'Tatum 1 Barber Shop', 'Ambush X Air Force 1 Low', 'LeBron NXXT Gen White/Metallic Silver'] 
                    },
                    {category_name: 'Air Jordan 1', 
                     shoes : ['Air Jordan 1 Retro High OG','Air Jordan 11', 'Air Jordan 11 Retro Low', 'Air Jordan 1 Zoom Air CMFT', 'Air Jordan 1 Mid SE', 'Air Jordan 1 Zoom Comfort 2', 'Air Jordan 11 Retro', 'Jordan 1 Mid'] 
                    },
                    {category_name: 'Air Force 1',
                        shoes : ['Nike Air Force 1 "07','Nike Air Force 1 `07 LV8', 'Nike Air Force 1 Fontanka', 'Nike Air Force 1', 'Nike Air Force 1 React', 'Nike Air Force 1 High `07 LV8 Move', 'Nike Air Force 1 Fontanka', 'Nike Air Force 1"07 LV8'] 
                    },
                    {category_name: 'Dunk',
                        shoes : ['Dunk Low PS','Women`s Dunk Low SE', 'Nike Dunk High Retro', 'Nike Dunk High Retro Premium EMB', 'Nike Dunk High 1985 SP', 'Nike SB Dunk High x FAUST', 'Nike Dunk High']
                    },
                    {category_name: 'Air Max',
                        shoes : ['Nike Air Max 1 Crepe','Nike Air Max 1 Shima Shima', 'Nike Air Max 1 Corduroy', 'Nike Air Max Pulse Phantom', 'Nike Air Max 1 `86 Big Bubble', 'Nike Air Max Plus', 'Nike Air Max TW', 'Nike Air Max TW FR Next Nature']
                    }
                ];

                resolve(categories)
    })
}
