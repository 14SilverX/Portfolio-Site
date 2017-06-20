var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , qs = require('querystring')
  , port = 8080


var server = http.createServer (function (req, res) {
      
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'portfolio.html')
      break
    case '/index.html':
      sendFile(res, 'index.html')
      break
     case '/portfolio.html':
      sendFile(res, 'portfolio.html')
      break
    case '/FSA.html':
      sendFile(res, 'FSA.html')
      break
    case '/SavSam.html':
      sendFile(res, 'SavSam.html')
      break
    case '/TCG.html':
      sendFile(res, 'TCG.html')
      break
    case '/FIVEMIN.html':
      sendFile(res, 'FIVEMIN.html')
      break
    case '/Contact.html':
      sendFile(res, 'Contact.html')
      break
    case '/About.html':
      sendFile(res, 'About.html')
      break
      
    case '/style.css':
      sendFile(res, 'style.css', 'text/css')
      break
      
    case '/Images/SeniorPicture.jpg':
      sendFile(res, 'Images/SeniorPicture.jpg', 'image/jpg')
      break
    case '/Images/ArduinoJapan.jpg':
      sendFile(res, 'Images/ArduinoJapan.jpg', 'image/jpg')
      break
    case '/Images/HoloTestJapan.jpg':
      sendFile(res, 'Images/HoloTestJapan.jpg', 'image/jpg')
      break
    case '/Images/PoolChamps.jpg':
      sendFile(res, 'Images/PoolChamps.jpg', 'image/jpg')
      break
    case '/Images/SlotCars.jpg':
      sendFile(res, 'Images/SlotCars.jpg', 'image/jpg')
      break
      
    case '/Images/savage_sam_thumbnail.png':
      sendFile(res, 'Images/savage_sam_thumbnail.png', 'image/png')
      break
    case '/Images/THATW_thumbnail.png':
      sendFile(res, 'Images/THATW_thumbnail.png', 'image/png')
      break
    case '/Images/FSA_thumbnail.png':
      sendFile(res, 'Images/FSA_thumbnail.png', 'image/png')
      break
    case '/Images/the_conduits_garden_thumbnail.png':
      sendFile(res, 'Images/the_conduits_garden_thumbnail.png', 'image/png')
      break
    case '/Images/5M_thumbnail.png':
      sendFile(res, 'Images/5M_thumbnail.png', 'image/png')
      break
      
    case '/Images/FSA_screen1.jpeg':
      sendFile(res, 'Images/FSA_screen1.jpeg', 'image/jpeg')
      break
    case '/Images/FSA_screen2.jpeg':
      sendFile(res, 'Images/FSA_screen2.jpeg', 'image/jpge')
      break
      
    case '/Images/SS_screen1.png':
      sendFile(res, 'Images/SS_screen1.png', 'image/png')
      break
    case '/Images/SS_screen2.png':
      sendFile(res, 'Images/SS_screen2.png', 'image/png')
      break
    case '/Images/SS_screen3.png':
      sendFile(res, 'Images/SS_screen3.png', 'image/png')
      break
    case '/Images/SS_screen4.png':
      sendFile(res, 'Images/SS_screen4.png', 'image/png')
      break
    case '/Images/SS_screen5.png':
      sendFile(res, 'Images/SS_screen5.png', 'image/png')
      break
      
    case '/Images/TCG_screen1.png':
      sendFile(res, 'Images/TCG_screen1.png', 'image/png')
      break
    case '/Images/TCG_screen2.png':
      sendFile(res, 'Images/TCG_screen2.png', 'image/png')
      break
    case '/Images/TCG_screen3.png':
      sendFile(res, 'Images/TCG_screen3.png', 'image/png')
      break
      
    case '/Images/PDX_logo.png':
      sendFile(res, 'Images/PDX_logo.png', 'image/png')
      break
      
    case '/Images/THATW_screen1.png':
      sendFile(res, 'Images/THATW_screen1.png', 'image/png')
      break
    case '/Images/THATW_screen2.png':
      sendFile(res, 'Images/THATW_screen2.png', 'image/png')
      break
      
    case '/Images/5M_screen1.png':
      sendFile(res, 'Images/5M_screen1.png', 'image/png')
      break
    case '/Images/5M_screen2.png':
      sendFile(res, 'Images/5M_screen2.png', 'image/png')
      break
    case '/Images/5M_screen3.png':
      sendFile(res, 'Images/5M_screen3.png', 'image/png')
      break
    case '/Images/5M_screen4.png':
      sendFile(res, 'Images/5M_screen4.png', 'image/png')
      break
    case '/Images/5M_screen5.png':
      sendFile(res, 'Images/5M_screen5.png', 'image/png')
      break
      
    case '/Audio/Savage_Sam.wav':
      sendFile(res, 'Audio/Savage_Sam.wav', 'audio/wav')
      break
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}
