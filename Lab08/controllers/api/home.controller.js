exports.home = (req, res) => {
    res.json({
        data: 'Home -> GET'
    });
};

exports.listOfProduct = (req, res) => {
    res.json([
        {
            id: 1, 
            name: 'Product 01'
        }, 
        {
            id: 2, 
            name: 'Product 02'
        }
    ]);
};