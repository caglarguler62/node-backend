let mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodebackend', {useNewUrlParser: true, useUnifiedTopology: true,
useCreateIndex:true});

mongoose.connection.on('open',()=>{console.log('MongoDB connection success.')});
mongoose.connection.on('error',(err)=>{console.log('MongoDB connection failed. Detail:',err)});