<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/main.css" />
</head>

<body>
    <h1>Fruit Store</h1>
    <ul>
        <c:forEach items="${fruits}" var="fruit">
            <li>${fruit.name} - $${fruit.price}</li>
             <li>${fruit.price} - $${fruit.price}</li>
        </c:forEach>
    </ul>
</body>

</html>