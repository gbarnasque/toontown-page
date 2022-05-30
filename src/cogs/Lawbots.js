import {
    BottomFeeder,
    Bloodsucker,
    DoubleTalker,
    AmbulanceChaser,
    Backstabber,
    SpinDoctor,
    LegalEagle,
    BigWig,
} from '../images/Lawbots/lawbots';

const logo = require('../images/logos/Lawbot.png');

const Lawbots = {
    logo: logo,
    cogs: [
        {
            name: 'Bottom Feeder',
            lowest: 1,
            max: 5,
            image: BottomFeeder,
        },
        {
            name: 'Bloodsucker',
            lowest: 2,
            max: 6,
            image: Bloodsucker,
        }, 
        {
            name: 'Double Talker',
            lowest: 3,
            max: 7,
            image: DoubleTalker,
        }, 
        {
            name: 'Ambulance Chaser',
            lowest: 4,
            max: 8,
            image: AmbulanceChaser,
        }, 
        {
            name: 'Backstabber',
            lowest: 5,
            max: 9,
            image: Backstabber,
        }, 
        {
            name: 'Spin Doctor',
            lowest: 6,
            max: 10,
            image: SpinDoctor,
        }, 
        {
            name: 'Legal Eagle',
            lowest: 7,
            max: 11,
            image: LegalEagle,
        }, 
        {
            name: 'Big Wig',
            lowest: 8,
            max: 12,
            image: BigWig,
        }, 
    ]
};

export default Lawbots;