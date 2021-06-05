import  express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';




dotenv.config();
connectDB();

const app = express();



const PORT = process.env.PORT || 5000;
const ENVIROMENT = process.env.NODE_ENV || 'debugging';

app.listen(PORT, console.log(`Server running in ${ENVIROMENT} mode on port ${PORT}...`.yellow.bold));



app.get('/', (req, res) => {
res.send('API is running...');
});

app.use('/api/v1/products', productRoutes);

app.use(notFound);
app.use(errorHandler);











// Ready for release code ?
//const __dirname = path.resolve();
//app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

 /*
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  });
} else {
  app.get('/', (req, res) => {
  res.send('API is running...');
}); 
}
*/