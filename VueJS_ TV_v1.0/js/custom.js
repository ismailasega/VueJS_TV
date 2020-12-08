new Vue({
    // the data property
    el: '#tv',
    
    data() {
      return {
        signal: false,
        power: true,
  
      };
    },
  
    // the methods property
    methods: {
      toggle: function () {
        this.signal = !this.signal;
      }, 
      
      togglePower: function () {
        this.power = !this.power;
      },
    },
  });
  