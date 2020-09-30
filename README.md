# target_recommended

Inherited a microservice of an e-commerce site for displaying recommended products based on viewing a particular item & refactored the back-end in order to handle 1000+ requests per second with an average response time of approximately 100ms from a dataset of 10M unique items on a local server instance.


# Overall Goals:
1. Scale database capabilities to ensure queries will run in isolation in under 50ms (at worst) in a dataset of 10MM records.
2. Stress test application to handle 1000+ requests per second (RPS) while providing acceptable response times.


# Database Selection: 

I wanted to compare the performance of a NoSQL database with that of a SQL database. After some initial research on database options, I opted to use Apache Cassandra as my NoSQL database and PostgreSQL as my SQL database. In order to satisfy the requirements of the application, I created API routes to allow to search by product ID, and a text search of the product name. 

# Apache Cassandra Scaling:

In order to adhere to the optimal structure of Cassandra databases (i.e. designing tables for particular queries), I initially created one table to handle product searches by ID, and a second table to handle product searches by name.

Due to the nature of the application (i.e. users searching for a particular product), I realized the necessity to allow for partial-text searches. The table built to handle product searches by name would not allow for an optimal partial text search, as the partition key of the table was the product name (and thus a partial-text search did not make use of the hashing feature of partition keys). After some research on optimal ways to allow for partial-text searches, I landed on creating SSTable Attached Secondary Indexes (SASI) on the product name field of the table that was used for searching by product IDs.

# PostgreSQL Scaling:

The requirements for Apache Cassandra also applied to the schema design of my PostgreSQL database - that is, needing to search by product ID, product name, and partial-text of product name. 

As the product ID was a unique identifier, I was easily able to achieve my target query times by setting it as the primary key. In order to achieve full- and partial-text searches, I created a hash index on the product name field. This reduced search time from around 750ms to around 2ms for a full-text, and .15ms for a partial-text search, when limited to 10 results. I made the decision to limit results for a partial-text search to 10, as I found that was a more realistic scenario than returning all matches (in a dataset of 10MM records, there would likely be a large number of matches of a partial-text search).

# Apache Cassandra vs PostgreSQL Search Stats:

<table style="width:50%">
  <tr>
    <td>Database</td>
      <td>Product ID</td>
      <td>Full Product Name</td>
      <td>Partial Product Name</td>
  </tr>
  <tr>
    <td>Cassandra</td>
    <td>< 20ms</td>
    <td>< 30ms</td>
    <td>< 10ms</td>
  </tr>
  
  <tr>
    <td>PostgreSQL</td>
    <td>< 1ms</td>
    <td>< 5ms</td>
    <td>< 1ms</td>
  </tr>
</table>


Upon comparing the two databases, PostgreSQL consistently had better response times for the queries executed. 

# Stress testing:

