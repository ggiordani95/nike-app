import { create } from 'zustand';

type Theme = {
    isDarkMode: boolean;
    handleColor: (isDark: boolean) => void;
}

const useThemeStore = create<Theme>((set)=>({

    isDarkMode: true,

    handleColor: (isDark: boolean) => {
        set(state => ({ ...state, isDarkMode: isDark }))
    }
    
}))

export default useThemeStore