import { createDiscreteApi } from 'naive-ui';

export default {
    install(app) {
        const { message } = createDiscreteApi(['message']);
        app.config.globalProperties.$message = message;
    },
};
