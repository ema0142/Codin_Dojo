<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
</head>
<body>
	<h1>Save Dojo</h1>
	<h2 class="container text-danger">New Ninja</h2>
    <form:form action="/ninjas/processForm" method= "POST" class="container" modelAttribute="ninja">
   <p class="form-group">
            <form:label path="dojo">Dojo</form:label>
				<form:select path="dojo">
				<c:forEach items="${allDojos}" var="dojo">
				<option value="${dojo.id}">
				${dojo.name}
				</option>
				</c:forEach>
				</form:select>
        </p>
    <p class="form-group">
        <form:label path="FirstName">First name</form:label>
        <form:errors path="FirstName"/>
        <form:input path="FirstName" class="form-control"/>
    </p>
    <p class="form-group">
        <form:label path="lasttName">last name</form:label>
        <form:errors path="lasttName"/>     
        <form:input  path="lasttName" class="form-control"/>
    </p>
    <p class="form-group">
        <form:label path="age">age</form:label>
        <form:errors path="age"/>     
        <form:input type="age" path="age" class="form-control"/>
    </p>
    <input type="submit" value="Submit" class="btn btn-primary"/>
</form:form>    
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>