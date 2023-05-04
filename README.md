# Online CEB Meter Reader System

## .env Configuration.

Config the API Host in next.config.js file.<br>
example :=   env:{<br>
&emsp;&emsp; API_HOST:'http://api.cebmr'<br>
}

## DataBase Configuration.

Create a DataBase called cebmr_sys and import the sql File.

# User Guide.

## Meter Reader's Functionalities.

* ### Login 
&emsp; goto : localhost:5000/login<br>
&emsp; Login to the System Using this Credentials<br>
&emsp; * Email : kamal@gmail.com | password : 1234<br>

* ### Record a Bill
&emsp; Enter customer's Account Number , Date and Reading Units. those Values are Required.<br>
&emsp; Press the OK button for save the Bill.<br>

## Customer's Functionalities.

* ### View Bills
&emsp; Enter Your Account Number.<br>
&emsp; If you had received more than 1 bills,also you can view your past bills.<br>
&emsp; You can Save your bill as a PDF using pressing print Button.<br> 

## API End Points
* route : */api/login<br>
&emsp;&emsp;Methods : POST<br>
&emsp;&emsp;For Authentication<br>
&emsp;&emsp;Parameters : email / password<br>

* route : */api/register<br>
&emsp;&emsp;Methods : POST<br>
&emsp;&emsp;For Register an user<br>
&emsp;&emsp;Parameters : email / name /password<br>

* route : */api/me<br>
&emsp;&emsp;Methods : GET<br>
&emsp;&emsp;For get a Reader's Account Information.<br>
&emsp;&emsp;Headers : Authorization: bearer ACCESS_TOKEN<br>

* route : */api/customer<br>
&emsp;&emsp;Methods : POST<br>
&emsp;&emsp;For Register a new Customer Account.<br>
&emsp;&emsp;Parameters : customer_name / account_number<br>
&emsp;&emsp;Headers : Authorization: bearer ACCESS_TOKEN<br>

* route : */api/customer/check/{ACCOUNT_NUMBER}<br>
&emsp;&emsp;Methods : GET<br>
&emsp;&emsp;For Register a new Customer Account.<br>
&emsp;&emsp;Headers : Authorization: bearer ACCESS_TOKEN<br>

* route : */api/bill<br>
&emsp;&emsp;Methods : POST<br>
&emsp;&emsp;For Save a new Bill.<br>
&emsp;&emsp;Parameters : account_number / date / id / units<br>
&emsp;&emsp;Headers : -H Authorization: bearer ACCESS_TOKEN<br>

* route : */api/bill/{ACCOUNT_NUMBER}<br>
&emsp;&emsp;Methods : GET<br>
&emsp;&emsp;For Get the Bills.<br>
&emsp;&emsp;Parameters : offset / limit<br>