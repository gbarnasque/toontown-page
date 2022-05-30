import {
    Flunky,
    PencilPusher,
    Yesman,
    Micromanager,
    Downsizer,
    HeadHunter,
    CorporateRaider,
    TheBigCheese,
} from '../images/Bossbots/bossbots';

const logo = require('../images/logos/Bossbot.png');

const Bossbots = {
    logo: logo,
    cogs: [
        {
            name: 'Flunky',
            lowest: 1,
            max: 5,
            image: Flunky,
        },
        {
            name: 'Pencil Pusher',
            lowest: 2,
            max: 6,
            image: PencilPusher,
        }, 
        {
            name: 'Yesman',
            lowest: 3,
            max: 7,
            image: Yesman,
        }, 
        {
            name: 'Micromanager',
            lowest: 4,
            max: 8,
            image: Micromanager,
        }, 
        {
            name: 'Downsizer',
            lowest: 5,
            max: 9,
            image: Downsizer,
        }, 
        {
            name: 'HeadHunter',
            lowest: 6,
            max: 10,
            image: HeadHunter,
        }, 
        {
            name: 'Corporate Raider',
            lowest: 7,
            max: 11,
            image: CorporateRaider,
        }, 
        {
            name: 'The Big Cheese',
            lowest: 8,
            max: 12,
            image: TheBigCheese,
        }, 
    ]
};

export default Bossbots;