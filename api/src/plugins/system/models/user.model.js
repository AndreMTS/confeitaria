const Model = require ('../core.model')

module.exports = new Model.Schema({
    name: 'system/user',
    model: {
        email: {
            type: Model.String,
            label: "E-mail",
            require: true
        },
        password:{
            type: Model.String,
            label: "Senha",
            require: true
        }
    }
})