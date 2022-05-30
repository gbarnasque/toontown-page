import {
    ShortChange,
    PennyPincher,
    Tightwad,
    BeanCounter,
    NumberCruncher,
    MoneyBags,
    LoanShark,
    RobberBaron,
} from '../images/Cashbots/cashbots';

const logo = require('../images/logos/Cashbot.png');

const Lawbots = {
    logo: logo,
    cogs: [
        {
            name: 'Short Change',
            lowest: 1,
            max: 5,
            image: ShortChange,
        },
        {
            name: 'Penny Pincher',
            lowest: 2,
            max: 6,
            image: PennyPincher,
        }, 
        {
            name: 'Tightwad',
            lowest: 3,
            max: 7,
            image: Tightwad,
        }, 
        {
            name: 'Bean Counter',
            lowest: 4,
            max: 8,
            image: BeanCounter,
        }, 
        {
            name: 'Number Cruncher',
            lowest: 5,
            max: 9,
            image: NumberCruncher,
        }, 
        {
            name: 'Money Bags',
            lowest: 6,
            max: 10,
            image: MoneyBags,
        }, 
        {
            name: 'Loan Shark',
            lowest: 7,
            max: 11,
            image: LoanShark,
        }, 
        {
            name: 'Robber Baron',
            lowest: 8,
            max: 12,
            image: RobberBaron,
        }, 
    ]
};

export default Lawbots;