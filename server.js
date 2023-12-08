import express from 'express';
import { faker } from '@faker-js/faker';

const app = express();
const port = 8000;

const generateUserObj = () => ({
  _id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

const generateCompanyObject = () => ({
  _id: faker.string.uuid(),
  name: faker.company.name(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipcode: faker.location.zipCode(),
    country: faker.location.country(),
  },
});

app.get("/api/users/new", (req, res) => {
  const newUser = generateUserObj();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = generateCompanyObject();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = generateUserObj();
  const newCompany = generateCompanyObject();
  const responseObject = {
    user: newUser,
    company: newCompany,
  };
  res.json(responseObject);
});

app.listen(port, () => console.log(`express server running on port ${port}`));
