const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
<main>
    <h1>404: Page Not Found</h1>
    <p>Oops, sorry, we can't find this page!</p>
    <div>
      <img src="/images/404picture.jpeg" alt="Kitty cat" />
      <div>
      </div>
    </div>
</main>

      </Def>
    )
  }  
  
module.exports = error404
