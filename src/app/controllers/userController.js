import Mail from '../lib/Mail';

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name, email, password
        }

        await Mail.sendMail({
            from: 'Yago Lucas teste <yagolucas.sf@gmail.com>',
            to: `${name} <${email}>`,
            sub: 'Primeiro email',
            html: `Olá, ${name} bem vindo!!`
        })

        return res.json(user);
    }
}