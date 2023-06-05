
interface Category {
    category_name: string;
    category_id: number;
}

export function Categories(): Promise<Array<Object>>{
    return new Promise<Array<Object>>((resolve) => {
        
            const categories: Category[] = [

                    {
                        category_id: 0,
                        category_name: 'SNKRS', 
                       
                    },
                    {
                        category_id: 1,
                        category_name: 'Air Jordan 1', 
                       
                    },
                    {
                        category_id: 2,
                        category_name: 'Air Force 1',
                       
                    },
                    {
                        category_id: 3,
                        category_name: 'Dunk',
                       
                    },
                    {
                        category_id: 4,
                        category_name: 'Air Max',
                    }
                ];

                resolve(categories)
    })
}


