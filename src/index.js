// on importe la librairie fastify
import fastify from 'fastify'

const app = fastify({ logger: true })

app.get('/', async () => {
    return { text: "Welcome !" }

})
const start = async () => {
    console.log('Lancement de notre server ...')

    await app.listen(3000)

    console.log('Le server est lancé, vous pouvez visiter: http://localhost:3000')

}

start()