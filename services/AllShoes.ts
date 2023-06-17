interface Shoes {
    id: number;
    name: string;
    image: string;
    price: number;
    desc: string;
}

export function AllShoesData(isIdSearch: boolean, sneakerId: number): Promise<Array<Object>> {
    return new Promise<Array<Object>>((resolve) => {

            const shoes: Shoes[] | undefined = [
                {id: 1543, name: 'Ambush X Air Force 1 Low', image: 'https://imgnike-a.akamaihd.net/768x768/025309IDA1.jpg',desc:'Transite entre os mundos no AF1 x AMBUSH. A designer de moda e diretora criativa visionária Yoon Ahn aumenta o volume no visual icônico com tons ousados e toques coloridos inspirados em espaços techno.',price: 1219.99, },     
                {id: 2354, name: 'Women`s Nike TC 7900 Lemon Chiffon', image: 'https://imgnike-a.akamaihd.net/360x360/02626851.jpg',desc:'Materiais mistos e um gráfico oculto na palmilha permitem que você entre em novas aventuras. Detalhes em tecido e detalhes em borracha no calcanhar dão um visual robusto. Mas não se preocupe com o passeio - uma entressola exagerada e amortecimento de espuma macia sob os pés ajudam a mantê-lo confortável o dia todo.',price: 899.99,},
                {id: 1653, name: 'Women`s Tech Hera Photon Dust', image: 'https://imgnike-a.akamaihd.net/360x360/02622851.jpg', desc:'Quando você não conseguir usar chinelos, use-os. O Tech Hera parece um abraço para seus pés, com tudo, desde um colarinho confortável até uma entressola elevada para conforto o dia todo. A camurça peluda torna seu visual ainda mais aconchegante, enquanto o design ondulado da entressola o mantém interessante. Seu design durável resiste perfeitamente ao uso diário - o que é perfeito, porque você definitivamente vai querer usá-los todos os dias.',price: 687.90,},
                {id: 3752, name: 'Women`s Nike Air Huarache Craft Ocean Bliss', image: 'https://imgnike-a.akamaihd.net/360x360/02413551.jpg',desc:'Quando ele se encaixa tão bem e tem uma aparência tão boa, não há dúvida - você está liderando o ataque. Desde o tecido elástico que envolve os pés até a armação do calcanhar esportiva e com suporte, o Huarache Craft remasteriza tudo o que você mais ama no tênis icônico. Além disso, sua entressola de espuma macia e a parte superior incrivelmente macia dão aos seus pés o direito de se gabar.',price: 789.99,},
                {id: 1888, name: 'Womens Dunk Low', image: 'https://imgnike-a.akamaihd.net/360x360/026329MT.jpg',desc:'Criado para as quadras, mas levado para as ruas, o ícone do basquete dos anos 80 retorna com detalhes clássicos e um toque retrô. Canalizando o estilo vintage de volta para as ruas, sua gola acolchoada e decotada permite que você leve seu jogo para qualquer lugar - com conforto.',price: 599.99, },
                {id: 2623, name: 'Tatum 1 Barber Shop', image: 'https://imgnike-a.akamaihd.net/360x360/02627651.jpg',desc:'É aquela sensação de um corte novo - aquele frescor de primeira linha. Jayson conhece bem e diz melhor: "Quando recebo um corte, acho que estou entre os 5 primeiros." Canalize essa confiança na quadra com um Tatum 1 que parece tão elegante quanto o seu fade. Os neutros facilitam o uso, enquanto os detalhes em vermelho e azul brilhantes homenageiam o clássico poste de barbearia. A aba para puxar a língua grita o filho de Jay, Deuce. E as 5 estrelas no calcanhar? Essa é a sua deixa para se sentir tão bem quanto parece.',price: 1029.99, },
                {id: 1423, name: 'LeBron NXXT Gen I Promise', image: 'https://imgnike-a.akamaihd.net/360x360/02538915.jpg',desc:'Seja você um saltador do tipo enterrada ou um jogador que fica abaixo da borda vagando pela linha de base, sinta-se mais rápido, mais baixo na quadra e seguro no LeBron NXXT Gen. Nós o adaptamos especificamente para atender às demandas do ritmo acelerado do jogo, para que você possa ficar à frente da oposição com sua velocidade e força em todas as direções.',price: 1119.99, }, 
                {id: 2256, name: 'LeBron NXXT Gen White/Metallic Silver', image: 'https://imgnike-a.akamaihd.net/768x768/02548751.jpg', desc:'Seja você um saltador do tipo enterrada ou uma maravilha abaixo da cesta vagando pela linha de base, sinta-se mais rápido, mais baixo na quadra e seguro no LeBron NXXT Gen. Nós o adaptamos especificamente para atender às demandas do ritmo acelerado de hoje jogo, para que você possa ficar à frente da oposição com sua velocidade e força em todas as direções.', price: 1019.99,},
                {id: 1882, name: 'Air Jordan 1 Retro High OG', image: 'https://imgnike-a.akamaihd.net/360x360/02544315.jpg',desc:'Não há necessidade de pedir carona, o AJ1 "Táxi" o levará aonde você precisa ir. Vestindo o amarelo Taxi no toe, calcanhar e sola contra sobreposições pretas, esta versão clássica do tênis que lançou a linha de assinatura de MJ parece em casa nas ruas da sua cidade.',price: 899.99, },
                {id: 1843, name: 'Air Jordan 11', image: 'https://imgnike-a.akamaihd.net/360x360/024813P1.jpg',desc:'Vamos direto ao ponto - o AJ11 é de todos os tempos. MJ ganhou 72 jogos e um título enquanto os usava. Agora, o ícone retorna nas cores clássicas de Chicago: Varsity Red e White.',price: 899.99, },
                {id: 1678, name: 'Air Jordan 11 Retro Low', image: 'https://imgnike-a.akamaihd.net/360x360/02373951.jpg',desc:'Trinta e cinco anos atrás, o AJ3 apareceu, apresentando ao mundo a estampa de elefante em Cement Grey. Para comemorar esse marco, estamos trazendo para você um AJ11 na mesma colorway épica. Mantivemos todos os recursos do AJ11 que você conhece e adora, desde o cabedal em mesh até o couro envernizado e o perfil elegante e pronto para tudo. E aqueles detalhes em University Blue?',price: 950.00, },
                {id: 3174, name: 'Air Jordan 1 Zoom Air CMFT', image: 'https://imgnike-a.akamaihd.net/360x360/0244253X.jpg',desc:'Junte-se à celebração no AJ1 Zoom Comfort. Esta edição é inspirada nas tradicionais velas colocadas nas oferendas durante o Día de Muertos, ajudando a guiar as almas dos falecidos de volta para casa. O design festivo inclui camurça premium, um gráfico vibrante de calêndula mexicana e um padrão ricamente texturizado no colarinho.',price: 1199.99, },
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

            if(isIdSearch){
                const returningShoes:any = shoes.find((sneaker) => sneaker.id === sneakerId);
                resolve(returningShoes);
            }
            
            resolve(shoes)
        
        })
    }