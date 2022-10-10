import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://vignette.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/4/49/Arya_Stark.png/revision/latest?cb=20190419183707&path-prefix=fr',
        user: USERS[0].user,
        likes: 100087,
        caption: "A girl is Arya Stark of Winterfell and I'm going home",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'jon snow',
                comment: 'Still you have it..',
            },
            {
                user: 'daenerys',
                comment: "To arya stark, the hero of winterfall",
            },
        ],
    },
    {
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*',
        user: USERS[1].user,
        likes: 7879,
        caption: "They were born on the wrong side of the Wall — doesn't make them monsters.",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'Wow!',
            },
            {
                user: 'amaaanath',
                comment: "Once",
            },
        ],
    },
    {
        imageUrl: 'http://pm1.narvii.com/7134/a9e3eee175d4683a4f80c7276da7aa39a834f6ddr1-638-715v2_00.jpg',
        user: USERS[2].user,
        likes: 10000,
        caption: "A mind needs books like a sword needs a whetstone.",
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'Wow!',
            },
            {
                user: 'amaaanath',
                comment: "Once",
            },
        ],
    },
]