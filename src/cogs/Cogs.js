import Bossbots from './Bossbots';
import Sellbots from './Sellbots';
import Lawbots from './Lawbots';
import Cashbots from './Cashbots';

import consts from '../consts';

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
        ret.type.name = consts.BOSSBOT;
        ret.type.logo = Bossbots.logo;
        ret.info = cog;
        return ret;
    }
    cog = Sellbots.cogs.find((c) => c.name === cogName);
    if(cog !== undefined) {
        ret.type.name = consts.SELLBOT;
        ret.type.logo = Sellbots.logo;
        ret.info = cog;
        return ret;
    }
    cog = Lawbots.cogs.find((c) => c.name === cogName);
    if(cog !== undefined) {
        ret.type.name = consts.LAWBOT;
        ret.type.logo = Lawbots.logo;
        ret.info = cog;
        return ret;
    }
    cog = Cashbots.cogs.find((c) => c.name === cogName);
    if(cog !== undefined) {
        ret.type.name = consts.CASHBOT;
        ret.type.logo = Cashbots.logo;
        ret.info = cog;
        return ret;
    }
    return undefined;
};