const express = require('express');
const app= express();


app.use(express.json());

const PORT=4008


// Get request
app.get('/getRequests', (req, res) => {
    res.send('All Products Here (examples how to use CICD pipeline using gihub action and ec2 instance)');
}
);

// Post request
app.post('/postRequest', (req, res) => {
    // Simulate product creation
    console.log("req.body=>>>",req.body)
    // insert into database
    // const product = new Product(req.body);
    res.send('Product Created');
}
);

// Put request
app.put('/putRequest/:id', (req, res) => {
    console.log("req.params.id=>>>",req.params.id)
    console.log("req.body=>>>",req.body)
    // Simulate product update
    // const product = await Product.findByIdAndUpdate(req.params.id    , req.body  );
    res.send('Product Updated');
}
);

// Delete request
app.delete('/deleteRequest/:productId', (req, res) => {
    console.log("req.params.productId=>>>",req.params.productId)
    // Simulate product deletion
    // const product = await Product.findByIdAndDelete(req.params.productId);
    res.send('Product Deleted');
}
);  

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);   
})
