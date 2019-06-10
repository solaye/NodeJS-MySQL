DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
 item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(100),
 department_name VARCHAR(100),
 price DECIMAL(10,2),
 stock_quantity INTEGER(11),
 PRIMARY KEY(item_id)
 );
 
 INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('soap', 'toiletries',2.50,100);
  INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('gum', 'candy',1.39,500);
   INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('floss', 'toiletries',3.49,40);
    INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('toilet paper', 'toiletries',9.99,500);
     INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('poetry book', 'books',10.99,140);
      INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('paper towels', 'household',7.99,400);
       INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('candles', 'aromatherapy',11.99,75);
        INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('cookies', 'snacks',5.99,200);
		INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('dog food', 'pets',30.00,80);
         INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('soap', 'toiletries',2.50,100);
          INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ('crockpot', 'kitchen',19.99,90);
          

 


