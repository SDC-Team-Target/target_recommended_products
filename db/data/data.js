/* eslint-disable no-continue */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// eslint-disable-next-line no-plusplus
const faker = require('faker');
const fs = require('fs');

faker.locale = 'en';

const dataGenerator = () => {
  const departmentHolder = {};
  let count = 1;

  let departmentsStringified = '';
  // used to created the departments.csv file
  // runs max of 1000 times, just want to make sure we get all unique depts
  for (let i = 0; i < 1000; i++) {
    const department = faker.commerce.department();
    if (!departmentHolder[department]) {
      departmentHolder[department] = true;
    } else {
      continue;
    }

    if (i === 0) {
      // if running first time, add the column headers
      departmentsStringified += 'departmentID, departmentName, \n';
    } else if (Object.keys(departmentHolder).length === 22) {
      // there are 22 distinct depts, so don't add , or newline char if last item in list
      departmentsStringified += `${count}, ${department}`;
    } else {
      // otherwise, add count & dept separated by commas & newline char at end
      departmentsStringified += `${count}, ${department}\n`;
      count++;
    }
    // once we have all distinct depts, stop running loop
    if (Object.keys(departmentHolder).length === 22) {
      break;
    }
  }
  // write file with the departments string
  fs.writeFile('./db/data/departments.csv', departmentsStringified, (err) => {
    if (err) {
      console.log('Error writing departments file ', err);
    } else {
      console.log('Successfully wrote departments file.');
    }
  });

  // add column headers in to string
  let productsStringified = 'itemID, itemName, itemPrice, departmentID\n';
  for (let i = 0; i < 10000001; i++) {
    // create fake product name & price
    const product = faker.commerce.productName();
    const price = faker.commerce.price();
    // if at last product, don't add last comma & newline char
    if (i === 10000000) {
      productsStringified += `${i}, ${product}, ${price}, ${Math.floor(Math.random() * 21) + 1}`;
    } else {
      // otherwise, add id, productName, productPrice, and a random num between 1-21 for the dept id
      productsStringified += `${i}, ${product}, ${price}, ${Math.floor(Math.random() * 21) + 1}\n`;
    }
  }

  // create the file
  fs.writeFile('./db/data/products.csv', productsStringified, (err) => {
    if (err) {
      console.log('Error writing file: ', err);
    } else {
      console.log('Successfullly wrote products file.');
    }
  });
};
dataGenerator();
