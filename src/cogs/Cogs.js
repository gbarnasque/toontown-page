import Bossbots from './Bossbots';
import Sellbots from './Sellbots';
import Lawbots from './Lawbots';
import Cashbots from './Cashbots';

export default function getCogInfo(cogName) {
    let ret = {
        type: { 
            name: null,
            logo: null,
        },
        info: null,
    };
    let cog = Bossbots.cogs.find((c) => c.name === cogName);
    if(cog !== undefined) {
        ret.type.name = 'Bossbot';
        ret.type.logo = Bossbots.logo;
        ret.info = cog;
        return ret;
    }
    cog = Sellbots.cogs.find((c) => c.name === cogName);
    if(cog !== undefined) {
        ret.type.name = 'Sellbot';
        ret.type.logo = Sellbots.logo;
        ret.info = cog;
        return ret;
    }
    cog = Lawbots.cogs.find((c) => c.name === cogName);
    if(cog !== undefined) {
        ret.type.name = 'Lawbot';
        ret.type.logo = Lawbots.logo;
        ret.info = cog;
        return ret;
    }
    cog = Cashbots.cogs.find((c) => c.name === cogName);
    if(cog !== undefined) {
        ret.type.name = 'Cashbot';
        ret.type.logo = Cashbots.logo;
        ret.info = cog;
        return ret;
    }
    return undefined;
};