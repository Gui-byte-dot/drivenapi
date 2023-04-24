import supertest from 'supertest';
import server from '../src/app';
import prisma from '../src/database/database';

const api = supertest(server);

beforeAll(async () => {
    console.log("apagar");
    await prisma.info.deleteMany({})
    console.log("apaguei");
})

afterAll(async () => {
    await prisma.info.deleteMany({})
})

describe('Testando a API', () => {
    it('Testando o GET: /jobs', async () => {
        //Supertest faz a requisição
        // const  resultado = await api.get('/jobs');
        // console.log(resultado.status);
        // //Matcher para status code
        // console.log(resultado.body);
        // expect(resultado.status).toBeGreaterThanOrEqual(199)
        // //Matcher para body response
        // // expect(resultado.body).toEqual(expect.arrayContaining([1,2]))
        // // expect(resultado.body).toEqual({
        // //     "title":"Oi",
        // //     "price":1
        // //   })
        // // expect(resultado.body).toEqual({
        // //     id:expect.any(Number),
        // //     title:expect.any(String),
        // //     price:expect.any(Number) 
        // // })
        // // expect(resultado.body).toMatchObject({
        // //     title:expect.any(String),
        // //     price:expect.any(Number) 
        // // })
        // expect(resultado.body).toEqual(
        //     expect.arrayContaining([
        //         expect.objectContaining({
        //             id:expect.any(Number),
        //             title:expect.any(String),
        //             price:expect.any(Number)
        //         })
        //     ])
        // )
        await api.post('/jobs').send(
            {
            "title":"Oi",
            "price":1
            }
        )
        const resultado = await prisma.info.count();
        expect(resultado).toBe(1);    
    })
})

describe('GET /jobs', () => {
    it('Should response with status 401 if no token', async () => {
        const result = await api.get('/jobs');
        expect(result.status).toBe(401);
    })

    it('Should response with status 401 if invalid token', async () => {
        const result = await api.get('/jobs').set("Authorization", "Bearer XXXX");
        expect(result.status).toBe(401);
    })
    it('Should response with status 200 if valid token', async () => {
        const result = await api.get('/jobs').set("Authorization", "Bearer XXXX");
        expect(result.status).toBe(200);
    })
})


