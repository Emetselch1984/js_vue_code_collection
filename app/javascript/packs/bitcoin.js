import Vue from 'vue/dist/vue.esm'
document.addEventListener('DOMContentLoaded', () => {
    console.log("hello")
    var app = new Vue({
        el: '#bitcoin',
        data: {
            bpi:null
        },
        mounted:function () {
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    console.log(response.data.bpi);
                    this.bpi = response.data.bpi
                }.bind(this))
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    })

});