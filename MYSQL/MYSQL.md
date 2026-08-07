DataBase => it is a collection of data in a format that can be easily accessed.

why Databases?
can store large data
features like security,scalability
easier to insert,update or delete data

DBMS ==> Database Management System. upper layer of data base where we have operation and command

In SQL data is stored in the table called relation databases.Relation is called table
example of relational databases is MYSQL, Oracle, PostGreSQL

NoSQL ==> NOn relational Database.==> data stored in document/key-val/grpah

e:g ==> MongoDb, Cassandra, Neo4j

SQL ==. Structured Query Language==> SQl is a programming language used to interact with relational databases

columns are the design of the databases which is also called the schema
rows in databases are the tuples

Constraints are the rules

NOT NULL == NOT NULL
UNIQUE == UNIQUE VALUE
DEFAULT == DEFAULT VALUE
CHECK == LIMIT THE VALUE

PRIMARY KEY ==> make the column unique  and not null used only for one   

FOREIGN KEY ==> prevent actions that would destroy links between tables(primary key of another table)
Foreign key can be null and duplicate values

Where Clause ==> To define some condition to bring the specific data
FROM ==> is used to get the data
WHERE ==> is used as condition\

Operator that are used frequently

AND,OR,BETWEEN,IN,NOT
iN==> USED TO MATCHES THE VALUE IN THE LIST

Limit Clause ==> Sets an upper limit on number of tuples rows to be returned.we can control how much data we want like the number of rows 

Order by Clause ==> To sort in ascending (ASC) OR descending order(DESC) 

Aggregate Function ==> Aggregate Function perform a calculation on a set of values, and return a single value
.Count()
.MAX()
.MIN()
.SUM()
AVG()

Group by Clause==> Groups rows that have the same values into summary rows
It collect data from multiple records and groups the result by one or more column

SELECT col1,col2
FROM table_name
GROUP BY cal_name(s);

Generally we use group by with some aggregation function

Having Clause ==> Similar to Where that is applies condition on rows.but it is used when we want to apply any condition after grouping

.Where is for the table HAVING is for a group
.GRouping is necessary for Having

General Order to write the Clauses

SELECT column(s)
FROM table_name
WHERE condition
GROUP BY columns
HAVING condition 
ORDER BY columns ASC;  

Table Queries ==> Update to update existing rows

UPDATE TABLE_NAME
SET COL1 = VAL1,COL2 = VAL2
WHERE condition

DELETE ==> DELETE THE exisiting rows

DELETE FROM table_name
WHERE condition;

ALTER==> is used to change the schema

ADD column
ALTER TABLE table_name
ADD COLUMN column_name datatype constraints

all other oprations are ==> drop,rename,modifycolumn

Truncate ==> to delete tables data

TRUNCATE TABLE table_name