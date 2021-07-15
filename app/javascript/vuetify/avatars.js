document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#avatars',
        vuetify: new Vuetify(),
        data: () => ({
            messages: [
                {
                    avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                    name: 'John Leider',
                    title: 'Welcome to Vuetify!',
                    excerpt: 'Thank you for joining our community...',
                },
                {
                    color: 'red',
                    icon: 'mdi-account-multiple',
                    name: 'Social',
                    new: 1,
                    total: 3,
                    title: 'Twitter',
                },
                {
                    color: 'teal',
                    icon: 'mdi-tag',
                    name: 'Promos',
                    new: 2,
                    total: 4,
                    title: 'Shop your way',
                    exceprt: 'New deals available, Join Today',
                },
            ],
            lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
        }),
    })
})