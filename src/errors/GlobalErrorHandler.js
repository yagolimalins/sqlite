function GlobalErrorHandler(err, req, res, next) {

  const statusCode = err.status || 500;

  if(statusCode === 404) {
    res.status(404)
    res.json({
      message: err.message
    })
  }

  if(statusCode === 400) {
    res.status(400)
    res.json({
      message: err.message
    })
  }

  res.status(statusCode)
  res.json({
    message: err.message || "Erro interno do servidor",
  });
}

export default GlobalErrorHandler