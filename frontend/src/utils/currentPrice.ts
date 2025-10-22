export function currentPrice(value:number):string{
    const price = Intl.NumberFormat('pt-br',{
        style:'currency',
        currency: 'BRL'
    })

    return price.format(value).replace('R$','')
}