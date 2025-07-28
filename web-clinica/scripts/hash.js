const bcrypt = require('bcrypt');

(async () => {
  const senha = 'teste'
  const hash = await bcrypt.hash(senha, 10)
  console.log(hash)
})()