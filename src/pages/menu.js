const menus = [
    {
        id: 1,
        name: 'Главная',
        links: '/'
    },
    {
        id: 2,
        name: 'Коллекции',
        links: '/explore',
    },
    {
        id: 5,
        name: 'Важная информация',
        links: '#',
        namesub: [
            {
                id: 2,
                sub: 'Авторы',
                links: '/authors-ETHEREUM:0xd07dc4262bcdbf85190c01c996b4c06a461d2430'
            },
            {
                id: 3,
                sub: 'Подключение кошелька',
                links: '/wallet-connect'
            }//,
            // {
            //     id: 10,
            //     sub: 'FAQ',
            //     links: '/faq'
            // }
        ]
    },
    {
        id: 7,
        name: 'Контакты',
        links: '/contact'
    }
]

export default menus;
