import Queue from "../lib/Queue";

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name, email, password
        };

        await Queue.add({user}).then((data) => {
            console.log('success');
        }).catch((error) => {
            console.log(`ocorreu um erro na aplicação, causado por : ${error}`)
        });

        return res.json(user);
    }
}