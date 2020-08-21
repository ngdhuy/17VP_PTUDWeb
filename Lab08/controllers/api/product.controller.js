exports.getAllProduct = (req, res) => {
    res.json([
        {
            id: 1, 
            name: 'Product 01'
        }, 
        {
            id: 2, 
            name: 'Product 02'
        },
        {
            id: 3, 
            name: 'Product 03'
        }, 
        {
            id: 4,
            name: 'Product 04'
        }
    ]);
};