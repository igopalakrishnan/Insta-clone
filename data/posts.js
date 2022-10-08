import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://vignette.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/4/49/Arya_Stark.png/revision/latest?cb=20190419183707&path-prefix=fr',
        user: USERS[0].user,
        likes: 7879,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: USERS[0].image,
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
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*',
        user: USERS[1].user,
        likes: 7879,
        caption: 'Train Ride to Hogwarts.',
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
]