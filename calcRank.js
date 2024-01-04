function balance(victory, loses){
    return (victory - loses)
}

function newRank(balance){
    switch(true){
        case balance <= 10:
        return "Ferro"

        case balance <= 20:
        return "Bronze"
        
        case balance <= 50:
        return "Prata"

        case balance <= 80:
        return "Ouro"

        case balance <= 90:
        return "Diamante"

        case balance <= 100:
        return "Lendário"

        case balance >= 101:
        return "Imortal"        
        
        //sei que é desnecessario, já que,
        //nunca vai cair nessa condição, mas quero colocar um default
        default:
        return "Unranked"
    }

}

function main(){
    const hero = {victory: 105, loses: 20};

    let heroBalance = balance(hero.victory, hero.loses)
    let currentRank = newRank(heroBalance)
    console.log(`O Herói tem saldo de ${heroBalance} e está no nível ${currentRank}`)
}

main()