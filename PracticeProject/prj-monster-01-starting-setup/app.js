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
            return {width : this.monsterHealthOutOf100 + '%'};
        },
        playerHealthBarPercentageWidth()
        {
            return {width: this.playerHealthOutOf100 + '%'};
        },
        playerCanUseSpecialAttack()
        {
            return ((this.currentRound) % 3) === 0;
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
        } 
        monsterHealthOutOf100(value)
        {
            if (value <= 0 && this.monsterHealthOutOf100 <= 0)
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
        }
    },
});

app.mount("#game");