const logger = (req, res, next) => {
    const startTime = Date.now() 
    
    res.on('finish', () => {
        const duration = Date.now() - startTime 
        if(res.statusCode === 200 || res.statusCode === 304){
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} SUCESSO/AUTORIZADO- Status: ${res.statusCode} - ${duration}ms`) }
        else{
            console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} FALHA/NÃO AUTORIZADO - Status: ${res.statusCode} - ${duration}ms`)
        }
    }) 
    
    next() 
} 

module.exports = logger;