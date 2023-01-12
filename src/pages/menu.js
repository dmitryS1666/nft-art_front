const menus = [
    // {
    //     id: 1,
    //     name: 'Главная',
    //     links: '/'
    // },
    {
        id: 2,
        name: 'Коллекции',
        links: '/explore',
    },
    // {
    //     id: 7,
    //     name: 'Контакты',
    //     links: '/contact'
    // },
    {
        id: 8,
        name: 'Художественные школы',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Школа #1',
                links: '/school'
            }
        ]
    },
    {
        id: 5,
        name: 'Важная информация',
        links: '#',
        namesub: [
            {
                id: 2,
                sub: 'Авторы',
                links: '/authors-ETHEREUM:0x72eb1e49eded40189e7abeeca33c9deca1d1f4d5'
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
        id: 9,
        name: 'О нас',
        links: '/about'
    }
]

export default menus;
