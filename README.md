# Employee Record CRUD Service

Welcome to the Employee Record CRUD Service! This project provides a RESTful API for efficient management of Employee records. This README will guide you through the service, its features, and how to use it effectively.

## Overview

I'm delighted to introduce the Employee Record CRUD Service, a robust API for managing employee records with essential features:

- **CRUD Operations:** You can perform Create, Read, Update, and Delete operations on Employee records with ease.

- **Retrieve All Employees:** Easily fetch a comprehensive list of all employees using dedicated endpoints.

- **Update Employee Information:** Modify employee details by providing their unique ID.

- **Comprehensive Swagger Documentation:** Detailed documentation in Swagger format is provided to help you understand each endpoint's purpose and usage. You can access the documentation [here](https://employee-rest-service-1403e48268f3.herokuapp.com/api-docs/).

- **Heroku Hosting:** The service is seamlessly hosted on Heroku, making it readily accessible through the provided URL: [https://employee-rest-service-1403e48268f3.herokuapp.com/api/v1/employee](https://employee-rest-service-1403e48268f3.herokuapp.com/api/v1/employee).

## Getting Started

To get started with using this Employee Record CRUD Service, you can follow these steps:

1. **Swagger Documentation:** Access the [Swagger Documentation](https://employee-rest-service-1403e48268f3.herokuapp.com/api-docs/) to understand the available endpoints and their usage.

2. **API Requests:** Make API requests using the provided Heroku URL: [https://employee-rest-service-1403e48268f3.herokuapp.com/api/v1/employee](https://employee-rest-service-1403e48268f3.herokuapp.com/api/v1/employee). Detailed examples and usage scenarios can be found in the Swagger documentation.

3. **Exploring the Repository:** Explore the [GitHub repository](https://github.com/shridhar-mugalkhod/employee-service) for the source code.

## Example Usage

```bash
# Retrieve all Employees
curl https://employee-rest-service-1403e48268f3.herokuapp.com/api/v1/employee

# Update Employee Information (replace {employee_id} with the actual ID)
curl -X PUT https://employee-rest-service-1403e48268f3.herokuapp.com/api/v1/employee/{employee_id} -d "new_data_here"
