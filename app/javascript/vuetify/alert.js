document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#alert',
        vuetify: new Vuetify(),
        data () {
            return {
                alert: true,
            }
        },
    })
})