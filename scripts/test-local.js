const index = require('./../index');

const bootstrap = async () => {
    const result = await index.handler({
        test: 123
    })

    console.log('Result >>>>>>>>>>>>>>');
    console.dir(result)

}

bootstrap();