'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    // request.all(retorna todos campos)
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user // faz json automático
  }
}

module.exports = UserController
