import Application from './application';
import ApiService from './api-service';
import createSvgSprite from './tools/create-svg-sprite';
import {activateRouter} from './router';

createSvgSprite();

ApiService.getAll()
    .then((data) => {
      Application.data = data;

      activateRouter();

    });
