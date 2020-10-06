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


Upon comparing the two databases, PostgreSQL consistently had better response times for the queries executed. As such, I decided to continue forward with stress testing the server & database utilizing K6 and New Relic with the PostgreSQL database only.

# Stress testing:

K6 allows for stress testing with a specified number of 'virtual users' (VUs), that are meant to mimic an actual user making requests to the application. I began my stress testing with a comparison of throughput using various numbers of VUs, making continuous GET requests to my application for a duration of 90 seconds. I've split the below table up by three types of searches: a specified product ID, a random product ID, and a partial-text search of a product name. The below figures are denoted in requests per second.

<table style="width:50%">
  <tr>
      <td>VUs</td>
      <td>Specific product ID </td>
      <td>Random product ID </td>
      <td>Partial Product Name</td>
  </tr>
  <tr>
    <td>10</td>
    <td>1,156</td>
    <td>865</td>
    <td>1,022</td>
  </tr>
  
  <tr>
    <td>50</td>
    <td>1,349</td>
    <td>1,305</td>
    <td>1,228</td>
  </tr>
  
  <tr>
    <td>100</td>
    <td>1,350</td>
    <td>1,331</td>
    <td>1,264</td>
  </tr>
  
  <tr>
    <td>200</td>
    <td>1,264</td>
    <td>1,332</td>
    <td>1,237</td>
  </tr>
</table>

I noted when I started my testing off with >200 VUs, I began to see errors noting that the requests were failing & the connection was reset by peer. After some research, it seems that points to the response times from my app being too long and resulting in the connection being closed.

After some additional reading into K6, I opted for a new stress testing strategy: rather than starting off with a 200+ VUs, I can specify a duration and a target number of VUs and K6 will ramp up to the target number of VUs over the duration specified. 

In the below test, the app will begin with 100 VUs and spend 80 seconds ramping up to 1000 VUs and then run for 5min with 1000 VUs.

![initial_test](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/VU%20ramp%20up%20initial.png)

The results reported on K6 showed a throughout of almost 1500 RPS with all requests returning a status of 200.

![initial_test_results](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/K6%20results%20initial.png)

The numbers reported on New Relic for the corresponding test shows a throughput of 86.4 requests per minute (RPM), with a high of around 104k RPM. Though the Apdex score was only .17.

![initial_NR_throughput](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/NR%20throughput%20initial.png)

![initial_NR_Apdex](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/K6%20appdex%20initial.png)

I was pretty happy with the numbers for this initial test, until seeing the Apdex score. The Apdex score measures user satisfaction with your app, and uses the below metrics to do so. 
<ul>
  <li> Satisfied: The response time is less than or equal to T. </li>
  <li> Tolerating: The response time is greater than T and less than or equal to 4T. In this example, 4 x 1.2 = 4.8  seconds is the maximum tolerable response time. </li> 
  <li>Frustrated: The response time is greater than 4T or the request returns a server-side error. A high error rate can cause you to have a satisfying average response time, yet a poor Apdex score. </li>
</ul>

The Apdex score ranges from a 1 (100% users satisfied) on the high end to a 0 (100$ users frustrated) on the low end. 

After doing some research on the Apdex and on K6, I implemented two measures in an attempt to continue to achieve a high throughput but increase the Apdex score of my application:

<ul>
  <li>Implemented a 'sleep' of 1 second on the stress testing in K6. The sleep parameter in my test causes each VU to 'sleep' for 1 second on my page. On my prior testing, I was not utilizing the sleep parameter. I believe adding the sleep parameter will greatly help out on the average response times, and also provides a more realistic measure of my app. </li>
  <li>The Apdex score is measured against a target response time. The default on New Relic is set to .1 seconds. This will certainly better the Apdex score, but I think it is a reasonable target response time as well and not just 'moving the goal posts'. I did not find any information on whether or not .1s response time was an industry standard, or just an arbitrary number that New Relic defaults to.</li>
</ul>

I conducted a number of tests after implementing the above two measures, varying the amount of time of the tests and the numbers of VUs.

Ultimately, I conducted a test for a little over an hour with the below parameters:

![Final_k6_test](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/K6%20test%20final.png)

The results of the test on K6 showed around 1000 RPS, with a success rate of 99%:

![Final_k6_test](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/K6%20results%20final.png)

The addition of the 'sleep' parameter greatly increased my average response times. For the majority of the test duration, my app provided reponse times of < 200ms. There is one jump, but it is correlated with the quick increase of VUs to 2500 over 2 minutes. 

![Final_NR_response](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/NR%20throughput%20final.png)

The addition of the sleep parameter did lead to a lower throughput, however my app was still able to process almost 50k RPM with a significantly improved response time.

![Final_NR_throughput](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/NR%20Throughput%20final.png)

The Apdex score is reflective of this improvement in response times: 

![Final_NR_Apdex](https://github.com/SDC-Team-Target/target_recommended_products/blob/master/NR%20Appdex%20final.png)

# Conclusion

Ultimately, I was able to achieve the two goals set at the outset of the project. However, I realized that additional considerations should be taken into account over just the amount of requests per second the app can handle. It doesn't really matter if the app can handle 1000 RPS if the response times are not adequate. 

In my final tests, K6 did report that I was able to achieve 1000 RPS. Though I think it is more accurate to utilize the New Relic numbers, as it is a step removed from the K6 software actually used to test and I think it would provide a more realistic number. Reporting off the New Relic numbers, it looks like my app fell just short - 48.7k RPM equates to just over 800 RPS. I am ultimately more happy with these testing numbers, and this testing implementation, as I think it provides a more realistic scenario than does my initial testing scenario that was able to achieve 1000+ RPS.

