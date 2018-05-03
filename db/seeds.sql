INSERT INTO burgers (burger_name) VALUES
('Blu Burger'),
('Buffalo Burger'),
('Double Burger');

SELECT * FROM burgers;

UPDATE burgers SET devoured = true WHERE id = 3;