const Login = require('./components/login');

module.exports = app =>{
    app.post('/', Login)
}