import { create } from 'zustand';

type Categories = {
    handleCategories: (categoryList: Array<Object>) => void;
}

const useCategoriesStore = create<Categories>((set)=>({

    categories: [],
    
    handleCategories: (categoryList: Array<Object>) => {
        set(state => ({ ...state, categoryList }))
    }
    
}))

export default useCategoriesStore