function getRandomInteger(min,max)
{
    return Math.floor((Math.random() * (max - min) + min)); 
};


const app = Vue.createApp({
    data(){
        return {
            monsterHealthOutOf100: 100,
            playerHealthOutOf100: 100,
            previousMovesList: [],
            currentRound: 0,
            gameResult: null,
        };
    },
    computed: {
        monsterHealthBarPercentageWidth()
        {
            if (this.monsterHealthOutOf100 < 0)
            {
                return {width : '0%'};
            }
            return {width : this.monsterHealthOutOf100 + '%'};
        },
        playerHealthBarPercentageWidth()
        {
            if (this.playerHealthOutOf100 < 0)
            {
                return {width : '0%'};
            }
            return {width: this.playerHealthOutOf100 + '%'};
        },
        playerCanUseSpecialAttack()
        {
            return ((this.currentRound) % 3) === 0;
        },
        gameEnded()
        {
            return (this.gameResult != null);
        }
    },
    watch: {
        playerHealthOutOf100(value)
        {
            if (value <= 0 && this.monsterHealthOutOf100 <= 0)
            {
                this.gameResult = "draw";
            }
            else if (value <= 0)
            {
                this.gameResult = "loss";
            }
        }, 
        monsterHealthOutOf100(value)
        {
            if (value <= 0 && this.playerHealthOutOf100 <= 0)
            {
                this.gameResult = "draw";
            }   
            else if (value <= 0)
            {
                this.gameResult = "victory";
            }
        }      
    },
    methods: {
        startNewGame(){
            this.monsterHealthOutOf100 = 100;
            this.playerHealthOutOf100 = 100;
            this.previousMovesList = [];
            this.gameResult = null;
        },
        attackMonster()
        {
            this.currentRound++;
            const attackValue = getRandomInteger(min=5,max=12);
            this.monsterHealthOutOf100 -= attackValue;
            this.previousMovesList.push(`Player attacked Monster, dealing ${attackValue} damage...`);
            this.attackPlayer();
        },
        attackPlayer()
        {
            const attackValue = getRandomInteger(min=8,max=14);
            this.playerHealthOutOf100 -= attackValue;
            this.previousMovesList.push(`Monster attacked Player, dealing ${attackValue} damage!!`);
        },
        specialAttackMonster()
        {
            this.currentRound++;
            const specialAttackValue = getRandomInteger(min=10,max=20);
            this.monsterHealthOutOf100 -= specialAttackValue;
            this.previousMovesList.push(`Player unleashed a Special Attack on the Monster, dealing ${specialAttackValue} damage!!`);
            this.attackPlayer();
        },
        healPlayer()
        {
            this.currentRound++;
            const healValue = getRandomInteger(min=5,max=15);
            if (this.playerHealth + healValue > 100)
            {
            this.playerHealthOutOf100 = 100; 
            }
            else {
            this.playerHealthOutOf100 += healValue;
            }
            this.previousMovesList.push(`Player healed, regaining ${healValue}% of their health!!`);
            this.healMonster();
        },
        healMonster()
        {
            const healValue = getRandomInteger(min=3,max=7);
            this.monsterHealthOutOf100 += healValue;
            this.previousMovesList.push(`Monster healed, regaining ${healValue}% of their health...`);
        },
        surrender()
        {
            this.gameResult = "loss";
        }
    },
});

app.mount("#game");