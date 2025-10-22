import foodSvg from '../assets/food.svg'
import otherSvg from '../assets/others.svg'
import accommodationSvg from '../assets/accommodation.svg'
import transportSvg from '../assets/transport.svg'
import serviceSvg from '../assets/services.svg'

export const CATEGORIES = {
    food:{
        name:'Alimentacao',
        image:foodSvg
    },
    others:{
        name:'Outros',
        image:otherSvg
    },
    accommodation:{
        name:'Hospedagem',
        image:accommodationSvg
    },
    transport:{
        name: 'Transporte',
        image:transportSvg
    },
    service:{
        name:'Servicos',
        image:serviceSvg
    }

}

export const CATEGORIES_KEY = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>