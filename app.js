var obj = {
    el: '#app',
    data: {
       restaurants: [],
       searchWord: "",
       card: 1,
       show: false,
       titleImage: 'mogumogutitle.png',
    },
    mounted: function () {
        this.search()
    },
    methods: {
       search: function() {
          axios.get(
              'https://api.gnavi.co.jp/RestSearchAPI/v3/',
            {
                  params: {
                    keyid: '94e10e53e34fb39f96a321298ca145eb',
                    freeword: this.searchWord,
                    pref: 'PREF13',
                    card: this.card,
                    hit_per_page: 56
        }
      })
              .then(response => {
                // handle success
                this.restaurants = response.data.rest;
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function () {
                // always executed
              });
          }
        }
    }
    
    
var app = new Vue(obj)