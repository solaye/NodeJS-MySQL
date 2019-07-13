var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "CampaignStet2020!",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    displayAll();
  });

  function displayAll() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
     // connection.end();
      inquirer
    .prompt([
      {
        name: "itemrequest",
        type: "input",
        message: 'Type the id of the item you would like to buy.' 
    },


     
      
    ]).then(function(answer){
        inquirer
        .prompt([
            {
                name: "quantity",
                type: "input",
                message: 'How much of this item would you like to order?'


            }



        ]).then(function(quantity){
            console.log(quantity);
            console.log(answer);
            console.log(res[0].item_id);
            for( var i =0; i<res.length;i++){
                console.log(res[i].item_id);
                console.log('*********');
                if(answer.itemrequest==res[i].item_id &&  parseInt(quantity.quantity)<=res[i].stock_quantity){
                  console.log('My pleasure'); 
                   var newQuantity = res[i].stock_quantity-quantity.quantity;
                  connection.query(
                  `UPDATE products SET stock_quantity = ? where item_id = ?; `,
                  [newQuantity,res[i].item_id],
                  
                    
                  
                  function(err, sql) {
                    console.log(err);
                    //console.log(sql + " product inserted!\n");
                    console.log('Thanks for your business! Come again.');
                    
                    
                  });
                } else if (answer.itemrequest==res[i].item_id &&  parseInt(quantity.quantity)>res[i].stock_quantity)  { 
                    console.log('Insufficient quantity!')
                    break;
                };
                
            }

            


        })
        

    }  )

    });



  }

