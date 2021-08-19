import ChuckNorrisService from '~/services/chuck-norris.service';

// todo: use typescript

export default (ctx, inject) => {
    if (!ctx.$axios) {
        console.error('Please make sure $axios module is added');
    } else {
        ChuckNorrisService.$axios = ctx.$axios;
    }
};
