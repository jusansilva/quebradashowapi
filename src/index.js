"strict"

require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const { AdminRouter } = require('./routers');

app.use("/api", AdminRouter)

app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
app.listen(port, () => console.log(`Api funcionando na porta: ${port}`))