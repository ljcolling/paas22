HTMLWidgets.widget({

  name: 'quiz',

  type: 'output',

  factory: function(el, width, height) {


    return {

      renderValue: function(x) {

        let content = ""
        for(let i = 0; i < x.length; i++) {
          content = content + multiChoice(x[i])
        }
        el.innerHTML = content
      },

      resize: function(width, height) {


      }

    };
  }
});
