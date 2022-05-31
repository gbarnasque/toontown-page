import {
    ColdCaller,
    Telemarketer,
    NameDropper,
    GladHander,
    MoverShaker,
    TwoFace,
    TheMingler,
    MrHollywood,
} from '../images/Sellbots/sellbots';

const logo = require('../images/logos/Sellbot.png');

const Sellbots = {
    logo: logo,
    cogs: [
        {
            name: 'Cold Caller',
            lowest: 1,
            max: 5,
            image: ColdCaller,
        },
        {
            name: 'Telemarketer',
            lowest: 2,
            max: 6,
            image: Telemarketer,
        }, 
        {
            name: 'Name Dropper',
            lowest: 3,
            max: 7,
            image: NameDropper,
        }, 
        {
            name: 'Glad Hander',
            lowest: 4,
            max: 8,
            image: GladHander,
        }, 
        {
            name: 'Mover & Shaker',
            lowest: 5,
            max: 9,
            image: MoverShaker,
        }, 
        {
            name: 'Two-Face',
            lowest: 6,
            max: 10,
            image: TwoFace,
        }, 
        {
            name: 'The Mingler',
            lowest: 7,
            max: 11,
            image: TheMingler,
        }, 
        {
            name: 'Mr. Hollywood',
            lowest: 8,
            max: 12,
            image: MrHollywood,
        }, 
    ]
};

export default Sellbots;