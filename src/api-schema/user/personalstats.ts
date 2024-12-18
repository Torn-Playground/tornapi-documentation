// noinspection SpellCheckingInspection

import { TIMESTAMP } from "@/api-schema/common-params";
import { Integer } from "@/api-schema/common-types";
import { fromStructure, Param, Schema, Selection, Structure } from "@/api-schema/schema.types";
import { onlySingleValue, ValidationResult } from "@/api-schema/validations";
import { SelectedParamMap } from "@/components/try-it/url-selector/url-utilities";

const personalStatsStructure: Structure = {
    id: "personal_stats",
    name: "Personal Stats",
    schema: {
        activestreak: { type: Integer, description: "Current activity streak, in days" },
        alcoholused: { type: Integer, description: "Alcohol drunk" },
        argtravel: { type: Integer, description: "Times traveled to Argentina" },
        arrestsmade: { type: Integer, extra: "always 0", description: "DEPRECATED; Prevously: Arrests made" },
        attackcriticalhits: { type: Integer, description: "Critical hits" },
        attackdamage: { type: Integer, description: "Total damage made" },
        attackhits: { type: Integer, description: "Hits made during attacks" },
        attackmisses: { type: Integer, description: "Hits missed during attacks" },
        attacksassisted: { type: Integer, description: "Attacks assisted" },
        attacksdraw: { type: Integer, description: "Attacks stalemated" },
        attackslost: { type: Integer, description: "Attacks lost" },
        attacksstealthed: { type: Integer, description: "Stealth attacks" },
        attackswon: { type: Integer, description: "Attacks won" },
        attackswonabroad: { type: Integer, description: "Attacks won abroad" },
        auctionsells: { type: Integer, description: "Items auctioned" },
        auctionswon: { type: Integer, description: "Auctions won" },
        awards: { type: Integer, description: "Awards" },
        axehits: { type: Integer, description: "Finishing hits with clubbing weapons" },
        bazaarcustomers: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Bazaar customers",
        },
        bazaarprofit: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Bazaar income",
        },
        bazaarsales: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Bazaar sales",
        },
        bestactivestreak: { type: Integer, description: "Best activity streak, in days" },
        bestdamage: { type: Integer, description: "Best damage" },
        bestkillstreak: { type: Integer, description: "Best killstreak" },
        bloodwithdrawn: { type: Integer, description: "Blood withdrawn" },
        booksread: { type: Integer, description: "Books read" },
        boostersused: { type: Integer, description: "Boosters used" },
        bountiescollected: { type: Integer, description: "Bounties collected" },
        bountiesplaced: { type: Integer, description: "Bounties placed" },
        bountiesreceived: { type: Integer, description: "Bounties received" },
        candyused: { type: Integer, description: "Candy used" },
        cantaken: { type: Integer, description: "Cannabis taken" },
        cantravel: { type: Integer, description: "Times traveled to Canada" },
        caytravel: { type: Integer, description: "Times traveled to Cayman Islands" },
        chahits: { type: Integer, description: "Finishing hits with mechanical weapons" },
        chitravel: { type: Integer, description: "Times traveled to China" },
        cityfinds: { type: Integer, description: "Items found in city" },
        cityitemsbought: { type: Integer, description: "Shop purchases" },
        classifiedadsplaced: { type: Integer, description: "Classified ads placed" },
        companymailssent: { type: Integer, description: "Mails to collegues" },
        consumablesused: { type: Integer, description: "Consumabled used" },
        contractscompleted: { type: Integer, description: "Contracts completed" },
        counterfeiting: { type: Integer, nullable: true, description: "Counterfeiting" },
        criminaloffenses: { type: Integer, nullable: true, description: "Total offenses" },
        cybercrime: { type: Integer, nullable: true, description: "Cybercrime" },
        daysbeendonator: { type: Integer, description: "Days been a donator" },
        defendslost: { type: Integer, description: "Defends lost" },
        defendslostabroad: { type: Integer, description: "Defends lost abroad" },
        defendsstalemated: { type: Integer, description: "Defends stalemated" },
        defendswon: { type: Integer, description: "Defends won" },
        defense: { type: Integer, nullable: true, extra: "Only available for yourself.", description: "Defense" },
        dexterity: { type: Integer, nullable: true, extra: "Only available for yourself.", description: "Dexterity" },
        drugsused: { type: Integer, description: "Drugs used" },
        dubtravel: { type: Integer, description: "Times traveled to United Arab Emirates (UAE)" },
        dukecontractscompleted: { type: Integer, description: "Duke contracts completed" },
        dumpfinds: { type: Integer, description: "Items found in the dump" },
        dumpsearches: { type: Integer, extra: "always 0", description: "DEPRECATED; Prevously: Searches in the dump, same as dumpfinds in most cases" },
        eastereggs: { type: Integer, description: "Easter eggs found" },
        eastereggsused: { type: Integer, description: "Easter eggs used" },
        elo: { type: Integer, description: "Elo rating" },
        endurance: { type: Integer, nullable: true, extra: "Only available for yourself.", description: "Endurance" },
        energydrinkused: { type: Integer, description: "Energy drinks drunk" },
        extortion: { type: Integer, nullable: true, description: "Extortion" },
        exttaken: { type: Integer, description: "Ecstacy taken" },
        factionmailssent: { type: Integer, description: "Mails to faction" },
        failedbusts: { type: Integer, description: "Failed busts" },
        fraud: { type: Integer, nullable: true, description: "Fraud" },
        friendmailssent: { type: Integer, description: "Mails to friends" },
        grehits: { type: Integer, description: "Finishing hits with temporary weapons" },
        h2hhits: { type: Integer, description: "Finishing hits with hand-to-hand" },
        hawtravel: { type: Integer, description: "Times traveled to Hawaii" },
        heahits: { type: Integer, description: "Finishing hits with heavy artillery" },
        highestbeaten: { type: Integer, description: "Highest level beaten" },
        hollowammoused: { type: Integer, description: "Hollow point ammo used" },
        hospital: { type: Integer, description: "Times in hospital" },
        illegalproduction: { type: Integer, nullable: true, description: "Illegal production" },
        illicitservices: { type: Integer, nullable: true, description: "Illicit services" },
        incendiaryammoused: { type: Integer, description: "Incendiary ammo used" },
        intelligence: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Intelligence",
        },
        investedprofit: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Bank investestment profit",
        },
        itemsbought: { type: Integer, description: "Items bought from market" },
        itemsboughtabroad: { type: Integer, description: "Items bought abroad" },
        itemsdumped: { type: Integer, description: "Items trashed" },
        itemslooted: { type: Integer, description: "Items looted from NPCs" },
        itemssent: { type: Integer, description: "Item sends" },
        jailed: { type: Integer, description: "Times jailed" },
        japtravel: { type: Integer, description: "Times traveled to Japan" },
        jobpointsused: { type: Integer, description: "Job points used" },
        kettaken: { type: Integer, description: "Ketamine taken" },
        killstreak: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Current killstreak",
        },
        largestmug: { type: Integer, description: "Largest mug" },
        lontravel: { type: Integer, description: "Times traveled to United Kingdom (UK)" },
        lsdtaken: { type: Integer, description: "LSD taken" },
        machits: { type: Integer, description: "Finishing hits with Machine guns" },
        mailssent: { type: Integer, description: "Mails sent" },
        manuallabor: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Manual labor",
        },
        medicalitemsused: { type: Integer, description: "Medical items used" },
        meritsbought: { type: Integer, description: "Merits bought" },
        mextravel: { type: Integer, description: "Times traveled to Mexico" },
        missioncreditsearned: { type: Integer, description: "Mission credits earned" },
        missionscompleted: { type: Integer, description: "Missions completed" },
        moneyinvested: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Total invested in bank",
        },
        moneymugged: { type: Integer, description: "Money mugged" },
        nerverefills: { type: Integer, description: "Nerve refills" },
        networth: { type: Integer, description: "Total networth" },
        networthauctionhouse: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in auction house",
        },
        networthbank: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in bank",
        },
        networthbazaar: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in bazaar",
        },
        networthbookie: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in bookie",
        },
        networthcayman: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in overseas bank",
        },
        networthcompany: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in company",
        },
        networthdisplaycase: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in display case",
        },
        networthenlistedcars: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in enlisted cars",
        },
        networthitemmarket: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in item market",
        },
        networthitems: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in inventory",
        },
        networthloan: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in loans",
        },
        networthpending: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in pending",
        },
        networthpiggybank: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in piggy bank",
        },
        networthpoints: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in points",
        },
        networthproperties: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in properties",
        },
        networthstockmarket: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in stock market",
        },
        networthunpaidfees: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in unpaid feed",
        },
        networthvault: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in vaults",
        },
        networthwallet: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Networth in wallet",
        },
        onehitkills: { type: Integer, description: "One hit kill" },
        opitaken: { type: Integer, description: "Opium taken" },
        organisedcrimes: { type: Integer, description: "Organized crimes" },
        overdosed: { type: Integer, description: "Times overdosed" },
        pcptaken: { type: Integer, description: "PCP taken" },
        peoplebought: { type: Integer, description: "People bailed" },
        peopleboughtspent: { type: Integer, description: "Bail fees" },
        peoplebusted: { type: Integer, description: "People busted" },
        personalsplaced: { type: Integer, description: "Personals placed" },
        piehits: { type: Integer, description: "Finishing hits with piercing weapons" },
        piercingammoused: { type: Integer, description: "Piercing ammo used" },
        pishits: { type: Integer, description: "Finishing hits with pistols" },
        pointsbought: { type: Integer, description: "Points bought" },
        pointssold: { type: Integer, nullable: true, extra: "Only available for yourself.", description: "Points sold" },
        racesentered: { type: Integer, description: "Races entered" },
        raceswon: { type: Integer, description: "Races won" },
        racingpointsearned: { type: Integer, description: "Racing points earned" },
        racingskill: { type: Integer, description: "Racing skill" },
        raidhits: { type: Integer, description: "Raid hits" },
        rankedwarhits: { type: Integer, description: "Ranked war hits" },
        rankedwarringwins: { type: Integer, description: "Ranked war wins" },
        receivedbountyvalue: { type: Integer, description: "Value of recived bounties" },
        refills: { type: Integer, description: "Energy refills" },
        rehabcost: { type: Integer, description: "Rehabilitation fees" },
        rehabs: { type: Integer, description: "Rehabilitation" },
        respectforfaction: { type: Integer, description: "Total respect gained for factions" },
        retals: { type: Integer, description: "Retaliations" },
        revives: { type: Integer, description: "Revives given" },
        reviveskill: { type: Integer, description: "Revive skill" },
        revivesreceived: { type: Integer, description: "Revives received" },
        rifhits: { type: Integer, description: "Finishing hits with rifles" },
        roundsfired: { type: Integer, description: "Rounds fired" },
        shohits: { type: Integer, description: "Finishing hits with shotguns" },
        shrtaken: { type: Integer, description: "Shrooms taken" },
        slahits: { type: Integer, description: "Finishing hits with slashing weapons" },
        smghits: { type: Integer, description: "Finishing hits with sub machine guns" },
        soutravel: { type: Integer, description: "Times traveled to South Africa" },
        specialammoused: { type: Integer, description: "Special ammunition used" },
        speed: { type: Integer, nullable: true, extra: "Only available for yourself.", description: "Speed" },
        spetaken: { type: Integer, description: "Speed taken" },
        spousemailssent: { type: Integer, description: "Mails to spouse" },
        statenhancersused: { type: Integer, description: "Stat enhancers used" },
        stockfees: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Stock fees paid",
        },
        stocklosses: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Stock losses received",
        },
        stocknetprofits: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Stock net profits",
        },
        stockpayouts: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Stock payouts recieved",
        },
        stockprofits: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Stock profits received",
        },
        strength: { type: Integer, nullable: true, extra: "Only available for yourself.", description: "Strength" },
        switravel: { type: Integer, description: "Times traveled to Switzerland" },
        territoryclears: { type: Integer, description: "Territory clears" },
        territoryjoins: { type: Integer, description: "Terrotiry wall joins" },
        territorytime: { type: Integer, description: "Territory wall time, in seconds" },
        theft: { type: Integer, nullable: true, description: "Theft" },
        theyrunaway: { type: Integer, description: "Foes escaped" },
        tokenrefills: { type: Integer, description: "Casino token refills" },
        totalbountyreward: { type: Integer, description: "Money rewarded" },
        totalbountyspent: { type: Integer, description: "Spent on bounties" },
        totalstats: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Total battle stats",
        },
        totalworkingstats: {
            type: Integer,
            nullable: true,
            extra: "Only available for yourself.",
            description: "Total working stats",
        },
        tracerammoused: { type: Integer, description: "Tracer ammo used" },
        trades: { type: Integer, nullable: true, extra: "Only available for yourself.", description: "Trades made" },
        trainsreceived: { type: Integer, description: "Times trained by director" },
        traveltime: { type: Integer, description: "Time spent traveling, in seconds" },
        traveltimes: { type: Integer, description: "Times traveled" },
        unarmoredwon: { type: Integer, description: "Unarmored fights won" },
        useractivity: { type: Integer, description: "Time played, in seconds" },
        vandalism: { type: Integer, nullable: true, description: "Vandalism" },
        victaken: { type: Integer, description: "Vicodin taken" },
        virusescoded: { type: Integer, description: "Virus coded" },
        weaponsbought: { type: Integer, extra: "always 0", description: "DEPRECATED; Prevously: Weapons bought" },
        xantaken: { type: Integer, description: "Xanax taken" },
        yourunaway: { type: Integer, description: "Times escaped" },
    },
};
const structures = [personalStatsStructure];

