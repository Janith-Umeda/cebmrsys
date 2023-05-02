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