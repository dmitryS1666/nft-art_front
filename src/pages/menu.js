const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/'
    },
    {
        id: 2,
        name: 'Explore',
        links: '/explore',
    },
    {
        id: 5,
        name: 'Other Information',
        links: '#',
        namesub: [
            {
                id: 2,
                sub: 'Authors',
                links: '/authors-ETHEREUM:0xd07dc4262bcdbf85190c01c996b4c06a461d2430'
            },
            {
                id: 3,
                sub: 'Wallet Connect',
                links: '/wallet-connect'
            },
            {
                id: 10,
                sub: 'FAQ',
                links: '/faq'
            }
        ]
    },
    {
        id: 7,
        name: 'Contact',
        links: '/contact'
    }
]

export default menus;
