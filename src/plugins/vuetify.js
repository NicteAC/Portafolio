import Vue from 'vue';
import Vuetify from 'vuetify'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#b920c4',
            secondary: '#BA68C8',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#00E676',
            warning: '#FFC107',
          },
        },
      },
});
