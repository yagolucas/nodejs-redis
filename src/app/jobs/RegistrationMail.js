import Mail from "../lib/Mail";

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;
        await Mail.sendMail({
            from: 'Yago Lucas teste <yagolucas.sf@gmail.com>',
            to: `${user.name} <${user.email}>`,
            sub: 'Primeiro email',
            html: `Olá, ${user.name} bem vindo!!`
        })
    }
}