const schema: Schema = {
    personalstats: fromStructure(personalStatsStructure),
};

const possibleCategories = [
    "attacking",
    "jobs",
    "trading",
    "jail",
    "hospital",
    "finishinghits",
    "communication",
    "criminaloffenses",
    "bounties",
    "items",
    "travel",
    "drugs",
    "missions",
    "racing",
    "networth",
    "other",
];

const statParam: Param = {
    name: "stat",
    description: "REQUIRED unless for yourself of when 'cat' is present. Which stats you want to see. Uses the keys returned in this call.",
    validations: [
        (_: Param, value: string | undefined, selectedParams: SelectedParamMap, id: string | null): ValidationResult => {
            if (!id || value || selectedParams.cat) return { valid: true };

            return { valid: false, reason: "Required (or 'cat') for other players." };
        },
    ],
};
const catParam: Param = {
    name: "cat",
    description: "REQUIRED unless for yourself of when 'stat' is present. Which category of stats you want to see.",
    options: {
        values: possibleCategories,
    },
    validations: [
        (_: Param, value: string | undefined, selectedParams: SelectedParamMap, id: string | null): ValidationResult => {
            if (!id || value || selectedParams.stat) return { valid: true };

            return { valid: false, reason: "Required (or 'stat') for other players." };
        },
        onlySingleValue,
    ],
};

const PersonalStatsSelection: Selection = {
    name: "personalstats",
    description: "View the personal stats for a player.",
    access: "public",
    schema,
    structures,
    id: { optional: true },
    params: [TIMESTAMP, statParam, catParam],
};

export default PersonalStatsSelection;
